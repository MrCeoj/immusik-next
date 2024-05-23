import { claseEliminar, claseObtenerTodas } from '@/persistence/ClaseDao'
import {
	sucursalCrear,
	sucursalEliminar,
	sucursalEditar,
	sucursalObtenerTodas,
	sucursalObtener
} from '../persistence/SucursalDao'
import {
	eliminarClasesPorSucursal,
	obtenerClasesPorSucursal
} from './ClaseDelegate'
import { eliminarAlumnoClasePorClase } from './AlumnoClaseDelegate'
import { contrasenaMaestraObtener } from '@/persistence/MasterKeyDao'
import { actualizarEstadoDeAlumnos } from './AlumnoDelegate'
import { actualizarEstadoDeDocentes } from './DocenteDelegate'

/**
 * Obtiene todas las sucursales.
 *
 * @returns Una promesa que se resuelve con un arreglo de sucursales o un objeto con un mensaje si no
 * se encontraron registros.
 */

export async function obtenerTodasSucursales() {
	const sucursals = await sucursalObtenerTodas()

	if (sucursals.length === 0) {
		return { message: 'No records found' }
	}

	return sucursals
}

/**
 * @param data: recibe data, la cual tiene dentro el nombre y direccion
 * de la sucursal que se creará
 */
export async function registrarSucursal(data: any) {
	let response = {
		success: false,
		message: ''
	}

	const contrasenaMaestra = await contrasenaMaestraObtener()

	//console.log("Contaseña proporcionada: "+data.contrasena+" | Contraseña maestra: "+contrasenaMaestra?.value)

	if(contrasenaMaestra?.value===data.contrasena){
		console.log("Contraseña maestra encontrada")
		const sucursalesTemp = await sucursalObtenerTodas()

		const existeSucursal = sucursalesTemp.some(
			(sucursalTemp) =>
				sucursalTemp.nombre === data.nombre
		)

		if (existeSucursal) {
			response.message = 'Ya existe una sucursal con ese nombre.'
		} else {
			const sucursal = await sucursalCrear(data)
			if (sucursal) {
				response.message = 'Se registró la sucursal exitosamente.'
				response.success = true
			} else {
				response.message = 'Hubo un problema al registrar la sucursal.'
			}
		}
	}else{
		response.message = "¡Contraseña maestra incorrecta!"
	}

	

	return response
}

/**
 * Se edita o actualiza la información de una sucursal
 *
 * @param data: información que se actualizará en la sucursal.
 */
export async function modificarSucursal(data: any) {
	let response = {
		//1. Se crea una response con un mensaje
		success: false,
		message: ''
	}

	//2. Se ejecutan validaciones extra
	const sucursalesTemp = await sucursalObtenerTodas()
	let existeSucursal = false

	//console.log("editando sucursal...")

	const contrasenaMaestra = await contrasenaMaestraObtener()

	if(contrasenaMaestra?.value===data.contrasena){
		sucursalesTemp.map(sucursalTemp=>{
			//console.log("id a editar: "+data.id+" | "+sucursalTemp.nombre+" "+sucursalTemp.id)
			if(sucursalTemp.id!==data.id){
				//console.log(sucursalTemp.nombre+" "+data.nombre)
				if(sucursalTemp.nombre===data.nombre)
					existeSucursal = true
			}
		})
	
		if (existeSucursal) {
			response.message = 'Ya existe una sucursal con ese nombre.' //3. Si hay error, se declara mensaje de error.
		} else {
			const sucursal = sucursalEditar(data.id,data) //3. Si no hay error se manda llamar el editar sucursal.
			response.message = 'Se ha modificado la sucursal correctamente.' //3. Se declara mensaje de exito.
		}
	}else{
		response.message = "¡Contraseña Maestra errónea!"
	}

	

	return response //4. Se regresa la respuesta.
}

/**
 * Elimina una sucursal
 *
 * @param data data solo contiene la id de la sucursal a eliminar
 * @returns la respuesta con el mensaje indicado dependiendo de lo que ocurra en el flujo
 */
export async function eliminarSucursal(data: any) {
	let response = {
		//1. Se declara un objeto response
		success: false,
		message: ''
	}

	//Se verifica la contraseña maestra
	const contrasenaMaestra = await contrasenaMaestraObtener()

	if(contrasenaMaestra?.value===data.contrasena){
		//Se obtienen todas las sucursales
		const sucursalesTemp = await sucursalObtenerTodas()

		//Se verifica que la sucursal a borrar si exista
		const existe = sucursalesTemp.some(
			(sucursalTemp) => sucursalTemp.id === data.id
		)

		if (!existe) {
			//Si no existe se declara un mensaje de error.
			//console.log("No existe la sucursal")
			response.message = 'No existe la sucursal a eliminar.'
		} else {
			//Si existe se realiza el siguiente proceso.
			//console.log("Existe la sucursal")
			const clasesAEliminar = await obtenerClasesPorSucursal(data.id) //Se consiguen las clases relacionadas a la sucursal.
			//console.log(clasesAEliminar)
			for (const clase of clasesAEliminar) {
				//Por cada clase se elimina el registro alumno-clase de dicha clase
				await eliminarAlumnoClasePorClase(clase.id)
			}

			await eliminarClasesPorSucursal(data.id) //Se borran las clases despues de borrar los registros alumno-clase
			await sucursalEliminar(data.id) //Finalmente se borra la sucursal
			
			//Se actualizan estados de alumnos y docentes en caso de quedarse sin clases
			await actualizarEstadoDeAlumnos() 
			await actualizarEstadoDeDocentes()
			response.message = 'Sucursal eliminada exitosamente.' //Mensaje de exito
		}
	}else{
		response.message="¡Contraseña Maestra erronea!"
	}

	

	return response
}

/**
 * Obtiene una sucursal por su id
 *
 * @param id: id de la sucursal a obtener
 * @returns una promesa que se resuelve con la sucursal o un objeto con un mensaje si no se
 * encontraron registros.
 */
export async function obtenerSucursal(id: number) {
	const sucursal = await sucursalObtener(id)

	if (sucursal) {
		return sucursal
	}

	return { message: 'No records found' }
}
