import {
  claseObtener,
  claseEliminar,
  claseEliminarPorSucursal,
  clasesObtenerPorSucursalId,
  claseDesasignarDeUna,
  claseObtenerTodas,
  claseObtenerPorDocete,
  claseCrearSinDocente,
  claseCrearConDocente,
  claseModificar,
  claseDesasignarDocenteDeCiertas,
} from "@/persistence/ClaseDao";
import { Clase } from "@/entities/edge";
import { eliminarAlumnoClasePorClase, obtenerTodosAlumnoClase } from "./AlumnoClaseDelegate";
import {
  actualizarEstadoDeDocentes,
  verificarEstado,
  verificarSinOffset,
} from "./DocenteDelegate";
import { actualizarEstadoDeAlumnos } from "./AlumnoDelegate";
import { toArrayDiasClase, toStringDiasClase } from "@/lib/utils";
import { docenteObtener, docenteEditarEstado } from "@/persistence/DocenteDao";

/**
 * Obtiene una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function obtenerClase(id: number) {
  try {
    return await claseObtener(id);
  } catch (error) {
    return error;
  }
}

/**
 * Regresa las clases que se imparten en cierta sucursal
 * @param id - id de la sucursal de la cual se regresarán sus clases
 *
 */
export async function obtenerClasesPorSucursal(id: any) {
  return await clasesObtenerPorSucursalId(id);
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 */
export async function eliminarClase(id: any) {
  const response = {
    success: false,
    message: "",
  };

  const clases = await claseObtenerTodas();
  const existe = clases.some((clase) => clase.id === id);

  if (existe) {
    await eliminarAlumnoClasePorClase(id);
    await claseEliminar(id);
    await actualizarEstadoDeDocentes();
    await actualizarEstadoDeAlumnos();
    response.message = "Clase eliminada exitosamente.";
  } else {
    response.message = "No existe la clase a eliminar.";
  }

  return response;
}

/**
 * Borra clases pertenecientes a determinada sucursal
 * @param id: id de la sucursal cuyas clases serán eliminadas.
 */
export async function eliminarClasesPorSucursal(id: any) {
  await claseEliminarPorSucursal(id);
}

/**
 * Elimina un docente de una clase
 * @param id
 * @return la clase con el docente eliminado
 */
export async function eliminarDocentedeClase(id: number) {
  try {
    // Obtener clase de la base de datos para hacer validaciones
    const clase = (await obtenerClase(id)) as Clase;

    // Validar que la clase exista y tenga docente asignado
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }

    return await claseDesasignarDeUna(id);
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
    return new Error("Error al eliminar docente de clase: " + error);
  }
}

/**
 * Elimina un docente de una clase
 * @param id - id de la clase a la que se le eliminará el docente
 * @returns - la clase con el docente eliminado
 */
export async function eliminarUnDocente(id: number, idDocente: number) {
  try {
    const clase = await obtenerClase(id);
    if (clase instanceof Error) {
      throw new Error("La clase no existe");
    }
    const asClase = clase as Clase;
    if (asClase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }
    if (asClase.idDocente !== idDocente) {
      throw new Error("El docente no está asignado a la clase");
    }
    verificarEstado(idDocente);
    return await claseDesasignarDeUna(id);
  } catch (error) {
    console.error("Error al eliminar docente:", error);
    return error;
  }
}

/**
 * Función para encontrar todas las clases en la base de datos.
 * @returns se regresan las clases obtenidas
 */
export async function obtenerTodasClases() {
  //Se buscan todas las clases
  const clasesTemp = await claseObtenerTodas();

  //Las clases se dividen en aquellas que no tienen docente y aquellas donde si tienen docente
  //De igual forma cada uno de estos 2 sub-arreglos se ordena por orden alfabético
  const clasesSinProfesor = clasesTemp
    .filter((clase) => clase.idDocente === null)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
  const clasesConProfesor = clasesTemp
    .filter((clase) => clase.idDocente !== null)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  //Los 2 sub-arreglos se vuelven a unir en un sub-arreglo llamado clases
  const clases = clasesSinProfesor.concat(clasesConProfesor);

  //Se regresan las clases
  return clases;
}

