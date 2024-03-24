import { Docente } from "@prisma/client";
import { createDocente, getAllDocentes } from "@/persistence/DocenteDao";

/**
 * Registra un docente en la base de datos.
 * @param data - Los datos del docente a registrar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente creado.
 */
export async function registrarDocente(data: any) {

  // Formatear los datos del docente
  const docenteFormat = {
    nombre: data.docente.nombre.toUpperCase(),
    aPaterno: data.docente.aPaterno.toUpperCase(),
    aMaterno: data.docente.aMaterno.toUpperCase(),
    telefono: data.docente.telefono,
    estado: data.docente.estado.toUpperCase(),
  } as Docente;

  if(docenteFormat.telefono.toString().length !== 10) {
    throw new Error("El número de teléfono debe tener 10 dígitos.");
  }

  if(docenteFormat.nombre.length === 0) {
    throw new Error("El nombre del docente no puede estar vacío.");
  }

  if(docenteFormat.aPaterno.length === 0) {
    throw new Error("El apellido paterno del docente no puede estar vacío.");
  }

  if(docenteFormat.aMaterno.length === 0) {
    throw new Error("El apellido materno del docente no puede estar vacío.");
  }

  const docenteCreado = await createDocente(docenteFormat);
  return docenteCreado;
}


/**
 * Obtiene todos los docentes registrados en la base de datos.
 * @returns Una promesa que se resuelve en un arreglo con todos los docentes registrados.
 */
export async function obtenerDocentes() {
  try {
    const docentes = await getAllDocentes();
    return docentes;
  } catch (error) {
    console.error('Error fetching all docentes:', error);
    throw error; // Lanzar de nuevo el error para que la api lo muestre
  }
}
