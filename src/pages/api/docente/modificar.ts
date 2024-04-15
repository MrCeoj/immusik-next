import { modificarDocente } from '@/business/DocenteDelegate'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Maneja la solicitud HTTP para actualizar la información de una clase.
 * @author Stiven
 * @param req - Solicitud HTTP de la API, contiene los nuevos datos de la clase.
 * @param res - Respuesta HTTP de la API, contiene el resultado de la clase.
 * @returns - El resultado de la actualización.
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method !== 'PUT') {
			return res.status(405).json({ error: 'Método no permitido' })
		}

		const docente = req.body
		console.log(docente)

		const result = await modificarDocente(docente)
		if (result instanceof Error) {
			return res.status(500).json({ error: result.message })
		}
		return res.status(200).json(result)
	} catch (error: any) {
		return res.json({ error: error.message })
	}
}
