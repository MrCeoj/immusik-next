import {
  alumnoClaseObtenerPorClase,
  alumnoClaseObtenerPorAlumno,
  claseObtenerPorAlumno,
  alumnoCambiarEstado,
  alumnoClaseEliminarPorAlumnoYClase,
  claseObtenerDisponibles,
  alumnoClaseCrear,
  desasignarMuchos,
  alumnoClaseEliminarPorClase,
  alumnoClaseObtenerPorClaseYAlumno,
  alumnoClaseEliminar,
  alumnoClaseObtenerTodos,
  alumnoClaseEliminarMuchosPorClaseYAlumno,
} from "@/persistence/AlumnoClaseDao";
import { alumnoActualizarEstado, alumnoObtenerPorCurp } from "@/persistence/AlumnoDao";
import { actualizarEstadoDeAlumnos } from "./AlumnoDelegate";

/*
 * Elimina registros AlumnoClase solo de cierta clase
 * @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
 *  */
export async function eliminarAlumnoClasePorClase(id: any) {
  return await alumnoClaseEliminarPorClase(id);
}

/**
 * Función para eliminar un alumno de la clase
 * @param idClase Identificador de la clase
 * @param idAlumno Identificador del alumno
 * @returns Mensaje de éxito o error
 */
export async function eliminarAlumnoDeClase(idClase: number, idAlumno: number) {
  // Obtener el registro AlumnoClase
  const alumnoClase = await alumnoClaseObtenerPorClaseYAlumno(idClase, idAlumno);

  // Si no se encontró el registro regresa un error
  if (!alumnoClase) {
    throw { message: "No se encontró el registro de la clase" };
  }

  // Validar si el alumno está inscrito en solo una clase
  const clases = await alumnoClaseObtenerPorAlumno(idAlumno);
  // cambiar su estado a inactivo si solo está inscrito en una clase
  if (clases.length === 1) {
    await alumnoActualizarEstado(false, idAlumno);
  }

  // Eliminar el registro AlumnoClase
  return await alumnoClaseEliminar(alumnoClase.id);
}

/**
 * Función para obtener todos los registros AlumnoClase
 * @returns todos los registros Alumno-Clase
 */
export async function obtenerTodosAlumnoClase() {
  return await alumnoClaseObtenerTodos();
}

/**
 * Función que encuentra todos los registros AlumnoClase de cierto alumno, esto para
 * saber a cuales clases está inscrito.
 * @param id id del alumno del cual se quieren encontrar sus registros AlumnoClase
 * @returns los registros AlumnoClase de cierto alumno
 */
export async function obtenerClasesPorAlumno(id: any) {
  const clases = await alumnoClaseObtenerPorAlumno(id);
  return clases;
}

/**
 * Función para obtener los alumnos de una clase
 * @param id Identificador de la clase
 * @returns Arreglo de alumnos que pertenecen a la clase
 */
export async function obtenerAlumnosDeClase(id: number) {
  const alumnos = await alumnoClaseObtenerPorClase(id);

  // Si no se encontraron alumnos inscritos a la clase regresa un error
  if (alumnos.length === 0 || alumnos.includes(null)) {
    throw { message: "No se encontraron alumnos inscritos a la clase." };
  }

  // Ordena los alumnos por nombre
  alumnos.sort((a, b) => {
    // Si alguno de los alumnos es null no se cambia el orden
    if (a === null || b === null) return 0;
    // Si ambos alumnos tienen nombre se ordenan por nombre
    // Se utiliza localCompare para que permita ordenar caracteres especiales
    else return a.nombre.localeCompare(b.nombre);
  });

  return alumnos;
}

/**
 * Función que obtiene un arreglo de objetos de clases con nombre de sucursal a los cuales pertenece un alumno
 * @param id - Identificador del alumno
 * @returns Arreglo de objetos de clases con nombre de sucursal
 */
export async function obtenerClasesDeAlumno(id: number) {
  const clases = await claseObtenerPorAlumno(id);
  if (clases.length === 0) {
    return [];
  }
  clases.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
  });
  return clases;
}

/**
 * Función que actualiza automáticamente el estado de un alumno a activo si se inscribe a una clase
 * Igualmente a inactivo si se desinscribe de todas las clases
 * @param idAlumno - Identificador del alumno
 * @returns Mensaje de éxito o error
 */
export async function revisarEstado(idAlumno: number) {
  try {
    const clases = await obtenerClasesDeAlumno(idAlumno);
    if (clases.length === 0) {
      await alumnoCambiarEstado(false, idAlumno);
    }
    if (clases.length > 0) {
      await alumnoCambiarEstado(true, idAlumno);
    }
    return "Estado actualizado";
  } catch (error: any) {
    return error.message;
  }
}

/**
 * Función que anula la inscripción de un alumno a determinada clase por sus identificadores
 * @param idClase - Identificador de la clase
 * @param idAlumno - Identificador del alumno
 * @returns Mensaje de éxito o error
 */
export async function anularInscripcion(idClase: number, idAlumno: number) {
  try {
    if (idClase === null || idClase === undefined) {
      throw Error("Error al desinscribir: Clase no proporcionada");
    }
    if (idAlumno === null || idAlumno === undefined) {
      throw Error("Error al desinscribir: Alumno no proporcionado");
    }
    const mensaje = await alumnoClaseEliminarPorAlumnoYClase(idAlumno, idClase);
    return mensaje;
  } catch (error: any) {
    return error.message;
  }
}

