import { fetchCrearAlumno,fetchGetAllAlumnos, fetchModificarAlumno } from "@/business/AlumnoDelegate";


export default async function handler(req:any,res:any){
    if(req.method==="GET"){
        try{
            const result = await fetchGetAllAlumnos()
            if(result.length===0) return res.status(404).json({message:"No hay alumnos registrados."})
            
            return res.status(200).json(result)
        }catch(e){
            return res.status(500).json({message:"Error al obtener los alumnos."})
        }
    }

    if (req.method==="POST"){
        const {data} = req.body
        const result = await fetchCrearAlumno(data)
        return res.status(200).json(result)
    }

    if (req.method==="PATCH"){
        const {data} = req.body
        const result = await fetchModificarAlumno(data)
        return res.status(200).json(result)
    }

    return res.status(405).json({message:"Método no permitido."})
}