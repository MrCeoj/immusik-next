import {
	deleteAlumnoClaseFromClase,
	getAllAlumnoClase,
	getAlumnosFromClase,
	getClasesDeCiertoAlumno
} from '@/persistence/AlumnoClaseDao'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/*
 * Elimina registros AlumnoClase solo de cierta clase
 * @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
 *  */
export async function borrarAlumnoClaseConDeterminadaClase(id: any) {
	return await deleteAlumnoClaseFromClase(id)
}

/**
 * Función para obtener todos los registros AlumnoClase
 * @returns todos los registros Alumno-Clase
 */
export async function fetchGetAllAlumnoClases() {
	return await getAllAlumnoClase()
}

/**
 * Función que encuentra todos los registros AlumnoClase de cierto alumno, esto para
 * saber a cuales clases está inscrito.
 * @param id id del alumno del cual se quieren encontrar sus registros AlumnoClase
 * @returns los registros AlumnoClase de cierto alumno
 */
export async function fetchGetClasesDeCiertoAlumno(id: any) {
	const clases = await getClasesDeCiertoAlumno(id)
	return clases
}

/**
 * Función para obtener los alumnos de una clase
 * @param id Identificador de la clase
 * @returns Arreglo de alumnos que pertenecen a la clase
 */
export async function obtenerAlumnosDeClase(id: number) {
	const alumnos = await getAlumnosFromClase(id)

	// Si no se encontraron alumnos inscritos a la clase regresa un error
	if (alumnos.length === 0 || alumnos.includes(null)) {
		throw { message: 'No se encontraron alumnos inscritos a la clase' }
	}

	// Ordena los alumnos por nombre
	alumnos.sort((a, b) => {
		// Si alguno de los alumnos es null no se cambia el orden
		if (a === null || b === null) return 0
		// Si ambos alumnos tienen nombre se ordenan por nombre
		// Se utiliza localCompare para que permita ordenar caracteres especiales
		else return a.nombre.localeCompare(b.nombre)
	})

	return alumnos
}
