import { getAllAlumnos,actualizarEstadoDeAlumno, crearAlumno, modificarAlumno } from "@/persistence/AlumnoDao"
import { fetchGetClasesDeCiertoAlumno } from "./AlumnoClaseDelegate"
import { Alumno } from '@/entities' 

/**
 * Función para obtener a todos los alumnos
 * @returns todos los alumnos en la base de datos
 */
export async function fetchGetAllAlumnos(){
    const alumnos = await getAllAlumnos();
    
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
    const alumnos = await fetchGetAllAlumnos() //Se obtienen todos los alumnos
    for(const alumno of alumnos){
        //Por cada alumno se obtienen sus registros AlumnoClase
        const clasesDelAlumno = await fetchGetClasesDeCiertoAlumno(alumno.id)
        if(clasesDelAlumno.length>0){ //Si tiene registros AlumnoClase se declara su estado activo = true
            fetchActualizarEstadoDeAlumno(true,alumno.id)
        }else{ //Si no, activo = false
            fetchActualizarEstadoDeAlumno(false,alumno.id)
        }
    }
}

/**
 * Función que actualiza el estado "activo" del alumno, este estado es booleano.
 * @param estado el estado que se le asignará al alumno
 * @param id la id del alumno al que se le editará su estado
 */
export async function fetchActualizarEstadoDeAlumno(estado:boolean,id:any){
    await actualizarEstadoDeAlumno(estado,id)
}

/**
 * Función para crear un alumno.
 * @param data información del alumno a registrar
 * @returns respuesta que le dará al usuario para tratar errores.
 */
export async function fetchCrearAlumno(data:any){
    let response = {
        message:""
    }
    const alumnos = await getAllAlumnos()
    if(alumnos.some((alumno)=>alumno.curp===data.curp)){
        response.message="Ya existe un alumno con esa CURP."
    }else{
        await crearAlumno(data)
        response.message="Alumno registrado correctamente."
    }

    return response
}

/**
 * Función para modificar la información de un alumno
 * @param data datos del alumno que se va a modificar
 * @returns la respuesta de la petición
 */
export async function fetchModificarAlumno(data:any){
    let response = {
        message: ""
    }

    //Se verifica si se repite la CURP
    let repetido = false

    const alumnos = await fetchGetAllAlumnos()
    alumnos.map(alumno=>{
        if(alumno.id!==data.id){
            if(alumno.curp===data.curp){
                repetido = true
            }
        }
    })

    if(!repetido){
        await modificarAlumno(data)
        response.message="Se modificó la información del alumno exitosamente."
    }else{
        response.message="Ya existe un alumno con esa CURP."
    }

    return response
}