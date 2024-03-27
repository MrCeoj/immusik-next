import { deleteAlumnoClaseFromClase } from "@/persistence/AlumnoClaseDao";
import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient()

export default async function borrarAlumnoClaseConDeterminadaClase(id:any){
    return await deleteAlumnoClaseFromClase(id);
}