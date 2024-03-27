import { deleteClase, deleteClasesFromSucursal, getClasesFromSucursal } from "@/persistence/ClaseDao";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getClasesDeDeterminadaSucursal(id:any) {
    return getClasesFromSucursal(id)
}

export async function borrarClase(id:any){
    await deleteClase(id)
}

export async function deleteClasesDeDeterminadaSucursal(id:any){
    //console.log("borrando clases con id "+id)
    await deleteClasesFromSucursal(id)
}