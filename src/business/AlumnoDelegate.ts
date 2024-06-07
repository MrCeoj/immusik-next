import { alumnoObtenerTodos,alumnoActualizarEstado, alumnoCrear, alumnoModificar, alumnoObtenerPorCurp } from "@/persistence/AlumnoDao"
import { obtenerClasesPorAlumno } from "./AlumnoClaseDelegate"
import { Alumno } from '@/entities'

/**
 * Función para obtener a todos los alumnos
 * @returns todos los alumnos en la base de datos
 */
export async function obtenerTodosAlumnos(){
    const alumnos = await alumnoObtenerTodos();
    
    alumnos.sort((a:Alumno,b:Alumno) => {
        if(a.nombre < b.nombre) return -1
        if(b.nombre > a.nombre) return 1
        return 0
    })

    alumnos.sort((a:Alumno, b:Alumno) => {
        if(a.activo && !b.activo) return -1
        if(!a.activo && b.activo) return 1
        return 0
    })

    return alumnos
}

/**
 * Función que actualiza el estado de todos los alumnos, esta función se manda llamar
 * cada que se crea una clase, cada que se elimina una clase, cuando se elimina una sucursal
 * o cada que se desasigna una clase a un alumno.
 */
export async function actualizarEstadoDeAlumnos(){
    const alumnos = await obtenerTodosAlumnos() //Se obtienen todos los alumnos
    for(const alumno of alumnos){
        //Por cada alumno se obtienen sus registros AlumnoClase
        const clasesDelAlumno = await obtenerClasesPorAlumno(alumno.id)
        if(clasesDelAlumno.length>0){ //Si tiene registros AlumnoClase se declara su estado activo = true
            actualizarEstadoDeAlumno(true,alumno.id)
        }else{ //Si no, activo = false
            actualizarEstadoDeAlumno(false,alumno.id)
        }
    }
}

/**
 * Función que actualiza el estado "activo" del alumno, este estado es booleano.
 * @param estado el estado que se le asignará al alumno
 * @param id la id del alumno al que se le editará su estado
 */
export async function actualizarEstadoDeAlumno(estado:boolean,id:any){
    await alumnoActualizarEstado(estado,id)
}

/**
 * Función para crear un alumno.
 * @param data información del alumno a registrar
 * @returns respuesta que le dará al usuario para tratar errores.
 */
export async function registrarAlumno(data:any){
    let response = {
        message:""
    }
    const alumnos = await alumnoObtenerTodos()
    if(alumnos.some((alumno)=>alumno.curp===data.curp)){
        response.message="Ya existe un alumno con esa CURP."
    }else{
        await alumnoCrear(data)
        response.message="Alumno registrado correctamente."
    }

    return response
}

/**
 * Función para modificar la información de un alumno
 * @author Fong
 * @param data datos del alumno que se va a modificar
 * @returns la respuesta de la petición
 */
export async function modificarAlumno(data:any){
    let response = {
        message: ""
    }

    const alumno = await obtenerAlumnoPorCurp(data.curp)

    if(alumno && alumno.id !== data.id){
        response.message="Ya existe un alumno con esa CURP."
    }else{
        await alumnoModificar(data)
        response.message="Se modificó la información del alumno exitosamente."
    }

    return response
}

/**
 * Función para obtener alumno por curp
 * @author Fong
 * @param curp curp
 * @returns alumno
 */
export async function obtenerAlumnoPorCurp(curp:string){
    return await alumnoObtenerPorCurp(curp)
}