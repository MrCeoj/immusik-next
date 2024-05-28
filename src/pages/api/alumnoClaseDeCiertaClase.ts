import { obtenerAlumnosDeClase } from "@/business/AlumnoClaseDelegate";

export default async function handler(req:any,res:any){
    if(req.method==="POST"){
        try{
            const data = req.body
            const id = data.id
            const alumnos = await obtenerAlumnosDeClase(id)
            return res.json(alumnos)
        }catch(e:any){
            return res.status(500).json({message:e.message})
        }
    }
}