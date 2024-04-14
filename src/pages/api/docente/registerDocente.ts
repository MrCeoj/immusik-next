import { registrarDocente } from "@/business/DocenteDelegate";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Maneja la solicitud HTTP para registrar un docente.
 *
 * @param req - El objeto de solicitud HTTP.
 * @param res - El objeto de respuesta HTTP, si fue exitosa contendrá la confirmación.
 * @returns Una respuesta JSON con la información del nuevo docente o con errores generados por registrarDocente().
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

    const docenteCreado = await registrarDocente(docente);
    if (docenteCreado instanceof Error) {
      return res.status(500).json({ error: docenteCreado.message });
    }
    return res.status(200).json({
      message: `Docente registrado: ${docenteCreado.nombre} ${docenteCreado.aPaterno} ${docenteCreado.aMaterno}`,
    });
  } catch (error) {
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}