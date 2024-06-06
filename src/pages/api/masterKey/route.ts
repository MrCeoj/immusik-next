import { obtenerContrasenaMaestra } from "@/business/MasterKeyDelegate"

export default async function handler(req:any,res:any){
    if(req.method==="GET"){
        try{
            const result = await obtenerContrasenaMaestra()
            if(!result) return res.status(404).json({message:"No hay contraseñas maestras."})
            return res.status(200).json(result)
        }catch(e:any){
            console.log(e.message)
            return res.status(500).json({message:"Error al obtener la contraseña maestra."})
        }
    }
}
