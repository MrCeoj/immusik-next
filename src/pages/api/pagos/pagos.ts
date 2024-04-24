import { fetchGetPagosDeAlumno } from "@/business/PagosDelegate";

export default async function handler(req: any, res:any){
    if(req.method==="GET"){
        const id: number = parseInt(req.query.id)
        const pagos = await fetchGetPagosDeAlumno(id)
        res.status(200).json(pagos)
    }
}