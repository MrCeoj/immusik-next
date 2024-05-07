import { NextApiRequest, NextApiResponse } from "next";
import { clasesSinTraslape } from "@/business/AlumnoClaseDelegate";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "PATCH"){
        try{
            const idAl = req.body;
            console.log(idAl)
            if(idAl === undefined || idAl === null){
                return res.status(400).send("Id no proporcionada")
            }
            const clases = await clasesSinTraslape(idAl)

            return res.status(200).json(clases)
        }catch(error:any){
            return res.status(500).send(error.message)
        }
    }

    return res.status(405).send("Método no permitido")
}