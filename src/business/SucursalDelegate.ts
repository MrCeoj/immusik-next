import { deleteClase, getAllClases } from '@/persistence/ClaseDao'
import { sucursalBorrar, sucursalCrear, sucursalEditar, sucursalObtenerPorId, sucursalesObtener } from '../persistence/SucursalDao'
import { getAllAlumnoClase } from '@/persistence/AlumnoClaseDao'
import {
	borrarClasesDeSucursal,
	obtenerClasesDeSucursal
} from './ClaseDelegate'
import { desasignarAlumnosDeClase } from './AlumnoClaseDelegate'
import { actualizarEstadoDeAlumno } from '@/persistence/AlumnoDao'
import { actualizarEstadoDeAlumnos } from './AlumnoDelegate'
import { actualizarEstadoDeDocentes } from './DocenteDelegate'
import { obtenerContrasenaMaestra } from './MasterKeyDelegate'
import { eliminarGastosDeSucursal } from './GastosDelegate'

/**
 * Obtiene todas las sucursales.
 *
 * @returns Una promesa que se resuelve con un arreglo de sucursales o un objeto con un mensaje si no
 * se encontraron registros.
 */

export async function obtenerTodasSucursales() {
	const sucursals = await sucursalesObtener()

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

	const contrasenaMaestra = await obtenerContrasenaMaestra()

	//console.log("Contaseña proporcionada: "+data.contrasena+" | Contraseña maestra: "+contrasenaMaestra?.value)

	if(contrasenaMaestra?.value===data.contrasena){
		console.log("Contraseña maestra encontrada")
		const sucursalesTemp = await sucursalesObtener()

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
	const sucursalesTemp = await sucursalesObtener()
	let existeSucursal = false

	//console.log("editando sucursal...")

	const contrasenaMaestra = await obtenerContrasenaMaestra()

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
 * @author Fong
 * @param data data solo contiene la id de la sucursal a eliminar
 * @returns la respuesta con el mensaje indicado dependiendo de lo que ocurra en el flujo
 */
export async function eliminarSucursal(data: any) {
	let response = {
		//1. Se declara un objeto response
		success: false,
		message: ''
	}

	const contrasenaMaestra = await obtenerContrasenaMaestra()
	if(contrasenaMaestra?.value!==data.contrasena){
		response.message="Contraseña maestra incorrecta."
	}else{
		try{
			const idNum:number = parseInt(data.id)

			const sucursalAEliminar = await obtenerSucursalPorId(idNum)
			
			if(!sucursalAEliminar){
				response.message="No se encontró la sucursal."
			}else{
				const clasesAEliminar = await obtenerClasesDeSucursal(idNum)

				if(clasesAEliminar.length>0){
					
					for(const clase of clasesAEliminar){
						console.log(`Eliminando relaciones de alumnos para la clase con ID: ${clase.id}`)
						await desasignarAlumnosDeClase(clase.id)
					}

					await borrarClasesDeSucursal(idNum)
				}

				eliminarGastosDeSucursal(idNum)

				await sucursalBorrar(idNum)

				response.success = true
				response.message="Sucursal eliminada exitosamente."
			}
		}catch(e:any){
			console.log(e.message)
			response.message="No se encontró la sucursal."
		}
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
export async function obtenerSucursalPorId(id: number) {
	const sucursal = await sucursalObtenerPorId(id)

	if (sucursal) {
		return sucursal
	}

	return { message: 'No records found' }
}
