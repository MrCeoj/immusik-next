import { gastosPorId } from "@/persistence/GastosDao";

/**
 * Función que obtiene todos los gastos de acuerdo a la id de una sucursal
 * @param idSucursal - id de la sucursal
 * @returns Arreglo de gastos o mensaje de error
 */
export async function fetchGastos(idSucursal: number) {
  try {
    if (idSucursal === null || idSucursal === undefined)
      throw new Error("Error al obtener los gastos, id de sucursal inválida");

    const gastos = await gastosPorId(idSucursal);
    return {status: 200, gastos}
  } catch (error: any) {
    console.log(error.message);
    return { status: 500, message: error.message };
  }
}
