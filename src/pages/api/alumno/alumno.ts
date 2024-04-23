import { fetchCrearAlumno,fetchGetAllAlumnos, fetchModificarAlumno } from "@/business/AlumnoDelegate";


export default async function handler(req:any,res:any){
    if(req.method==="GET"){
        const result = await fetchGetAllAlumnos()
        res.status(200).json(result)
    }else if (req.method==="POST"){
        const {data} = req.body
        const result = await fetchCrearAlumno(data)
        res.status(200).json(result)
    }else if (req.method==="PATCH"){
        const {data} = req.body
        const result = await fetchModificarAlumno(data)
        res.status(200).json(result)
    }
}