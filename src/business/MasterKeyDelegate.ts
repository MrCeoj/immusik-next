import { getAllMasterKeys } from "@/persistence/MasterKeyDao";

export async function fetchAllMasterKeys(){
    let response = {
        success: false,
        message: "",
    }

    const masterKeys = await getAllMasterKeys();

    if(masterKeys.length===0){
        response.message="No existen contrasenas"
    }else{
        response.message="Existen contrasenas"
    }

    return response
}