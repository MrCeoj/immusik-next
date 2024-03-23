import { fetchAllSucursals, fetchCreateSucursal } from "@/business/SucursalDelegate";

/**
 * Maneja la solicitud HTTP para recuperar todas las sucursales.
 * 
 * @param req - El objeto de solicitud HTTP, generalmente el fetch a la bd.
 * @param res - El objeto de respuesta HTTP, la respuesta (Si encontró o no).
 * @returns Una respuesta JSON con las sucursales recuperadas o un mensaje de error.
 */

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const result = await fetchAllSucursals();

    if ("message" in result && result.message === "No records found") {
      res.status(404).json(result);
    } else {
      res.status(200).json(result);
    }
  } else if(req.method === "POST"){
    const {nombre,direccion} = req.body
    const data = {
      nombre: nombre,
      direccion: direccion
    }
    const result = await fetchCreateSucursal(data)
    res.status(200).json(result)
  }else{
    res.status(405).send({ message: "Method not allowed" });
  }
}
