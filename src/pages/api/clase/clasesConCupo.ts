import { obtenerClasesConCupo } from "@/business/ClaseDelegate"


/**
 * función para manejar peticiones fetch
 * @param req request que hace  el usuario desde fetch
 * @param res respuesta que se le regresará al usuario
 */
export default async function handler(req:any,res:any){
    if(req.method==="GET"){
        const clases = await obtenerClasesConCupo()
        res.status(200).json(clases)
    }
}