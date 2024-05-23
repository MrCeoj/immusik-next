import { NextApiRequest, NextApiResponse } from "next";
import { obtenerGastosDeSucursal } from "@/business/GastosDelegate";

/**
 * Función que maneja la petición para obtener todos los gastos de una sucursal por su id
 * @param req - Request de la petición
 */
export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
  if (req.method === "GET") {
    try {
      const idSucursal = Number(req.query.id);

      if(idSucursal === null || idSucursal === undefined || isNaN(idSucursal))
        throw new Error("Error al obtener los gastos, id de sucursal inválida");

      const response = await obtenerGastosDeSucursal(idSucursal);
      console.log(response)
      res.status(response.status).json(response.gastos);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
  }

  res.status(405).json({ message: "Método no permitido" });
}
