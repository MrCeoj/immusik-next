import { eliminarAlumnoDeClase } from '@/business/AlumnoClaseDelegate'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Maneja la solicitud HTTP para eliminar un alumno de una clase.
 * @author Marcelo
 * @param req - Solicitud HTTP de la API, contiene el ID de la clase a eliminar su docente.
 * @param res - Respuesta HTTP de la API, contiene el resultado de la eliminación.
 * @returns - El resultado de la eliminación.
 */
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'DELETE') {
			if (!req.body.idClase)
				return res
					.status(400)
					.json({ error: 'Falta proporcionar el ID de la clase' })

			if (!req.body.idAlumno)
				return res
					.status(400)
					.json({ error: 'Falta proporcionar el ID del alumno' })

			const idClase = req.body.idClase
			const idAlumno = req.body.idAlumno
			const result = await eliminarAlumnoDeClase(idClase, idAlumno)

			return res.status(200).json(result)
		}

		return res.status(405).json({ error: 'Método no permitido' })
	} catch (error: any) {
		return res.status(500).json({ error: error.message })
	}
}
