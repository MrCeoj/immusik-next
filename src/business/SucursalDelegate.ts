import { getAllSucursals } from "../persistence/SucursalDao";

/**
 * Obtiene todas las sucursales.
 * 
 * @returns Una promesa que se resuelve con un arreglo de sucursales o un objeto con un mensaje si no se encontraron registros.
 */

export async function fetchAllSucursals() {
  const sucursals = await getAllSucursals();

  if (sucursals.length === 0) {
    return { message: "No records found" };
  }

  return sucursals;
}
