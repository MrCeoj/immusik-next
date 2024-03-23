import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Obtiene un usuario por su nombre.
 * @param nombre - El nombre del usuario a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario encontrado.
 */

export async function obtenerUsuario(nombre: string) {
	return await prisma.user.findUnique({ where: { nombre } })
}

/**
 * Crea un nuevo usuario.
 * @param data - Los datos del usuario a crear.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario creado.
 */

export async function crearUsuario(data: User) {
	return await prisma.user.create({ data })
}
