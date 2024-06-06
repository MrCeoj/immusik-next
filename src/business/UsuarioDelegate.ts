import { User } from '@prisma/client'
import { usuarioCrear, usuarioObtener, usuarioObtenerTodos } from '@/persistence/UsuarioDao'
import { contrasenaMaestraObtener } from '@/persistence/MasterKeyDao'
import bcrypt from 'bcrypt'

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
		nombre: usuario.nombre.toUpperCase(),
		correo: usuario.correo.toUpperCase(),
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
	const usuario = await usuarioObtener(usuarioIngresado.nombre.toUpperCase())

	// Si no se encuentra el usuario, se retorna null
	if (!usuario) throw new Error('Usuario no encontrado')

	// Compara la contraseña ingresada con la contraseña almacenada en la base de datos
	const contrasenaValida = await bcrypt.compare(
		usuarioIngresado.contrasena,
		usuario.contrasena
	)

	// Si la contraseña no es válida, se retorna null
	if (!contrasenaValida) throw new Error('Contraseña incorrecta')

	return {
		id: usuario.id.toString(),
		name: usuario.nombre,
		email: usuario.correo
	}
}

export async function obtenerTodosUsuarios(){
	return await usuarioObtenerTodos()
}
