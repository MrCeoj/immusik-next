import { fetchCrearAlumno } from "@/business/AlumnoDelegate";

export default async function handler(req:any,res:any){
    if(req.method==="GET"){

    }else if (req.method==="POST"){
        const {data} = req.body
        const result = await fetchCrearAlumno(data)
        res.status(200).json(result)
    }
}