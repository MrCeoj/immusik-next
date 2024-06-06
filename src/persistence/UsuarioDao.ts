import prisma from "@/utils/Prisma";
import { User } from '@/entities/index'

/**
 * Obtiene un usuario por su nombre.
 * @param busqueda - El nombre o correo del usuario a buscar.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario encontrado.
 */

export async function usuarioObtener(busqueda: string) {
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

export async function usuarioCrear(data: User) {
	return await prisma.user.create({ data })
}

/**
 * Función para obtener todos los usuarios.
 * @author Fong
 * @returns todos los usuarios en el sistema.
 */
export async function usuarioObtenerTodos() {
	return await prisma.user.findMany()
}
