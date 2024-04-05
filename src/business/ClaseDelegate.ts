import {
  getClase,
  deleteClase,
  deleteClasesFromSucursal,
  getClasesFromSucursal,
  deleteDocenteFromClase,
  deleteSingelDocente,
  getAllClases,
} from "@/persistence/ClaseDao";
import { Clase } from "@prisma/client";

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
    return error;
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
    const clase = (await obtenerClase(id)) as Clase;

    // Validar que la clase exista y tenga docente asignado
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }

    return await deleteDocenteFromClase(id);
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
    return new Error("Error al eliminar docente de clase: " + error);
  }
}

export async function eliminarUnDocente(id: number) {
  try {
    const clase = (await obtenerClase(id)) as Clase;
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }
    return await deleteSingelDocente(id);
  } catch (error) {
    console.error("Error al eliminar docente:", error);
    return error;
  }
}

/**
 * Función para encontrar todas las clases en la base de datos.
 * @returns se regresan las clases obtenidas
 */
export async function fecthGetAllClases(){
  //Se buscan todas las clases
  const clasesTemp = await getAllClases();

  //Las clases se dividen en aquellas que no tienen docente y aquellas donde si tienen docente
  //De igual forma cada uno de estos 2 sub-arreglos se ordena por orden alfabético
  const clasesSinProfesor = (clasesTemp.filter((clase)=>clase.idDocente===null)).sort((a,b)=> a.nombre.localeCompare(b.nombre))
  const clasesConProfesor = (clasesTemp.filter((clase)=>clase.idDocente!==null)).sort((a,b)=> a.nombre.localeCompare(b.nombre))
  
  //Los 2 sub-arreglos se vuelven a unir en un sub-arreglo llamado clases
  const clases = clasesSinProfesor.concat(clasesConProfesor) 

  //Se regresan las clases
  return clases;
}