import { convertirAFecha } from "@/lib/utils";
import { gastoCrear, gastosObtenerPorSucursal, gastoModificar, gastoEliminarPorSucursal } from "@/persistence/GastosDao";

/**
 * Función que obtiene todos los gastos de acuerdo a la id de una sucursal
 * @param idSucursal - id de la sucursal
 * @returns Arreglo de gastos o mensaje de error
 */
export async function obtenerGastosDeSucursal(idSucursal: number) {
  try {
    if (idSucursal === null || idSucursal === undefined)
      throw new Error("Error al obtener los gastos, id de sucursal inválida");

    const gastos = await gastosObtenerPorSucursal(idSucursal);
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
  const fechaActual    = new Date().getTime();

  const diff = fechaActual - fechaIngresada.getTime();
  const diffDias = diff/(1000*60*60*24);

  if (diffDias > 30) {
    throw { message: "La diferencia de días debe ser menor a 30" };
  } else if (diffDias < 0) {
    throw { message: "La fecha capturada debe ser menor o igual a la fecha actual" };
  }

  const fechaFormateada = Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fechaIngresada);

  const conceptoFormateado = data.concepto.split(".").map((sentence: string) => {
    return sentence.trim()
  }).join(". ").toUpperCase();

  const nuevoGasto = {
    idSucursal: data.idSucursal,
    titulo: data.categoria.toUpperCase(),
    monto: parseFloat(data.monto.toFixed(2)),
    concepto: conceptoFormateado.trim(),
    fecha: fechaFormateada,
  };

  return await gastoCrear(nuevoGasto);
}

/**
 * Función que modifica un gasto
 * @param data - Datos del gasto
 * @returns Gasto modificado o mensaje de error
 */
export async function modificarGasto(data: any) {
  if (data === null || data === undefined)
    throw { message: "Error al modificar el gasto, datos inválidos" };

  const fechaIngresada = convertirAFecha(data.fecha, "-", "aaaa/mm/dd");
  const fechaActual    = new Date().getTime();

  const diff = fechaActual - fechaIngresada.getTime();
  const diffDias = diff/(1000*60*60*24);

  if (diffDias > 31) {
    throw { message: "La diferencia de días debe ser menor a 31" };
  } else if (diffDias < 0) {
    throw { message: "La fecha capturada debe ser menor o igual a la fecha actual" };
  }

  const fechaFormateada = Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fechaIngresada);

  const conceptoFormateado = data.concepto.split(".").map((sentence: string) => {
    return sentence.trim()
  }).join(". ").toUpperCase();

  const gasto = {
    id: data.id,
    titulo: data.categoria.toUpperCase(),
    monto: parseFloat(data.monto.toFixed(2)),
    concepto: conceptoFormateado.trim(),
    fecha: fechaFormateada,
  };
  
  return await gastoModificar(gasto);
}

/**
 * Función para eliminar gastos de cierta sucursal
 * @author Fong
 * @param id id de la sucursal a eliminar gastos
 */
export async function eliminarGastosDeSucursal(id:number) {
  await gastoEliminarPorSucursal(id)
}