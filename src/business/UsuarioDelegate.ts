import { User } from '@prisma/client'
import { usuarioCrear, usuarioEditarConClave, usuarioEditarSinClave, usuarioEliminar, usuarioObtener, usuarioObtenerTodos } from '@/persistence/UsuarioDao'
import { contrasenaMaestraObtener } from '@/persistence/MasterKeyDao'
import bcrypt from 'bcrypt'
import prisma from '@/utils/Prisma'

/**
 * Registra un usuario nuevo en la base de datos.
 *
 * @param usuario - Los datos del usuario a registrar.
 * @param contrasenaMaestra - La contraseña maestra para registrar al usuario.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario registrado.
 * @throws Si la contraseña maestra no es válida.
 * @throws Si el usuario ya existe.
 * @throws Si el correo ya está registrado.
 */

export async function registrarUsuario(
	usuario: User,
	contrasenaMaestra: string
) {
	// Código para validar la contraseña maestra
	const contrasenaMaestraGuardada = await contrasenaMaestraObtener()

	if (contrasenaMaestra !== contrasenaMaestraGuardada?.value) {
		throw { error: 'La contraseña maestra es incorrecta.' }
	}

	// Código para formatear los datos del usuario
	const hashedPassword = await bcrypt.hash(usuario.contrasena, 10)
	const usuarioFormateado = {
		nombre: usuario.nombre,
		correo: usuario.correo,
		contrasena: hashedPassword
	} as User

	// Código para verificar si el usuario ya existe
	const usuarioEncontrado = await usuarioObtener(usuarioFormateado.nombre)

	if (usuarioEncontrado) {
		throw { error: 'El nombre de usuario ya existe.' }
	}

	// Código para verificar si el correo ya está registrado
	const correoEncontrado = await usuarioObtener(usuarioFormateado.correo)

	if (correoEncontrado) {
		throw { error: 'El correo ya está registrado.' }
	}

	// Código para crear un usuario en la base de datos y retornarlo como respuesta
	return await usuarioCrear(usuarioFormateado)
}

/**
 * Verifica que el usuario ingresado se encuentre en la base de datos.
 *
 * @param usuario - El usuario a buscar en la base de datos.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario encontrado.
 * @throws Un mensaje de error si el usuario no se encuentra en la base de datos.
 * @throws Un mensaje de error si la contraseña es incorrecta.
 */

export async function autenticarUsuario(usuarioIngresado: {
	nombre: string
	contrasena: string
}) {
	// Buscar el usuario en la base de datos
	const usuario = await usuarioObtener(usuarioIngresado.nombre)

	// Si no se encuentra el usuario, se retorna null
	if (!usuario) throw new Error('Usuario o contraseña incorrecta')
  
	// Compara la contraseña ingresada con la contraseña almacenada en la base de datos
	const contrasenaValida = await bcrypt.compare(
		usuarioIngresado.contrasena,
		usuario.contrasena
	)

	// Si la contraseña no es válida, se retorna null
	if (!contrasenaValida) throw new Error('Usuario o contraseña incorrecta')

	return {
		id: usuario.id.toString(),
		name: usuario.nombre,
		email: usuario.correo
	}
}

/**
 * Función para obtener todos los usuarios
 * @author Fong
 * @returns todos los usuarios
 */
export async function obtenerTodosUsuarios(){
	return await usuarioObtenerTodos()
}

/**
 * Función para eliminar un usuario
 * @author Fong
 * @param id id del usuario a eliminar
 * @returns usuario eliminado
 */
export async function eliminarUsuario(id:number){
	return await usuarioEliminar(id)
}

/**
 * Función para modificar la información de un usuario
 * @author Fong
 * @param data información nueva
 * @returns usuario modificado
 */
export async function modificarUsuario(data:any){
	const usuario = await prisma.user.findFirst({
		where: {
			nombre: data.nombre
		}
	})
	if(usuario && usuario.id!==data.id){
		
		return "username_invalido"
	}else{
		if(data.contrasena===""){
			return usuarioEditarSinClave(data)
		}else{
			return usuarioEditarConClave(data)
		}
	}
}