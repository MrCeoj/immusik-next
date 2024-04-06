import { obtenerAlumnosDeClase } from '@/business/AlumnoClaseDelegate'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Maneja la solicitud HTTP para obtener los alumnos de una clase.
 * @author Stiven
 * @param req - Solicitud HTTP de la API, contiene el ID de la clase.
 * @param res - Respuesta HTTP de la API, contiene el resultado de los alumnos.
 * @returns - El resultado de la eliminación.
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method !== 'GET') {
			return res.status(405).json({ error: 'Método no permitido' })
		}

		const { id } = req.query
		if (!id)
			return res
				.status(400)
				.json({ error: 'Falta proporcionar el ID de la clase' })

		const result = await obtenerAlumnosDeClase(Number(id))
		return res.status(200).json(result)
	} catch (error: any) {
		return res.status(500).json({ error: error.message })
	}
}
