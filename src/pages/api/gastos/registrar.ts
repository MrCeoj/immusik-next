import { registrarGasto } from "@/business/GastosDelegate"
import { NextApiRequest, NextApiResponse } from "next"

/**
 * Maneja la solicitud HTTP para registrar un gasto.
 *
 * @param req - El objeto de solicitud HTTP, (solamente es aceptado el método POST).
 * @param res - El objeto de respuesta HTTP, la respuesta (si la operación fue exitosa).
 * @returns Una respuesta JSON con la información del gasto o con errores generados por registrarGasto().
 */

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	if (request.method !== "POST") {
		return response.status(405).json({ message: "Método no permitido" })
	}

	try {
		const { gasto } = request.body
		const respuestaRegistro = await registrarGasto(gasto)

		return response.status(200).json({
			message: `Gasto registrado exitosamente`,
		})
	} catch (error) {
		console.log("Error en registrarGasto: ", error)
		return response.status(500).json(error)
	}
}
