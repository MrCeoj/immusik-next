import { NextApiRequest, NextApiResponse } from "next";
import { obtenerClases } from "@/business/DocenteDelegate";

/**
 * Maneja la solicitud HTTP para obtener las clases de un docente por su ID.
 * @param req - El request de la API, contiene el ID del docente a buscar.
 * @param res - El response de la API, contiene el resultado de la búsqueda.
 * @returns Un objeto con las clases del docente.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obtener el ID del docente desde la consulta
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const idBuscar = Number(id);
      // Obtener las clases del docente
      const clasesDocente = await obtenerClases(idBuscar);

      return res.status(200).json(clasesDocente);
    } catch (error) {
        return res.status(500).json(error);
    }
  }

  res.status(405).json({ error: "Método no permitido" });
}