/**
 * Función que regresa las clases que imparte cierto docente.
 * @param docenteId la id del docente del cual se regresarán sus clases.
 * @returns las clases de dicho docente.
 */
export async function obtenerClasesPorDocente(docenteId: any) {
  const clases = await claseObtenerPorDocete(docenteId);

  return clases;
}

/**
 * Función para registrar una clase
 * @param data datos de la clase a registrar
 * @returns respuesta con el mensaje que se tratará en la página de registrar clase.
 */
export async function registrarClase(data: any) {
  let response = {
    success: false,
    message: "",
  };

  //Se obtienen las clases de la sucursal en la que se va a crear la clase
  let sucursalIdNum: number = data.sucursal
  //console.log(sucursalIdNum)
  const clasesDeSucursal = await obtenerClasesPorSucursal(sucursalIdNum)

  //Se encuentra si ya existe una clase con ese nombre en la sucursal.
  const repetida = clasesDeSucursal.some((clase)=> clase.nombre === data.nombre)

  //Si existe ya una clase con ese nombre no se permite continuar
  if(repetida){
    response.message = "Ya existe una clase con ese nombre en esta sucursal."
  }else{
    //Primero se determina si la clase se va a crear sin docente o con docente.
    if (data.docente === "") {
      //Si no se crea con docente, la clase se puede crear directamente.
      await claseCrearSinDocente(data);
      response.message = "Se creó la clase.";
    } else {
      //Si hay docente se necesita validar si el docente está disponible a esta hora
      let valido = true;
      let idDocente: number = data.docente; //Se consigue la id del docente como valor numérico
      const clasesDeDocente = await obtenerClasesPorDocente(idDocente); //Se obtienen las clases de dicho docente
      const diasARegistrar: string[] = data.dias.split(","); //Se dividen los días de la clase a registrar en un arreglo.

      //Si el docnete imparte alguna clase se continua con la validación
      if (clasesDeDocente.length > 0) {
        for (const clase of clasesDeDocente) {
          //Por cada clase del docente se extraen sus días y se dividen en un arreglo de Strings
          const diasDeClase: string[] = clase.dias.split(",");

          //Se itera por cada día que se imparte la clase
          for (const diaDeClase of diasDeClase) {
            //Se itera por cada día que se imparte la clase a registrar
            for (const diaAR of diasARegistrar) {
              //Se comparan todos los días de la clase con todos los días de la clase a registrar
              if (diaAR === diaDeClase) {
                //Si se imparte un mismo día, se verifica que no se imparta la misma hora.
                if (clase.hora === data.horario) {
                  /*Si se imparte durante la misma hora se declara la bandera "valido" como false
                  se asigna un mensaje de error y se cortan los ciclos.*/
                  valido = false;
                  response.message =
                    "El docente no cuenta con ese horario disponible.";
                  break;
                }
              }
            }
          }
        }

        //Si después de todas las validaciones el horario es válido, se crea la clase
        if (valido) {
          response.message = "Se creó la clase.";
          await claseCrearConDocente(data);
        }
      } else {
        //Si el docente no imparte ninguna clase no es necesario la validación, se registra la clase directamente.
        await claseCrearConDocente(data);
        response.message = "Se creó la clase.";
      }
    }
  }

  

  //Se actualiza el estado de los docentes
  actualizarEstadoDeDocentes();
  return response;
}

/**
 * Función que actualiza la información de una clase.
 * @param clase - La clase a modificar.
 * @returns La clase modificada.
 */
