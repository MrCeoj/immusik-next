import { deleteAlumnoClaseFromClase, getAllAlumnoClase,getClasesDeCiertoAlumno} from "@/persistence/AlumnoClaseDao";
import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient()

/*
* Elimina registros AlumnoClase solo de cierta clase
* @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
*  */
export async function borrarAlumnoClaseConDeterminadaClase(id:any){
    return await deleteAlumnoClaseFromClase(id);
}

/**
 * Función para obtener todos los registros AlumnoClase
 * @returns todos los registros Alumno-Clase
 */
export async function fetchGetAllAlumnoClases(){
    return await getAllAlumnoClase()
}

/**
 * Función que encuentra todos los registros AlumnoClase de cierto alumno, esto para
 * saber a cuales clases está inscrito.
 * @param id id del alumno del cual se quieren encontrar sus registros AlumnoClase
 * @returns los registros AlumnoClase de cierto alumno
 */
export async function fetchGetClasesDeCiertoAlumno(id:any){
    const clases = await getClasesDeCiertoAlumno(id)
    return clases
}