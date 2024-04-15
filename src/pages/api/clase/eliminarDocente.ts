import { eliminarUnDocente } from "@/business/ClaseDelegate";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Maneja la solicitud HTTP para eliminar un docente de una clase.
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
    if (req.method === "DELETE") {
      const id = req.body;
      if (!req.body)
        return res
          .status(400)
          .json({ error: "Falta proporcionar el ID de la clase" });
      const result = await eliminarUnDocente(id.idClase, id.idDocente);
      if(result instanceof Error)
        return res.status(400).json({ error: result.message });
      return res.status(200).json(result);
    }
    return res.status(405).json({ error: "Método no permitido" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
