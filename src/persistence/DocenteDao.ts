import { Docente, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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