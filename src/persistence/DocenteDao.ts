import prisma from "@/utils/Prisma";
import { Docente } from "@/entities/index";

/**
 * Crea un nuevo docente
 * @param data - Los datos del docente a crear.
 * @returns Una promesa que se resuelve en el objeto que representa el docente creado.
 */
export async function createDocente(data: Docente) {
  return await prisma.docente.create({ data });
}

/**
 * Obtiene todos los docentes registrados en la base de datos.
 * @returns Una promesa que se resuelve en un arreglo con todos los docentes registrados.
 */
export async function getAllDocentes() {
  return await prisma.docente.findMany();
}

/**
 * Obtiene el docente por el ID que recibe como parámetro.
 * @param id El ID que va a obtener desde business
 * @returns regresa un registro de Docente que habrá encontrado en la base de datos.
 */
export async function getDocente(id: number) {
  return await prisma.docente.findUnique({
    where: {
      id: id,
    },
  });
}

/**
 * Modifica un docente en la base de datos.
 * @param data - Los datos del docente a modificar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente modificado.
 */
export async function modDocente(data: Docente) {
  return await prisma.docente.update({
    where: {
      id: data.id,
    },
    data: {
      nombre: data.nombre,
      aPaterno: data.aPaterno,
      aMaterno: data.aMaterno,
      curp: data.curp,
      telefono: data.telefono,
    },
  });
}

/**
 * Cambia el estado de un docente dependiendo del parámetro que recibe.
 * @param id - El ID del docente a cambiar de estado.
 * @returns Una promesa que se resuelve en el objeto de docente si se actualiza correctamente.
 */
export async function setEstado(estado: string,id: number) {
  return await prisma.docente.update({
    where: {
      id: id,
    },
    data: {
      estado: estado,
    },
  });
}

/**
 * Regresa un arreglo con todas las clases que un docente está impartiendo actualmente.
 * @param id - El ID del docente a buscar.
 * @returns Una promesa que se resuelve en un arreglo con todas las clases que el docente está impartiendo.
 */
export async function getClases(id: number) {
  return await prisma.clase.findMany({
    where: {
      idDocente: id,
    },
    include: {
      sucursal: true,
    }
  })
}

/**
 * Obtiene un docente por su CURP.
 * @param curp - La CURP del docente a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente encontrado.
 */
export async function getByCurp(curp: string) {
  return await prisma.docente.findUnique({
    where: {
      curp: curp,
    },
  });
}

export async function getDocentesNoVetados(){
  const docentes = prisma.docente.findMany({
    where: {
      estado: {
        in: ['ACTIVO', 'INACTIVO']
      }
    }
  })
  return docentes
}