import { desasignarDocenteDeCiertasClases } from "@/business/ClaseDelegate"

export default async function handler(req:any,res:any){
    if(req.method==="PATCH"){
        const ids = req.body
        const response = await desasignarDocenteDeCiertasClases(ids)
        return res.status(200).json(response)
    }
}