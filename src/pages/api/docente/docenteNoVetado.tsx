import { fetchGetDocentesNoVetados } from "@/business/DocenteDelegate";

export default async function Handler(req: any, res: any) {
  if (req.method === "GET") {
    const result = await fetchGetDocentesNoVetados();
    res.status(200).json(result);
  }
}
