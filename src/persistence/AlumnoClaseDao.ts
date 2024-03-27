import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllAlumnoClase() {
    return await prisma.alumnoClase.findMany();
}


export async function deleteAlumnoClase(id: any) {
    return await prisma.alumnoClase.delete({ where: { id } });
}

export async function deleteAlumnoClaseFromClase(id: any) {
    return await prisma.alumnoClase.deleteMany({
        where: {
            claseId: id
        }
    })
}

