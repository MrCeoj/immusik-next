import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

//Regresa todas las clases
export async function getAllClases() {
    return await prisma.clase.findMany();
}

/*
* Borra una clase
* @param id: id de la clase a borrar
*  */
export async function deleteClase(id: any) {
    return await prisma.clase.delete({ where: { id } });
}

/*
* Regresa todas las clases de cierta sucursal
* @param id: id de la sucursal de la cual se buscaran sus clases
*  */
export async function getClasesFromSucursal(id: any){
    return await prisma.clase.findMany({
        where: {
            idSucursal: id
        }
    })
}

/*
* Elimina clases de cierta sucursal
* @param id: la id de la sucursal cuyas clases van a ser eliminadas
*  */
export async function deleteClasesFromSucursal(id: any){
    await prisma.clase.deleteMany({
        where:{
            idSucursal:id
        }
    })
}