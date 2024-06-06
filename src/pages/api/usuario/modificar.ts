import { modificarUsuario } from "@/business/UsuarioDelegate"

export default async function handler(req:any,res:any){
    if(req.method==="PATCH"){
        try{
            const data = req.body
            const result = await modificarUsuario(data)
            if(result==="username_invalido") return res.status(404).json({message:"Nombre de usuario inválido."})
            if(!result) return res.status(404).json({message:"Error al modificar al usuario."})
            return res.status(200).json(result)
        }catch(e:any){
            return res.status(500).json({message:"Error al modificar al usuario."})
        }
    }
}