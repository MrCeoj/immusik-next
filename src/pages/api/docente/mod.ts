import { modificarDocente } from "@/business/DocenteDelegate";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *  Maneja la solicitud HTTP para modificar un docente desde el formulario de modificación.
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if (req.method === "POST") {
    try {
      // Se obtiene el docente desde el request enviado por la página
      const docente = req.body;

      // Se consume el método de negocio para modificar un docente
      const result = await modificarDocente(docente);

      // Se retorna un mensaje de éxito
      if (result instanceof Error) {
        return res.status(500).json({ error: result.message });
      }
      return res.status(200).json(result);
    } catch (error) {

      // Se retorna un mensaje de error si falla la operación
      return res.status(500).json(error);
    }
  }
  
  // Se retorna un mensaje de error si el método no es el especificado al hacer la solicitud
  res.status(405).json({ error: "Método no permitido" });
  
}
