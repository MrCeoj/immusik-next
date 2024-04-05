import { fetchGetAllAlumnoClases } from "@/business/AlumnoClaseDelegate";

export default async function Handler(req: any, res:any){
    if(req.method==="GET"){
        const registros = await fetchGetAllAlumnoClases()
        res.status(200).json(registros)
    }else{

    }
}