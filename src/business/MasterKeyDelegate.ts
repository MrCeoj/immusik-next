import { obtenerContrasenaMaestra } from "@/persistence/MasterKeyDao";

export async function fetchAllMasterKeys(){
    let response = {
        success: false,
        message: "",
    }

    const masterKeys = await obtenerContrasenaMaestra();

    if(masterKeys === null){
        response.message="No existen contrasenas"
    }else{
        response.message="Existen contrasenas"
    }

    return response
}