import { obtenerTodosUsuarios } from "@/business/UsuarioDelegate"


export default async function handler(req:any,res:any){
    if(req.method==="GET"){
        try{
            const result = await obtenerTodosUsuarios()
            if(!result) return res.status(404).json({message:"No hay usuarios."})
            return res.status(200).json(result)
        }catch(e:any){
            return res.status(500).json({message:"Error al obtener los usuarios."})
        }
    }
}
