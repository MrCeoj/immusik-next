import {
  getClase,
  deleteClase,
  deleteClasesFromSucursal,
  getClasesFromSucursal,
  deleteDocenteFromClase,
  deleteSingelDocente,
  getAllClases,
  getClasesDeDeterminadoDocente,
  crearClaseSinDocente,
  crearClaseConDocente,
  modClase,
} from "@/persistence/ClaseDao";
import { Clase } from "@/entities/edge";
import { borrarAlumnoClaseConDeterminadaClase } from "./AlumnoClaseDelegate";
import { actualizarEstadoDeDocentes, obtenerDocente } from "./DocenteDelegate";
import { actualizarEstadoDeAlumnos } from "./AlumnoDelegate";
import { toArrayDiasClase, toStringDiasClase } from "@/lib/utils";
import { getDocente, setEstado } from "@/persistence/DocenteDao";

/**
 * Obtiene una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function obtenerClase(id: number) {
  try {
    return await getClase(id);
  } catch (error) {
    console.error("Error al buscar clase:", error);
    return error;
  }
}

/**
 * Regresa las clases que se imparten en cierta sucursal
 * @param id - id de la sucursal de la cual se regresarán sus clases
 *
 */
export async function getClasesDeDeterminadaSucursal(id: any) {
  return getClasesFromSucursal(id);
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 */
export async function fetchEliminarClase(id: any) {
  const response = {
    success: false,
    message: "",
  };

  const clases = await getAllClases();
  const existe = clases.some((clase) => clase.id === id);

  if (existe) {
    await borrarAlumnoClaseConDeterminadaClase(id);
    await deleteClase(id);
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
export async function deleteClasesDeDeterminadaSucursal(id: any) {
  //console.log("borrando clases con id "+id)
  await deleteClasesFromSucursal(id);
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

    return await deleteDocenteFromClase(id);
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
export async function eliminarUnDocente(id: number) {
  try {
    const clase = (await obtenerClase(id)) as Clase;
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }
    return await deleteSingelDocente(id);
  } catch (error) {
    console.error("Error al eliminar docente:", error);
    return error;
  }
}

/**
 * Función para encontrar todas las clases en la base de datos.
 * @returns se regresan las clases obtenidas
 */
export async function fecthGetAllClases() {
  //Se buscan todas las clases
  const clasesTemp = await getAllClases();

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
export async function fetchGetClasesDeDeterminadoDocente(docenteId: any) {
  const clases = await getClasesDeDeterminadoDocente(docenteId);

  return clases;
}

/**
 * Función para registrar una clase
 * @param data datos de la clase a registrar
 * @returns respuesta con el mensaje que se tratará en la página de registrar clase.
 */
export async function fetchCrearClase(data: any) {
  let response = {
    success: false,
    message: "",
  };

  //Primero se determina si la clase se va a crear sin docente o con docente.
  if (data.docente === "") {
    //Si no se crea con docente, la clase se puede crear directamente.
    await crearClaseSinDocente(data);
    response.message = "Se creó la clase.";
  } else {
    //Si hay docente se necesita validar si el docente está disponible a esta hora
    let valido = true;
    let idDocente: number = data.docente; //Se consigue la id del docente como valor numérico
    const clasesDeDocente = await fetchGetClasesDeDeterminadoDocente(idDocente); //Se obtienen las clases de dicho docente
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
                response.message = "El docente no cuenta con ese horario disponible.";
                break;
              }
            }
          }
        }
      }

      //Si después de todas las validaciones el horario es válido, se crea la clase
      if (valido) {
        response.message = "Se creó la clase.";
        await crearClaseConDocente(data);
      }
    } else {
      //Si el docente no imparte ninguna clase no es necesario la validación, se registra la clase directamente.
      await crearClaseConDocente(data);
      response.message = "Se creó la clase.";
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
  clase.hora = `${clase.hora}:00 - ${Number(clase.hora) + 1}:00`;
  clase.cupoMax = Number(clase.cupoMax);

  // Validar si la clase ya existe
  const clasesSucursal = await getClasesDeDeterminadaSucursal(clase.idSucursal);

  // Validar que no esté duplicado el nombre de la clase en la misma sucursal
  // pero permitir que se modifique la clase con el mismo nombre
  const existeNombre = clasesSucursal
    .filter((claseSucursal) => claseSucursal.id !== clase.id)
    .some((claseSucursal) => claseSucursal.nombre === clase.nombre);

  if (existeNombre) {
    throw { message: "Ya existe una clase con ese nombre en la sucursal" };
  }

  // Validar que el docente seleccionado tenga disponibilidad en el horario de la clase
  const clasesDocente = await getClasesDeDeterminadoDocente(clase.idDocente);
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

  // Actualizar la clase
  const claseModificada = await modClase(clase);
  const docente = await getDocente(clase.idDocente);

  // Actualizar el estado de docente a activo si su estado es inactivo
  if (docente?.estado === "INACTIVO") {
    setEstado("ACTIVO", clase.idDocente);
  }

  return claseModificada;
}
