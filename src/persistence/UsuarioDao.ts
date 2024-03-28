import { User } from '@/entities/index'
import prisma from "@/utils/Prisma";

/**
 * Obtiene un usuario por su nombre.
 * @param busqueda - El nombre o correo del usuario a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario encontrado.
 */

export async function obtenerUsuario(busqueda: string) {
	return await prisma.user.findFirst({
		where: {
			OR: [
				{
					nombre: busqueda
				},
				{
					correo: busqueda
				}
			]
		}
	})
}

/**
 * Crea un nuevo usuario.
 * @param data - Los datos del usuario a crear.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario creado.
 */

export async function crearUsuario(data: User) {
	return await prisma.user.create({ data })
}
