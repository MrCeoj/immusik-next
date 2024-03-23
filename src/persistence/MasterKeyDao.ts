import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Obtiene la contraseña maestra.
 * @returns Una promesa que se resuelve en la contraseña maestra.
 */

export async function obtenerContrasenaMaestra() {
	return await prisma.masterKey.findFirst()
}
