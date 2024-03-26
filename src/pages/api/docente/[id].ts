import { NextApiRequest, NextApiResponse } from "next";
import { obtenerDocente } from "@/business/DocenteDelegate";

/**
 * Maneja la solicitud HTTP para obtener un docente por su ID.
 * @param req 
 * @param res 
 * @returns 
 */


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Como esta ip es dinámica (por el id), se debe usar query para obtener el id desde el body del request
  const { id } = req.query;
  if (req.method !== "GET") {
    res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const idBuscar = Number(id)
    const result = await obtenerDocente(idBuscar);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}
