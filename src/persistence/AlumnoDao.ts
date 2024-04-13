import prisma from '@/utils/Prisma'
 
/**
 * Función para obtener todos los alumnos en la base de datos
 * @returns todos los alumnos de la base de datos
 */
export async function getAllAlumnos(){
    const alumnos  = await prisma.alumno.findMany()
    return alumnos
}

/**
 * Función que cambia el estado de "activo" de un alumno
 * @param estado estado que se le asignará al alumno (true/false)
 * @param id id del alumno al que se le editará su estado de activo
 */
export async function actualizarEstadoDeAlumno(estado:boolean,id:any){
    await prisma.alumno.update({
        where: {id},
        data: {activo:estado}
    })
}