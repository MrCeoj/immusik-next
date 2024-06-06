import prisma from "@/utils/Prisma";
import { User } from '@/entities/index'
import bcrypt from "bcrypt"

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

/**
 * Función para eliminar un usuario
 * @author Fong
 * @param id id del usuario a eliminar
 * @returns usuario eliminado
 */
export async function usuarioEliminar(id:number){
	return await prisma.user.delete({
		where: {
			id:id
		}
	})
}

/**
 * Función para modificar un usuario
 * @author Fong
 * @param data información nueva
 * @returns el usuario modificado
 */
export async function usuarioEditarSinClave(data:any){
	return await prisma.user.update({
		where: {
			id: data.id
		},
		data: {
			nombre:data.nombre,
			correo:data.correo
		}
	})
}

/**
 * Modificación de usuario
 * @author Fong
 * @param data información nueva
 * @returns el usuario modificado
 */
export async function usuarioEditarConClave(data:any){
	const hashed = await bcrypt.hash(data.contrasena,10)

	return await prisma.user.update({
		where:{
			id: data.id
		},
		data:{
			nombre:data.nombre,
			correo:data.correo,
			contrasena:hashed
		}
	})
}