/**
 * FUnción que verifica si existe traslape entre las clases disponibles con los horarios
 * ofrecidos y las clases que ya cursa el alumno
 * @param idAlumno - Identificador del alumno
 * @returns Arreglo de clases totalmente disponibles por horario y cupo
 */
export async function clasesSinTraslape(idAlumno: number) {
  // Clases con cupo disponible
  const clases = await claseObtenerDisponibles();

  // CLases en las que el alumno ya está inscrito.
  const inscritas = await claseObtenerPorAlumno(idAlumno);

  // Arreglo de clases donde los horarios no traslapen
  const sinTraslape: any[] = [];

  // Mapa donde se guardan los horarios de las clases inscritas del alumno
  const mapaHorarios: any = {};

  // Bandera que permite
  let traslape = false;

  // Construimos el mapa
  inscritas.forEach((clase) => {
    const dias = clase.dias.split(",");
    const [horaInicio, horaFin] = clase.hora.split(" - ");
    dias.forEach((dia) => {
      if (!mapaHorarios[dia]) {
        mapaHorarios[dia] = {};
      }
      mapaHorarios[dia][horaInicio] = horaFin;
    });
  });

  // Iteramos sobre las clases con cupo disponible para verificar que el horario no choque.
  clases.forEach((clase) => {
    traslape = false;
    const dias = clase.dias.split(",");
    const [horaInicio, horaFin] = clase.hora.split(" - ");

    // Comparamos disponibilidad de acuerdo al mapa.
    dias.some((dia) => {
      if (mapaHorarios[dia]) {
        Object.keys(mapaHorarios[dia]).some((inicio: any) => {
          const fin = mapaHorarios[dia][inicio];
          if (horaInicio < fin && inicio < horaFin) {
            console.debug(`Traslape en ${dia} de ${horaInicio} a ${horaFin}`);
            traslape = true;
            return;
          }
        });
      }
    });

    // Si no hay traslape, se agrega
    console.log("Clase: ", clase, traslape);
    if (!traslape) sinTraslape.push(clase);
  });

  return sinTraslape;

  /**
   * Importante notar que se usa un mapa, o hash map, el cual
   * nos devuelve la lista indexada de cada clase con sus
   * horarios (días y hora).
   * Comparar cada horario dia con día y hora con hora
   * representaría demasiado tiempo de espera, mejor comparar
   * por el índice del día y revisar horas.
   */
}

/**
 * Función que inscribe un alumno a una clase por su Id
 * @param idAlumno - Identificador del alumno
 * @param idClase - Identificador de la clase
 */
export async function inscribirAlumno(idAlumno: number, idClase: number) {
  try {
    if (idAlumno === undefined || idAlumno === null)
      throw new Error("Id del alumno no proporcionado");

    if (idClase === undefined || idClase === null)
      throw new Error("Id de la clase no proporcionado");

	  const mensaje = await alumnoClaseCrear(idAlumno, idClase);
	  revisarEstado(idAlumno)
	
	  return mensaje
  } catch (error: any) {
	  return error.message
  }
}

/**
 * Función que inscribe un alumno a una clase por su CURP
 * @param curp - Curp del alumno
 * @param idClase - Identificador de la clase
 */
export async function inscribirPorCurp(curp: string, idClase: number){
  try{
    if(curp === "" || curp === null || curp === undefined)
      throw new Error("Curp del alumnono proporcionado")

    if (idClase === undefined || idClase === null)
      throw new Error("Id de la clase no proporcionado");

    const al = await alumnoObtenerPorCurp(curp)

    if(!al)
      throw new Error("registro de alumno no encontrado")

    const mensaje = inscribirAlumno(al.id, idClase)
    return mensaje
  }catch(error:any){
    return error.message
  }
}

/**
 * Función para desasignar muchas clases a un alumno
 * @author Fong
 * @param alumnoId id del alumno cuyas clases se van a desasignar
 * @param claseId id de las clases que se van a desasignar
 * @returns la respuesta del método desasignarMuchos
 */
export async function desasignarMuchosAlumnos(alumnoId:number,claseId:number[]){
  try{
    //Se manda llamar la función a la capa de persistencia
    const respuesta = await desasignarMuchos(alumnoId,claseId)
    //Se actualiza el estado de los alumnos
    actualizarEstadoDeAlumnos()
    return respuesta
  }catch(e:any){
    console.log("AlumnoClaseDelegate: "+e.message)
    return null
  }
}

/**
 * Función que elimina varios registros alumnoClase por id de clase e id de varios alumnos
 * @author Fong
 * @param idClase id de la clase de la cual se desasignarán los alumnos
 * @param idAlumno id de los alumnos a desasignar de la clase
 * @returns los registros eliminados
 */
export async function desasignarMuchosAlumnosDeUnaClase(idClase:number,idAlumno:number[]){
  const response = {
    message: ""
  }

  const respuesta = await alumnoClaseEliminarMuchosPorClaseYAlumno(idClase,idAlumno)

  if(!respuesta){
    response.message="Error al desasignar a los alumnos."
  }else{
    response.message="Alumnos desasignados exitosamente."
  }

  actualizarEstadoDeAlumnos()  
  
  return response
}