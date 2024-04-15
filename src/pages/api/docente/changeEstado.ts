import { getMasterKey } from "@/business/MasterKeyDelegate";
import { establecerEstado } from "@/business/DocenteDelegate";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Maneja las peticiones que se relacionan al cambio de estado de un docente.
 * @param req - Request de la petición.
 * @param res - Response de la petición.
 * @returns - Un json con la verificación de la contraseña, el cambio de estado o un error.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Si el método es POST, se verifica la contraseña.
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
  // Si el método es PATCH, se cambia el estado del docente a vetado.
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
  // Si el método es PUT, se cambia el estado del docente a activo o inactivo.
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
