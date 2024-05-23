import prisma from "@/utils/Prisma";
/**
 * Obtiene la contraseña maestra.
 * @returns Una promesa que se resuelve en la contraseña maestra.
 */

export async function contrasenaMaestraObtener() {
  return await prisma.masterKey.findFirst();
}
