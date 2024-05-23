import {fetchEditarSucursal, fetchAllSucursals, fetchCreateSucursal, fetchEliminarSucursal } from "@/business/SucursalDelegate";


/**
 * Maneja la solicitud HTTP para recuperar todas las sucursales.
 * 
 * @param req - El objeto de solicitud HTTP, generalmente el fetch a la bd.
 * @param res - El objeto de respuesta HTTP, la respuesta (Si encontró o no).
 * @returns Una respuesta JSON con las sucursales recuperadas o un mensaje de error.
 */

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const result = await fetchAllSucursals();

    if ("message" in result && result.message === "No records found") {
      res.status(404).json(result);
    } else {
      res.status(200).json(result);
    }
  } else if(req.method === "POST"){
    const {data} = req.body
    const result = await fetchCreateSucursal(data)
    res.status(200).json(result)
    //----------------------BLOQUE DE PATCH-------------------------------------------
  }else if(req.method==="PATCH"){ 
    const {data} = req.body
    const result = await fetchEditarSucursal(data) //3. Se manda llamar el método enviando data
    res.status(200).json(result) //4. Se declara como exitosa la comunicación con backend
    //------------------BLOQUE DE DELETE--------------------------------
  }else if(req.method==="DELETE"){
    const {id,contrasena} = req.body //se obtiene la id de body
    const data = { //se arma un objeto data con la id
      id:id,
      contrasena:contrasena
    }
    const result = await fetchEliminarSucursal(data) //se envía al método eliminar sucursal
    res.status(200).json(result)
  }else{
    res.status(405).send({ message: "Method not allowed" });
  }
}
