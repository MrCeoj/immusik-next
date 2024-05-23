import { obtenerDocentesNoVetados } from "@/business/DocenteDelegate";

export default async function Handler(req: any, res: any) {
  if (req.method === "GET") {
    const result = await obtenerDocentesNoVetados();
    res.status(200).json(result);
  }
}
