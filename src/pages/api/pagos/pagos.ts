import { obtenerPagosDeAlumno, registrarPago } from "@/business/PagosDelegate"


/**
 * Handler para peticiones en cuanto a pagos.
 * @author Fong
 * @param req petición que hace el usuario
 * @param res respuesta que envía la api
 */
export default async function handler(req: any, res:any){
    if(req.method==="GET"){
        const id: number = parseInt(req.query.id)
        const pagos = await obtenerPagosDeAlumno(id)
        res.status(200).json(pagos)
    }else if(req.method==="POST"){
        const data = req.body
        const response = await registrarPago(data)
        res.status(200).json(response)
    }
}