import { fecthGetAllClases ,fetchEliminarClase} from "@/business/ClaseDelegate";

/**
 * Handler para cualquier petición HTTP que haga el usuario.
 * @param req request enviada por el usuario
 * @param res respuesta que se le regresará al usuario
 */
export default async function Handler(req: any, res:any){
    if(req.method==="GET"){
        const result = await fecthGetAllClases(); //Se buscan todas las clases
        res.status(200).json(result)
    }else if(req.method==="DELETE"){
        const {id} = req.body
        const result = await fetchEliminarClase(id)
        res.status(200).json(result)
    }else{
        res.status(405).send({message: "Method not allowed."})
    }
}