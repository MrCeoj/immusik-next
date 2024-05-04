import { NextApiRequest, NextApiResponse } from "next";
import { inscribirAlumno } from "@/business/AlumnoClaseDelegate";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
        if(req.body.idAlumno === null || req.body.idAlumno === undefined || req.body.idAlumno === "")
            return res.status(400).json({error: "Falta proporcionar ID de alumno"});
        if(!req.body.idClase)
            return res.status(400).json({error: "Falta proporcionar ID de clase"});

        const { idAlumno, idClase } = req.body;

        const result = await inscribirAlumno(idAlumno, idClase)
        return res.status(200).json(result)
    } catch (error: any) {}
  }

  return res.status(405).send("Método no permitido");
}
