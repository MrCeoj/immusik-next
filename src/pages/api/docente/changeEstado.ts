import { getMasterKey } from "@/business/MasterKeyDelegate";
import { establecerEstado } from "@/business/DocenteDelegate";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const password = req.body.masterKey;
    console.log(password);
    const fromDB = await getMasterKey();
    if (fromDB === null) {
      return res.status(200).json({ verified: false });
    }
    const masterKey = fromDB.value;
    console.log(masterKey);
    if (password === masterKey) {
      return res.status(200).json({ verified: true });
    } else {
      return res.status(200).json({ verified: false });
    }
  }
  if (req.method === "PATCH") {
    try {
      const id = Number(req.body);
      if (typeof id !== "number") {
        throw new Error("El id debe ser un número");
      }
      const result = await establecerEstado("VETADO",id);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "PUT") {
    try {
      const data = req.body;
      const result = await establecerEstado(data.estado, data.docente.id);
      return res.status(200).json(result);
    }catch(error: any){
      return res.status(500).json({ error: error.message });
    
    }
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Método ${req.method} no permitido`);
}
