import { createSucursal, editSucursal, getAllSucursals } from "../persistence/SucursalDao";

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
  let response = {
    success: false,
    message: ''
  }

  const sucursalesTemp = await getAllSucursals()

  const existeSucursal = sucursalesTemp.some(sucursalTemp => sucursalTemp.nombre.toUpperCase() === data.nombre.toUpperCase())

  if(existeSucursal){
    response.message = "Ya existe una sucursal con ese nombre."
  }else{
    const sucursal = await createSucursal(data)
    if(sucursal){
      response.message = "Se registró correcamente la sucursal"
      response.success = true
    }else{
      response.message = "Hubo un problema al registrar la sucursal"
    }
  }

  return response
}

export async function fetchEditarSucursal(data: any){
  let response = { //1. Se crea una response con un mensaje
    success: false,
    message: ''
  }

  //2. Se ejecutan validaciones extra
  const sucursalesTemp = await getAllSucursals()
  const existeSucursal = sucursalesTemp.some(sucursalTemp => sucursalTemp.nombre.toUpperCase() === data.nombre.toUpperCase())
  if(existeSucursal){
    response.message = "Ya existe una sucursal con ese nombre." //3. Si hay error, se declara mensaje de error.
  }else{
    const sucursal = editSucursal(data.id,data) //3. Si no hay error se manda llamar el editar sucursal. 
    response.message="Se ha modificado la sucursal correctamente." //3. Se declara mensaje de exito.
  } 

  return response //4. Se regresa la respuesta.
}