import prisma from '@/utils/Prisma'
import { Clase } from '@/entities/edge'

/**
 * Regresa una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function claseObtener(id: number) {
	return await prisma.clase.findUnique({
		where: {
			id: id
		}
	})
}

/**
 * Regresa todas las clases
 * @returns - todas las clases
 */
export async function claseObtenerTodas() {
	return await prisma.clase.findMany()
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 * @return la clase eliminada
 */
export async function claseEliminar(id: any) {
	return await prisma.clase.delete({ where: { id } })
}



/**
 * Regresa todas las clases de cierta sucursal
 * @author Fong
 * @param id: id de la sucursal de la cual se buscaran sus clases
 * @return las clases de la sucursal
 */
export async function claseBuscarPorSucursal(id: any) {
	let idNum: number = parseInt(id)
	return await prisma.clase.findMany({
		where: { 
			idSucursal: idNum
		}
	})
}

/**
 * Elimina clases de cierta sucursal
 * @author Fong
 * @param id: la id de la sucursal cuyas clases van a ser eliminadas
 * @return las clases eliminadas
 */
export async function claseBorrarPorSucursal(id: any) {
	const idNum:number = parseInt(id)
	return await prisma.clase.deleteMany({
		where: {
			idSucursal: idNum
		}
	})
}

/**
 * Elimina el docente de una clase, es posible debido a la no nullabilidad de la columna idDocente
 * @param id id de la clase a la que se le va a quitar el docente
 * @return la clase con el docente eliminado
 */
export async function claseDesasignarDocente(id: number) {
	return await prisma.clase.updateMany({
		where: {
			idDocente: id
		},
		data: {
			idDocente: null
		}
	})
}

export async function claseDesasignarDocentePorIdDeClase(id: number) {
	return await prisma.clase.update({
		where: {
			id: id
		},
		data: {
			idDocente: null
		}
	})
}

/**
 * Función que obtiene las clases que imparte cierto docente.
 * @param id id de docente del cual se recuperarán las clases que imparte
 * @returns las clases que imparte el docente
 */
export async function claseObtenerPorDocente(id: any) {
	let idNum: number = parseInt(id)
	const clases = await prisma.clase.findMany({
		where: { idDocente: idNum }
	})
	return clases
}

/**
 * Función que registra una clase sin docente
 * @param data datos de la clase a registrar
 */
export async function claseCrearSinDocente(data: any) {
	//Se convierten a valores numéricos los datos necesarios
	let cupoNum: number = parseInt(data.cupo)
	let idSucursal: number = parseInt(data.sucursal)

	//Se crea la clase
	await prisma.clase.create({
		data: {
			nombre: data.nombre,
			idSucursal: idSucursal,
			cupoMax: cupoNum,
			dias: data.dias,
			hora: data.horario
		}
	})
}

/**
 * Función para crear clase con docente.
 * @param data datos de la clase a registrar
 */
export async function claseCrearConDocente(data: any) {
	//Se convierten a valores numéricos los datos necesarios
	let cupoNum: number = parseInt(data.cupo)
	let idDocente: number = parseInt(data.docente)
	let idSucursal: number = parseInt(data.sucursal)

	//Se crea la clase
	await prisma.clase.create({
		data: {
			nombre: data.nombre,
			idSucursal: idSucursal,
			cupoMax: cupoNum,
			dias: data.dias,
			hora: data.horario,
			idDocente: idDocente
		}
	})
}

/**
 * Modifica una clase en la base de datos.
 * @param data - Los datos de la clase a modificar.
 * @returns Una promesa que se resuelve en el objeto que representa la clase modificada.
 */
export async function claseEditar(data: Clase) {
	return await prisma.clase.update({
		where: {
			id: data.id
		},
		data
	})
}
