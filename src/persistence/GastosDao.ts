import prisma from "@/utils/Prisma";

/**
 * Función que obtiene todos los gastos de acuerdo a la id de una sucursal
 * @param idSucursal - id de la sucursal
 * @returns Arreglo de gastos
 */
export async function gastosObtenerPorSucursal(idSucursal: number) {
  return await prisma.gasto.findMany({
    where: {
      idSucursal: idSucursal,
    },
  });
}

/**
 * Función que crea un gasto
 * @param data - Datos del gasto
 * @returns Gasto creado
 */
export async function gastoCrear(data: any) {
  return await prisma.gasto.create({ data });
}

/**
 * Función que modifica un gasto
 * @param data - Datos del gasto
 * @returns Gasto modificado
 */
export async function gastoModificar(data: any) {
  return await prisma.gasto.update({
    where: {
      id: data.id,
    },
    data: {
      monto: data.monto,
      titulo: data.titulo,
      concepto: data.concepto,
      fecha: data.fecha,
    },
  });
}