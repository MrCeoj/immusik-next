import { getAllAlumnos,actualizarEstadoDeAlumno } from "@/persistence/AlumnoDao"
import { fetchGetClasesDeCiertoAlumno } from "./AlumnoClaseDelegate"

/**
 * Función para obtener a todos los alumnos
 * @returns todos los alumnos en la base de datos
 */
export async function fecthGetAllAlumnos(){
    const alumnos = await getAllAlumnos()
    return alumnos
}

/**
 * Función que actualiza el estado de todos los alumnos, esta función se manda llamar
 * cada que se crea una clase, cada que se elimina una clase, cuando se elimina una sucursal
 * o cada que se desasigna una clase a un alumno.
 */
export async function actualizarEstadoDeAlumnos(){
    const alumnos = await fecthGetAllAlumnos() //Se obtienen todos los alumnos
    for(const alumno of alumnos){
        //Por cada alumno se obtienen sus registros AlumnoClase
        const clasesDelAlumno = await fetchGetClasesDeCiertoAlumno(alumno.id)
        if(clasesDelAlumno.length>0){ //Si tiene registros AlumnoClase se declara su estado activo = true
            fetchActualizarEstadoDeAlumno(true,alumno.id)
        }else{ //Si no, activo = false
            fetchActualizarEstadoDeAlumno(false,alumno.id)
        }
    }
}

/**
 * Función que actualiza el estado "activo" del alumno, este estado es booleano.
 * @param estado el estado que se le asignará al alumno
 * @param id la id del alumno al que se le editará su estado
 */
export async function fetchActualizarEstadoDeAlumno(estado:boolean,id:any){
    await actualizarEstadoDeAlumno(estado,id)
}