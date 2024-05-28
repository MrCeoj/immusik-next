import { desasignarMuchosAlumnosDeUnaClase } from "@/business/AlumnoClaseDelegate"

export default async function handler(req:any,res:any){
    if(req.method==="DELETE"){
        try{
            const data = req.body
            const claseId = data.claseId
            const alumnoId = data.alumnoId
            const respuesta = await desasignarMuchosAlumnosDeUnaClase(claseId,alumnoId)
            return res.json(respuesta)
        }catch(e:any){
            return res.status(500).json({message:"Error al desasignar alumnos."})
        }
    }
    
}