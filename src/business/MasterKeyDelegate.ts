import { contrasenaMaestraObtener } from "@/persistence/MasterKeyDao";

export async function obtenerTodasContMaest(){
    let response = {
        success: false,
        message: "",
    }

    const masterKeys = await contrasenaMaestraObtener();
    console.log(masterKeys)
    if(masterKeys === null){
        response.message="No existen contrasenas"
    }else{
        response.message="Existen contrasenas"
    }

    return response
}

export async function obtenerContrasenaMaestra(){
    const masterKeys = await contrasenaMaestraObtener();
    return masterKeys
}