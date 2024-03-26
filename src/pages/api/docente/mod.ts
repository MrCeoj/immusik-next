import { modificarDocente } from "@/business/DocenteDelegate";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *  Maneja la solicitud HTTP para modificar un docente.
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const docente = req.body;
    const result = await modificarDocente(docente);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}
