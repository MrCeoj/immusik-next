import { NextApiRequest, NextApiResponse } from "next";
import { obtenerClasesDeAlumno, checkEstado,anularInscripcion } from "@/business/AlumnoClaseDelegate";

/**
 * Función que llama al backend para obtener arreglo de clases con nombre de sucursal a las que pertenece un alumno
 * @param req - contiene el id del alumno
 * @param res - arreglo de objetos de clases con nombre de sucursal
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const id = Number(req.query.id);
      const clases = await obtenerClasesDeAlumno(id);
      res.status(200).json(clases);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  if(req.method === 'PATCH'){
    try{
      const id = Number(req.query.id)
      checkEstado(id)
      res.status(200).json({message: 'Estado actualizado'})
    }catch(error: any){
      res.status(500).json({message: error.message})
    }
  }

  if(req.method === 'DELETE'){
    try{
      const idAlumno = Number(req.query.id)
      const idClase = Number(req.body)
      if(idClase === null || idClase === undefined){
        throw Error("Error al desinscribir: Clase no proporcionada")
      }
      if(idAlumno === null || idAlumno === undefined){
        throw Error("Error al desinscribir: Alumno no proporcionado")
      }
      await anularInscripcion(idClase, idAlumno)
      res.status(200).json({message: 'Alumno desinscrito'})
    }catch(error:any){
      res.status(500).json({message: error.message})
    }
  }

  res.status(405).statusMessage = "Método no permitido";
}
