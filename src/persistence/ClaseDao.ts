import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllClases() {
    return await prisma.clase.findMany();
}


export async function deleteClase(id: any) {
    return await prisma.clase.delete({ where: { id } });
}

export async function getClasesFromSucursal(id: any){
    return await prisma.clase.findMany({
        where: {
            idSucursal: id
        }
    })
}

export async function deleteClasesFromSucursal(id: any){
    await prisma.clase.deleteMany({
        where:{
            idSucursal:id
        }
    })
}