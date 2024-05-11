import { convertirAFecha } from "@/lib/utils";
import { crearGasto, gastosPorId } from "@/persistence/GastosDao";
import { Gasto } from "@prisma/client";

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

/**
 * Función que crea un gasto
 * @param data - Datos del gasto
 * @returns Gasto creado o mensaje de error
 */
export async function registrarGasto(data: any) {
  if (data === null || data === undefined)
    throw { message: "Error al crear el gasto, datos inválidos" };


  const fechaIngresada = convertirAFecha(data.fecha, "-", "aaaa/mm/dd");
  const fechaFin    = new Date().getTime();

  const diff = fechaFin - fechaIngresada.getTime();
  const diffDias = diff/(1000*60*60*24);

  if (diffDias > 30) {
    throw { message: "La diferencia de días debe ser menor a 30" };
  } else if (diffDias < 0) {
    throw { message: "La fecha capturada debe ser menor a la fecha actual" };
  }

  const fechaFormateada = Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fechaIngresada);

  const nuevoGasto = {
    idSucursal: data.idSucursal,
    titulo: data.categoria.toUpperCase(),
    monto: parseFloat(data.monto.toFixed(2)),
    concepto: data.concepto.toUpperCase(),
    fecha: fechaFormateada,
  };

  return await crearGasto(nuevoGasto);
}