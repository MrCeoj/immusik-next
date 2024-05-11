import { fetchDesasignarMuchos } from "@/business/AlumnoClaseDelegate";
import { NextResponse } from "next/server";


/**
 * Función handler para peticiones a alumnoClaseMultiple
 * @author Fong
 * @param req request del usuario
 * @param res respuesta del servidor
 * @returns respuesta del servidor
 */
export default async function handler(req:any,res:any){
    if(req.method==="DELETE"){
        try{
            //Se extraen los datos
            const data =  req.body
            const alumnoId = data.alumnoId
            const claseId = data.claseId
    
            //Se manda llamar la función de desasignar varios alumnos simultaneamente
            const respuesta = await fetchDesasignarMuchos(alumnoId,claseId)
    
            //Se regresa una respuesta fallida o correcta
            if(!respuesta) return res.json({message:"Error al desasignar las clases"},{status:500})
            return res.json(respuesta)
        }catch(e:any){
            console.log(e.message)
        }
    }
}