
import { pagoCrear, pagosObtenerDeAlumno } from "@/persistence/PagosDao"
import { fetchGetAllAlumnos } from "./AlumnoDelegate"

/**
 * Función que regresa los pagos de cierto alumno
 * @author Fong
 * @param id id del alumno cuyos pagos se van a recuperar
 * @returns los pagos del alumno ordenados del mas reciente al mas antiguo
 */
export async function obtenerPagosDeAlumno(id:any){

    //Se convierte la id a numero
    let idNum: number = parseInt(id)

    //Se obtienen todos los alumnos
    const alumnos = await fetchGetAllAlumnos()
    //Se verifica que el alumno exista
    const existe = alumnos.some(alumno=>alumno.id===idNum)
    if(existe){
        //Si existe se obtienen los pagos del alumno
        const pagos = await pagosObtenerDeAlumno(id)
        //Se ordenan ls pagos del más reciente al más antiguo
        
        pagos.sort((pagoA,pagoB)=>{
            const fechaA = convertirAFecha(pagoA.fecha)
            const fechaB = convertirAFecha(pagoB.fecha)
            return fechaB.getTime()-fechaA.getTime()
        })


        return pagos
    }else{
        return null
    }

    
}

/**
 * Función que convierte fechas de string a date
 * @author Fong
 * @param str fecha en string
 * @returns fecha en Date
 */
const convertirAFecha = (str:string)=>{
    const [dia,mes,ano] = str.split("/").map(Number)
    const fechaCompleta = new Date(2000+ano,mes-1,dia)
    return fechaCompleta
}

/**
 * Función que registra un pago
 * @author Fong
 * @param data datos del pago a registrar
 */
export async function registrarPago(data:any){
    let response = {
        message: ""
    }
    const pago = await pagoCrear(data)
    if(!pago){
        response.message="No se pudo registrar el pago."
    }else{
        response.message="Se registó el pago correctamente."
    }
    return response
}