import { createSucursal, getAllSucursals } from "../persistence/SucursalDao";

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

/*
* @param data: recibe data, la cual tiene dentro el nombre y direccion
de la sucursal que se creará
*/ 
export async function fetchCreateSucursal(data: any){
  const sucursal = await createSucursal(data)
  return sucursal;
}