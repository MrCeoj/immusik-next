import { User } from '@prisma/client'
import { crearUsuario, obtenerUsuario } from '../persistence/UsuarioDao'
import { obtenerContrasenaMaestra } from '@/persistence/MasterKeyDao'
import bcrypt from 'bcrypt'

/**
 * Registra un usuario nuevo en la base de datos.
 *
 * @param usuario - Los datos del usuario a registrar.
 * @param contrasenaMaestra - La contraseña maestra para registrar al usuario.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario registrado.
 * @throws Si la contraseña maestra no es válida.
 * @throws Si los datos del usuario no son válidos
 * @throws Si el usuario ya existe.
 */

export async function registrarUsuario(
	usuario: User,
	contrasenaMaestra: string
) {
	// Código para validar la contraseña maestra
	const contrasenaMaestraGuardada = await obtenerContrasenaMaestra()

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
	const usuarioEncontrado = await obtenerUsuario(usuarioFormateado.nombre)

	if (usuarioEncontrado) {
		throw { error: 'El nombre de usuario ya existe.' }
	}

	// Código para crear un usuario en la base de datos
	const usuarioCreado = await crearUsuario(usuarioFormateado)
	return usuarioCreado
}

/**
 * Obtiene el usuario con el nombre de usuario especificado.
 *
 * @param nombre - El nombre de usuario del usuario a obtener.
 * @returns Una promesa que se resuelve en el objeto que representa el usuario o un objeto con un mensaje si no se encontró el usuario.
 */

export async function buscarUsuario(nombre: string) {
	const usuario = await obtenerUsuario(nombre)
	if (usuario) {
		return usuario
	}

	return { error: 'Usuario no encontrado' }
}
