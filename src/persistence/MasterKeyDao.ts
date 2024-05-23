import prisma from "@/utils/Prisma";
/**
 * Obtiene la contraseña maestra.
 * @returns Una promesa que se resuelve en la contraseña maestra.
 */

export async function obtenerContrasenaMaestra() {
  return await prisma.masterKey.findFirst();
}
