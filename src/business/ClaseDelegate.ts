import {
  getClase,
  deleteClase,
  deleteClasesFromSucursal,
  getClasesFromSucursal,
  deleteDocenteFromClase,
} from "@/persistence/ClaseDao";

/**
 * Obtiene una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function obtenerClase(id: number) {
  try {
    return await getClase(id);
  } catch (error) {
    console.error("Error al buscar clase:", error);
    throw error;
  }
}

/**
 * Regresa las clases que se imparten en cierta sucursal
 * @param id - id de la sucursal de la cual se regresarán sus clases
 *
 */
export async function getClasesDeDeterminadaSucursal(id: any) {
  return getClasesFromSucursal(id);
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 */
export async function borrarClase(id: any) {
  await deleteClase(id);
}

/**
 * Borra clases pertenecientes a determinada sucursal
 * @param id: id de la sucursal cuyas clases serán eliminadas.
 */
export async function deleteClasesDeDeterminadaSucursal(id: any) {
  //console.log("borrando clases con id "+id)
  await deleteClasesFromSucursal(id);
}

/**
 * Elimina un docente de una clase
 * @param id
 * @return la clase con el docente eliminado
 */
export async function eliminarDocentedeClase(id: number) {
  try {
    // Obtener clase de la base de datos para hacer validaciones
    const clase = await obtenerClase(id);

    // Validar que la clase exista y tenga docente asignado
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }

    return await deleteDocenteFromClase(id);
  } catch (error) {
    throw new Error("Error al eliminar docente de clase: " + error);
  }
}
