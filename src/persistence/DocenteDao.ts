import { Docente } from "@/entities/index";
import prisma from "@/utils/Prisma";

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
  })
}

/**
 * Modifica un docente en la base de datos.
 * @param data - Los datos del docente a modificar.
 * @returns Una promesa que se resuelve en el objeto que representa el docente modificado.
 */
export async function modDocente(data: Docente){
  console.log("DAO",data)
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