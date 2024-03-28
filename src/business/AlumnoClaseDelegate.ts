import { deleteAlumnoClaseFromClase } from "@/persistence/AlumnoClaseDao";
import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient()

/*
* Elimina registros AlumnoClase solo de cierta clase
* @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
*  */
export default async function borrarAlumnoClaseConDeterminadaClase(id:any){
    return await deleteAlumnoClaseFromClase(id);
}