import { Docente, Clase } from "@/entities/index";
import {
  docenteCrear,
  docenteObtenerTodos,
  docenteObtener,
  docenteModificar,
  docenteEditarEstado,
  clasesObtenerPorDocente,
  docenteObtenerPorCurp,
  docenteObtenerNoVetados,
} from "@/persistence/DocenteDao";
import { obtenerClasesPorDocente } from "./ClaseDelegate";
import { claseDesasignarDocenteDeVarias } from "@/persistence/ClaseDao";

/**
 * Registra un docente en la base de datos.
 * @param data - Los datos del docente a registrar.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente creado.
 */
export async function registrarDocente(data: any): Promise<Docente | Error> {
  try {
    const docenteFormat = {
      nombre: data.docente.nombre.toUpperCase(),
      aPaterno: data.docente.aPaterno.toUpperCase(),
      aMaterno: data.docente.aMaterno.toUpperCase(),
      curp: data.docente.curp.toUpperCase(),
      telefono: data.docente.telefono,
      estado: data.docente.estado.toUpperCase(),
    } as Docente;

    // Validaciones correspondientes
    const docenteExistente = await docenteObtenerPorCurp(docenteFormat.curp);
    if (docenteExistente) {
      if (docenteExistente.estado === "VETADO") {
        throw new Error(
          "Éste CURP ya existe y está vetado, imposible registrar."
        );
      } else {
        throw new Error("Éste CURP ya fue registrado.");
      }
    }

    if (docenteFormat.telefono.length !== 10) {
      throw new Error("El número de teléfono debe tener 10 dígitos.");
    }

    if (!/^\d+$/.test(docenteFormat.telefono)) {
      throw new Error("El número de teléfono solo puede contener dígitos.");
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

    const docenteCreado = await docenteCrear(docenteFormat);
    return docenteCreado;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error("Un error inesperado ocurrió al registrar el docente.");
    }
  }
}

/**
 * Obtiene todos los docentes registrados en la base de datos.
 * @returns Una promesa que se resuelve en un arreglo con todos los docentes registrados.
 */
export async function obtenerDocentes() {
  try {
    const docentes = await docenteObtenerTodos();
    return docentes;
  } catch (error) {
    return new Error(
      "Error al obtener los docentes, intente de nuevo más tarde"
    ); // Lanzar de nuevo el error para que la api lo muestre
  }
}

/**
 * Obtiene un docente de la base de datos.
 * @param id - El ID del docente a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente encontrado.
 */
export async function obtenerDocente(id: number) {
  try {
    const docente = await docenteObtener(id);
    return docente;
  } catch (error) {
    return new Error("Error al obtener el docente, intente de nuevo más tarde");
  }
}

/**
 * Modifica un docente en la base de datos.
 * @param data - Los datos del docente a modificar.
 * @returns Una promesa que se resuelve en el objeto que informa sobre el docente modificado.
 */
export async function modificarDocente(data: any) {
  try {
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

    const docenteExistente = await docenteObtenerPorCurp(docenteFormat.curp);

    if (docenteExistente && docenteExistente.id !== docenteFormat.id) {
      throw new Error("Éste CURP ya fue registrado.");
    }

    if (docenteFormat.telefono.length !== 10) {
      throw new Error("El número de teléfono debe tener 10 dígitos.");
    }

    if (!/^\d+$/.test(docenteFormat.telefono)) {
      throw new Error("El número de teléfono solo puede contener dígitos.");
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
    const docenteModificado = await docenteModificar(docenteFormat);
    return docenteModificado;
  } catch (error) {
    return error;
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

    // Prevenir estados no manejados por la aplicación
    if (!estadosAceptados.includes(estado)) {
      throw new Error("El estado del docente no es válido.");
    }
    // Si el docente está inactivo o vetado, se elimina de todas las clases
    const clases = await clasesObtenerPorDocente(id);
    if (estado !== "ACTIVO" && clases.length > 0) {
      claseDesasignarDocenteDeVarias(id);
    }

    const docenteModificado = await docenteEditarEstado(estado, id);
    return docenteModificado;
  } catch (error) {
    return error;
  }
}

/**
 * Obtiene las clases de un docente.
 * @param id - El ID del docente a buscar.
 * @returns Una promesa que se resuelve en un arreglo con las clases del docente.
 */
export async function obtenerClases(id: number) {
  try {
    const clases = await clasesObtenerPorDocente(id);
    return clases;
  } catch (error) {
    return new Error(
      "Error al obtener las clases del docente, intente de nuevo más tarde."
    );
  }
}

/**
 * Función que actualiza el estado de docentes
 */
export async function actualizarEstadoDeDocentes() {
  //Se obtienen todos los docentes
  const docentes = await docenteObtenerTodos();
  for (const docente of docentes) {
    //Se obtienen todas las clases de determinado docente
    const clasesDelDocente = await obtenerClasesPorDocente(
      docente.id
    );
    //Si tiene clases asignadas, se determina como activo y si no, como inactivo
    if (docente.estado !== "VETADO") {
      if (Array.isArray(clasesDelDocente) && clasesDelDocente.length > 0) {
        docenteEditarEstado("ACTIVO", docente.id);
      } else {
        docenteEditarEstado("INACTIVO", docente.id);
      }
    }
  }
}

/**
 * Función que verifica si un docente se ha quedado sin clases, establece estado a inactivo si es el caso.
 * @param idDocente - El ID del docente a verificar.
 * @returns Una promesa que se resuelve en un objeto que informa sobre el docente modificado.
 */
export async function verificarEstado(idDocente: number) {
  try {
    const clases = await clasesObtenerPorDocente(idDocente);
    if (clases.length <= 1) {
      const docenteModificado = await docenteEditarEstado("INACTIVO", idDocente);
      return docenteModificado;
    }
    return null;
  } catch (error) {
    return error;
  }
}

/**
 * Funcion que verifica si un docente se ha quedado sin clases, sin el offset de la clase que se va a eliminar.
 * @param idDocente - El ID del docente a verificar.
 * @returns Una promesa que se resuelve en un objeto que informa sobre el docente modificado.
 */
export async function verificarSinOffset(idDocente: number) {
  try {
    console.log(idDocente)
    const clases = await clasesObtenerPorDocente(idDocente);
    if (clases.length === 0) {
      console.log(idDocente, "inactivo")
      const docenteModificado = await docenteEditarEstado("INACTIVO", idDocente);
      return docenteModificado;
    }
  } catch (error) {
    return error;
  }
}

/**
 * Obtiene los docentes que no están vetados.
 * @returns - Una promesa que se resuelve en un arreglo con los docentes no vetados.
 */
export async function obtenerDocentesNoVetados() {
  const docentes = docenteObtenerNoVetados();
  return docentes;
}
