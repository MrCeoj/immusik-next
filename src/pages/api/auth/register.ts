import { registrarUsuario } from '@/business/UsuarioDelegate'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Maneja la solicitud HTTP para registrar un usuario.
 *
 * @param req - El objeto de solicitud HTTP, (solamente es aceptado el método POST).
 * @param res - El objeto de respuesta HTTP, la respuesta (si la operación fue exitosa).
 * @returns Una respuesta JSON con la información del nuevo usuario o con errores generados por registrarUsuario().
 */

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	if (request.method !== 'POST') {
		return response.status(405).json({ message: 'Método no permitido' })
	}

	try {
		const { usuario, contrasenaMaestra } = request.body
		const respuestaRegistro = await registrarUsuario(usuario, contrasenaMaestra)

		return response.status(200).json({
			message: `Usuario registrado: ${respuestaRegistro.nombre} ${respuestaRegistro.correo}`
		})
	} catch (error) {
		return response.status(500).json(error)
	}
}