export async function modificarClase(clase: any) {
  // Dar formato a los campos de la clase
  clase.nombre = clase.nombre.trim().toUpperCase();
  clase.cupoMax = Number(clase.cupoMax);

  const claseActual = await claseObtener(clase.id);
  let idDocenteActual;
  if (claseActual !== undefined && claseActual !== null) {
    idDocenteActual = claseActual?.idDocente;
  }
  console.log("idDocenteActual", idDocenteActual);
  // Validar si la clase ya existe
  const clasesSucursal = await obtenerClasesPorSucursal(clase.idSucursal);

  // Validar que no esté duplicado el nombre de la clase en la misma sucursal
  // pero permitir que se modifique la clase con el mismo nombre
  const existeNombre = clasesSucursal
    .filter((claseSucursal) => claseSucursal.id !== clase.id)
    .some((claseSucursal) => claseSucursal.nombre === clase.nombre);

  if (existeNombre) {
    throw { message: "Ya existe una clase con ese nombre en la sucursal" };
  }

  // Validar que el docente seleccionado tenga disponibilidad en el horario de la clase
  const clasesDocente = await claseObtenerPorDocete(clase.idDocente);
  // se recorren las clases del docente que no sean la clase a modificar
  clasesDocente
    .filter((claseDeDocente) => claseDeDocente.id !== clase.id)
    .forEach((claseDeDocente: Clase) => {
      // se recorren los dias de la clase
      toArrayDiasClase(claseDeDocente.dias).forEach((dia: string) => {
        // se valida si el docente tiene una clase en el mismo dia y hora
        if (clase.dias.includes(dia) && claseDeDocente.hora === clase.hora) {
          throw {
            message: `El docente seleccionado ya tiene una clase el día ${dia} de las ${clase.hora} horas`,
          };
        }
      });
    });

  // una vez terminada la validación se le da formato a los dias de la clase
  clase.dias = toStringDiasClase(clase.dias);
  // Actualizar la clase y el docente por si es necesario cambiar su estado
  const claseModificada = await claseModificar(clase);
  const docente = await docenteObtener(clase.idDocente);
  if (idDocenteActual !== undefined && idDocenteActual !== null)
    await verificarSinOffset(idDocenteActual);

  // Actualizar el estado de docente a activo si su estado es inactivo
  if (docente?.estado === "INACTIVO") {
    docenteEditarEstado("ACTIVO", clase.idDocente);
  }

  return claseModificada;
}

/**
 * Función que regresa clases con cupo disponible
 * @returns clases con cupo disponible
 */
export async function obtenerClasesDisponibles() {
  const clases = await claseObtenerTodas() //Se obtienen todas las clases
  const alumnoClases = await obtenerTodosAlumnoClase() //Se obtienen todos los registros alumno-clase

  //Se crea un arreglo para guardar las clases con cupo disponible
  const clasesConCupo: { id: number; idSucursal: number; idDocente: number | null; nombre: string; cupoMax: number; dias: string; hora: string; }[]  = []

  /*Por cada clase se encuentran sus registros alumnoClase, si tiene la misma cantidad de registros que su
  cupoMax significa que está llena, si no, no está llena*/
  clases.map((clase)=>{
    const alumnoClasesDeClase = alumnoClases.filter((ac)=>ac.claseId===clase.id)
    if(alumnoClasesDeClase.length<clase.cupoMax){
      clasesConCupo.push(clase) //Se agrega la clase al arreglo de clases disponibles
    }
  })

  //Se regresan las clases disponibles
  return clasesConCupo
}

/**
 * Función para desasignar docente de ciertas clases
 * @author Fong
 * @param ids ids de las clases a las que se les va a desasignar el docente
 * @returns las clases a las que se les desasignó el docente
 */
export async function desasignarDocenteDeCiertasClases(ids:number[]) {

  let response = {
    success: false,
    message: ""
  }

  const data = await claseDesasignarDocenteDeCiertas(ids)
  if(!data) response.message="Error al desasignar al docente."
  actualizarEstadoDeDocentes()
  response.message="Docente desasignado exitosamente."
  return response
}