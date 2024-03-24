import { obtenerDocentes } from '@/business/DocenteDelegate'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Maneja la solicitud HTTP para obtener todos los docentes.
 *
 * @param req - El objeto de solicitud HTTP.
 * @param res - El objeto de respuesta HTTP, si fue exitosa contendrá la lista de docentes.
 * @returns Una respuesta JSON con la lista de docentes o con errores generados por fetchAll().
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Método no permitido' })
    }
    
    try {
        // Llamar al delegate para obtener todos los docentes
        const docentes = await obtenerDocentes()
    
        return res.status(200).json(docentes)
    } catch (error) {
        return res.status(500).json(error)
    }
}