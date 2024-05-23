import { obtenerTodosAlumnoClase } from "@/business/AlumnoClaseDelegate";

/**
 * Función para tratar cualquier petición que haga el usuario al api.
 * @param req request HTTP que hace el usuario desde las paginas web
 * @param res respuesta que regresará fetch al usuario
 */
export default async function Handler(req: any, res:any){
    if(req.method==="GET"){
        const registros = await obtenerTodosAlumnoClase()
        res.status(200).json(registros)
    }
    res.status(405).send("Metodo no permitido")
}