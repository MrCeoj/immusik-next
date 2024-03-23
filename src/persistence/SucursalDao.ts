import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Obtiene todas las sucursales.
 * @returns Una promesa que se resuelve en un array de objetos que representan las sucursales.
 */
export async function getAllSucursals() {
    return await prisma.sucursal.findMany();
}

/**
 * Crea una nueva sucursal.
 * @param data - Los datos de la sucursal a crear.
 * @returns Una promesa que se resuelve en el objeto que representa la sucursal creada.
 */
export async function createSucursal(data: any) {
    return await prisma.sucursal.create({ data });
}

/**
 * Elimina una sucursal por su ID.
 * @param id - El ID de la sucursal a eliminar.
 * @returns Una promesa que se resuelve en el objeto que representa la sucursal eliminada.
 */
export async function deleteSucursal(id: any) {
    return await prisma.sucursal.delete({ where: { id } });
}
