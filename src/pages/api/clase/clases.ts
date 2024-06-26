import {
  obtenerTodasClases,
  registrarClase,
  eliminarClase,
} from "@/business/ClaseDelegate";

/**
 * Handler para cualquier petición HTTP que haga el usuario.
 * @param req request enviada por el usuario
 * @param res respuesta que se le regresará al usuario
 */
export default async function Handler(req: any, res: any) {
  if (req.method === "GET") {
    const result = await obtenerTodasClases(); //Se buscan todas las clases
    return res.status(200).json(result);
  }
  if (req.method === "DELETE") {
    const { id } = req.body;
    const result = await eliminarClase(id);
    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    const data = req.body
    console.log("Desde api")
    console.log(data)
    const result = await registrarClase(data);
    return res.status(200).json(result);
  }
  return res.status(405).send({ message: "Método no permitido" });
}
