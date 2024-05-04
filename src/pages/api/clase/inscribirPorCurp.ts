import { NextApiRequest, NextApiResponse } from "next";
import { inscribirPorCurp } from "@/business/AlumnoClaseDelegate";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      if (
        req.body.curp === null ||
        req.body.curp === undefined ||
        req.body.curp === ""
      )
        return res
          .status(400)
          .json({ error: "Falta proporcionar curp de alumno" });
      if (!req.body.idClase)
        return res
          .status(400)
          .json({ error: "Falta proporcionar ID de clase" });

      const { curp, idClase } = req.body;

      const result = await inscribirPorCurp(curp, idClase);
      return res.status(200).json(result);
    } catch (error: any) {}
  }
}
