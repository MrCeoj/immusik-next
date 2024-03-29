import { Docente, Clase } from "@/entities/index";
import { deleteDocenteFromClase } from "@/persistence/ClaseDao";
import {
  createDocente,
  getAllDocentes,
  getDocente,
  modDocente,
  setEstado,
  getClases,
} from "@/persistence/DocenteDao";

/**
 * Registra un docente en la base de datos.
 * @param data - Los datos del docente a registrar.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente creado.
 */
export async function registrarDocente(data: any) {
  // Formatear los datos del docente
  console.log("delegate recibido: ", data);
  const docenteFormat = {
    nombre: data.docente.nombre.toUpperCase(),
    aPaterno: data.docente.aPaterno.toUpperCase(),
    aMaterno: data.docente.aMaterno.toUpperCase(),
    curp: data.docente.curp.toUpperCase(),
    telefono: data.docente.telefono,
    estado: data.docente.estado.toUpperCase(),
  } as Docente;

  console.log("delegate formateado: ", docenteFormat);

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
export async function modificarDocente(data: any) {
  // Formatear los datos del docente entrante
  const docenteFormat = {
    id: data.id,
    nombre: data.nombre.toUpperCase(),
    aPaterno: data.aPaterno.toUpperCase(),
    aMaterno: data.aMaterno.toUpperCase(),
    curp: data.curp.toUpperCase(),
    telefono: data.telefono,
  } as Docente;

  //Validaciones correspondientes
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

  // Modificar al docente.
  try {
    const docenteModificado = await modDocente(docenteFormat);
    return docenteModificado;
  } catch (error) {
    console.error("Error al modificar docente:", error);
  }
}

/**
 * Cambia el estado de un docente a lo que reciba como parámetro.
 * @param id - El ID del docente a cambiar de estado.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente modificado.
 */
export async function establecerEstado(estado: string, id: number) {
  try {
    const estadosAceptados = ["ACTIVO", "INACTIVO", "VETADO"];
    if (!estadosAceptados.includes(estado)) {
      throw new Error("El estado del docente no es válido.");
    }
    const clases = await obtenerClases(id);
    if (estado !== "ACTIVO" && clases?.length !== 0) {
      clases?.forEach((clase: Clase) => {
        deleteDocenteFromClase(clase.id);
      });
    }
    const docenteModificado = await setEstado(estado, id);
    return docenteModificado;
  } catch (error) {
    console.error("Error al modificar docente:", error);
  }
}

/**
 * Obtiene las clases de un docente.
 * @param id - El ID del docente a buscar.
 * @returns Una promesa que se resuelve en un arreglo con las clases del docente.
 */
export async function obtenerClases(id: number) {
  try {
    const clases = await getClases(id);
    return clases;
  } catch (error) {
    console.error("Error al obtener clases:", error);
  }
}
