import { eliminarUsuario } from "@/business/UsuarioDelegate"

export default async function handler(req:any,res:any){
    if(req.method==="PATCH"){
        try{
            const data = req.body
            const idNum:number = parseInt(data.id)
            const result = await eliminarUsuario(idNum)
            if(!result) return res.status(404).json({message:"No se pudo eliminar el usuario."})
            return res.status(200).json(result)
        }catch(e:any){
            return res.status(500).json({message:"Error al eliminar al usuarios."})
        }
    }
}