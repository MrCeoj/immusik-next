import { Docente } from "@/entities/index";
import {
  createDocente,
  getAllDocentes,
  getDocente,
  modDocente,
} from "@/persistence/DocenteDao";

/**
 * Registra un docente en la base de datos.
 * @param data - Los datos del docente a registrar.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente creado.
 */
export async function registrarDocente(data: any) {
  // Formatear los datos del docente
  console.log("delegate recibido: ", data)
  const docenteFormat = {
    nombre: data.docente.nombre.toUpperCase(),
    aPaterno: data.docente.aPaterno.toUpperCase(),
    aMaterno: data.docente.aMaterno.toUpperCase(),
    curp: data.docente.curp.toUpperCase(),
    telefono: data.docente.telefono,
    estado: data.docente.estado.toUpperCase(),
  } as Docente;

  console.log("delegate formateado: ", docenteFormat)

  if (docenteFormat.telefono.toString().length !== 10) {
    throw new Error("El número de teléfono debe tener 10 dígitos.");
  }

  if (docenteFormat.nombre.length === 0) {
    throw new Error("El nombre del docente no puede estar vacío.");
  }

  if (docenteFormat.aPaterno.length === 0) {
    throw new Error("El apellido paterno del docente no puede estar vacío.");
  }

  if (docenteFormat.aMaterno.length === 0) {
    throw new Error("El apellido materno del docente no puede estar vacío.");
  }

  if (docenteFormat.curp.length !== 18) {
    throw new Error("El CURP del docente debe tener 18 caracteres.");
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
    console.error("Error fetching all docentes:", error);
    throw error; // Lanzar de nuevo el error para que la api lo muestre
  }
}

/**
 * Obtiene un docente de la base de datos.
 * @param id - El ID del docente a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente encontrado.
 */
export async function obtenerDocente(id: number) {
  try {
    const docente = await getDocente(id);
    return docente;
  } catch (error) {
    console.error("Error al buscar docente:", error);
    throw error;
  }
}

/**
 * Modifica un docente en la base de datos.
 * @param data - Los datos del docente a modificar.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente modificado.
 */
export async function modificarDocente(data: any){
  console.log("delegate recibido: ", data)
  const docenteFormat = {
    id: data.id,
    nombre: data.nombre.toUpperCase(),
    aPaterno: data.aPaterno.toUpperCase(),
    aMaterno: data.aMaterno.toUpperCase(),
    curp: data.curp.toUpperCase(),
    telefono: data.telefono,
  } as Docente;
  console.log("delegate formateado: ", docenteFormat)
  if (docenteFormat.telefono.toString().length !== 10) {
    throw new Error("El número de teléfono debe tener 10 dígitos.");
  }

  if (docenteFormat.nombre.length === 0) {
    throw new Error("El nombre del docente no puede estar vacío.");
  }

  if (docenteFormat.aPaterno.length === 0) {
    throw new Error("El apellido paterno del docente no puede estar vacío.");
  }

  if (docenteFormat.aMaterno.length === 0) {
    throw new Error("El apellido materno del docente no puede estar vacío.");
  }

  if(docenteFormat.curp.length !== 18){
    throw new Error("El CURP del docente debe tener 18 caracteres.");
  }

  try{
    const docenteModificado = await modDocente(docenteFormat);
    return docenteModificado;
  }catch(error){
    console.error("Error al modificar docente:", error);
  }
}
