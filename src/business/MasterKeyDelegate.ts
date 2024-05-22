import { contrasenaMaestraObtener } from "@/persistence/MasterKeyDao";


export async function obtenerTodasContrasenasMaestra(){
    let response = {
        success: false,
        message: "",
    }

    const masterKeys = await obtenerTodasContrasenasMaestra();
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