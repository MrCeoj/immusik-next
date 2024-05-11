import prisma from "@/utils/Prisma";

/**
 * Función que obtiene todos los gastos de acuerdo a la id de una sucursal
 * @param idSucursal - id de la sucursal
 * @returns Arreglo de gastos
 */
export async function gastosPorId(idSucursal: number) {
  return await prisma.gasto.findMany({
    where: {
      idSucursal: idSucursal,
    },
  });
}
