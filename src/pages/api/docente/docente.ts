import { obtenerDocentes } from "@/business/DocenteDelegate";

export default async function Handler(req:any, res:any){
    if(req.method==="GET"){
        const response = await obtenerDocentes()
        res.status(200).json(response)
    }
}