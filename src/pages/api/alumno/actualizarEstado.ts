import { NextApiRequest, NextApiResponse } from 'next';
import { actualizarEstadoDeAlumnos } from "@/business/AlumnoDelegate";


/**
 * Función que actualiza el estado de los alumnos.
 * @param req - Información de la petición
 * @param res - Objeto de respuesta
 * @returns - Mensaje de éxito o error
 */
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="PATCH"){
        try{
            await actualizarEstadoDeAlumnos()
            return res.status(200).json({message:"Estado de los alumnos actualizado correctamente."})
        }catch(e){
            return res.status(500).json({message:"Error al actualizar el estado de los alumnos."})
        }
    }

    return res.status(405).json({message:"Método no permitido."})
}