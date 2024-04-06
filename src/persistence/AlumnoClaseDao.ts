import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

/*
* Un registro AlumnoClase es una tabla intermedia en nuestra base de datos,
* ya que un alumno puede estar inscrito a muchas clases y una clase puede tener muchos alumnos
* creando una relación de muchos a muchos, la cual para ser normalizada necesita una tabla
* intermedia
* 
* La tabla AlumnoClase contiene su propia id autogenerada, la id del alumno y la id de la clase 
* en la que está registrado el alumno.
*  */

//Regresa todos los registros AlumnoClase
export async function getAllAlumnoClase() {
    return await prisma.alumnoClase.findMany();
}

/*
* Borra un registro AlumnoClase
* @param id: id del registro AlumnoClase que se eliminará
*  */
export async function deleteAlumnoClase(id: any) {
    return await prisma.alumnoClase.delete({ where: { id } });
}

/*
* Borra registro AlumnoClase solo de una clase específica.
* @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
*  */
export async function deleteAlumnoClaseFromClase(id: any) {
    return await prisma.alumnoClase.deleteMany({
        where: {
            claseId: id
        }
    })
}

/**
 * Función para obtener los registros AlumnoClase relacionados a cierto alumno
 * @param id id del alumno del cual se regresarán los registros AlumnoClase
 * @returns los registros AlumnoClase relacionadas al alumno
 */
export async function getClasesDeCiertoAlumno(id:any){
    const clases = await prisma.alumnoClase.findMany({
        where: {alumnoId:id}
    })
    return clases
}
