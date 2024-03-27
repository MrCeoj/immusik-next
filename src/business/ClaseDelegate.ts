import { deleteClase, deleteClasesFromSucursal, getClasesFromSucursal } from "@/persistence/ClaseDao";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/*
* Regresa las clases que se imparten en cierta sucursal
* @param id - id de la sucursal de la cual se regresarán sus clases
*  */
export async function getClasesDeDeterminadaSucursal(id:any) {
    return getClasesFromSucursal(id)
}

/*
* Borra una clase
* @param id: id de la clase a borrar
*  */
export async function borrarClase(id:any){
    await deleteClase(id)
}

/*
* Borra clases pertenecientes a determinada sucursal
* @param id: id de la sucursal cuyas clases serán eliminadas.
*  */
export async function deleteClasesDeDeterminadaSucursal(id:any){
    //console.log("borrando clases con id "+id)
    await deleteClasesFromSucursal(id)
}