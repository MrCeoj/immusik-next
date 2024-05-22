import prisma from '@/utils/Prisma'

/**
 * Obtiene todas las sucursales.
 * @returns Una promesa que se resuelve en un array de objetos que representan las sucursales.
 */
export async function sucursalesObtener() {
	return await prisma.sucursal.findMany()
}

/**
 * Crea una nueva sucursal.
 * @author Fong
 * @param data - Los datos de la sucursal a crear.
 * @returns Una promesa que se resuelve en el objeto que representa la sucursal creada.
 */
export async function sucursalCrear(data: any) {
	return await prisma.sucursal.create({data: {nombre:data.nombre,direccion:data.direccion}})
}

/**
 * Función para editar la información de la sucursal.
 * @author Fong
 * @param id id de la sucursal a editar
 * @param data datos nuevos de la sucursal
 * @returns la sucursal editada
 */
export async function sucursalEditar(id: any, data: any) {
	return await prisma.sucursal.update({
		//Se manda llamar el metodo de prisma para actualizar registro.
		where: { id },
		data: { nombre: data.nombre, direccion: data.direccion }
	})
}

/**
 * Elimina una sucursal por su ID.
 * @author Fong
 * @param id - El ID de la sucursal a eliminar.
 * @returns Una promesa que se resuelve en el objeto que representa la sucursal eliminada.
 */
export async function sucursalBorrar(id: any) {
	const idNum:number = parseInt(id)
	return await prisma.sucursal.delete({
		where: {
			id: idNum
		}
	})
}

/**
 * Obtiene una sucursal por su ID.
 * @param id - El ID de la sucursal a obtener.
 * @returns Una promesa que se resuelve en el objeto que representa la sucursal obtenida.
 */
export async function sucursalObtenerPorId(id: any) {
	const idNum:number = parseInt(id)
	return await prisma.sucursal.findFirst({
		where: {
			id: idNum
		}
	})
}
