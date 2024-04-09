import {
  getClase,
  deleteClase,
  deleteClasesFromSucursal,
  getClasesFromSucursal,
  deleteDocenteFromClase,
  deleteSingelDocente,
  getAllClases,
  getClasesDeDeterminadoDocente,
  crearClaseSinDocente,
  crearClaseConDocente,
} from "@/persistence/ClaseDao";
import { Clase } from "@prisma/client";
import { borrarAlumnoClaseConDeterminadaClase } from "./AlumnoClaseDelegate";
import { actualizarEstadoDeDocentes, obtenerDocente } from "./DocenteDelegate";
import { actualizarEstadoDeAlumnos } from "./AlumnoDelegate";

/**
 * Obtiene una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function obtenerClase(id: number) {
  try {
    return await getClase(id);
  } catch (error) {
    console.error("Error al buscar clase:", error);
    return error;
  }
}

/**
 * Regresa las clases que se imparten en cierta sucursal
 * @param id - id de la sucursal de la cual se regresarán sus clases
 *
 */
export async function getClasesDeDeterminadaSucursal(id: any) {
  return getClasesFromSucursal(id);
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 */
export async function fetchEliminarClase(id: any) {
  const response = {
    success: false,
    message: ""
  }

  const clases =  await getAllClases()  
  const existe = clases.some((clase)=> clase.id===id)

  if(existe){
    await borrarAlumnoClaseConDeterminadaClase(id)
    await deleteClase(id)
    await actualizarEstadoDeDocentes()
    await actualizarEstadoDeAlumnos()
    response.message = "Clase eliminada exitosamente."
  }else{
    response.message = "No existe la clase a eliminar."
  }

  return response
}

/**
 * Borra clases pertenecientes a determinada sucursal
 * @param id: id de la sucursal cuyas clases serán eliminadas.
 */
export async function deleteClasesDeDeterminadaSucursal(id: any) {
  //console.log("borrando clases con id "+id)
  await deleteClasesFromSucursal(id);
}

/**
 * Elimina un docente de una clase
 * @param id
 * @return la clase con el docente eliminado
 */
export async function eliminarDocentedeClase(id: number) {
  try {
    // Obtener clase de la base de datos para hacer validaciones
    const clase = (await obtenerClase(id)) as Clase;

    // Validar que la clase exista y tenga docente asignado
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }

    return await deleteDocenteFromClase(id);
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
    return new Error("Error al eliminar docente de clase: " + error);
  }
}

export async function eliminarUnDocente(id: number) {
  try {
    const clase = (await obtenerClase(id)) as Clase;
    if (!clase) {
      throw new Error("No existe la clase con el id proporcionado");
    }
    if (clase.idDocente === null) {
      throw new Error("La clase no tiene docente asignado");
    }
    return await deleteSingelDocente(id);
  } catch (error) {
    console.error("Error al eliminar docente:", error);
    return error;
  }
}

/**
 * Función para encontrar todas las clases en la base de datos.
 * @returns se regresan las clases obtenidas
 */
export async function fecthGetAllClases(){
  //Se buscan todas las clases
  const clasesTemp = await getAllClases();

  //Las clases se dividen en aquellas que no tienen docente y aquellas donde si tienen docente
  //De igual forma cada uno de estos 2 sub-arreglos se ordena por orden alfabético
  const clasesSinProfesor = (clasesTemp.filter((clase)=>clase.idDocente===null)).sort((a,b)=> a.nombre.localeCompare(b.nombre))
  const clasesConProfesor = (clasesTemp.filter((clase)=>clase.idDocente!==null)).sort((a,b)=> a.nombre.localeCompare(b.nombre))
  
  //Los 2 sub-arreglos se vuelven a unir en un sub-arreglo llamado clases
  const clases = clasesSinProfesor.concat(clasesConProfesor) 

  //Se regresan las clases
  return clases;
}

/**
 * Función que regresa las clases que imparte cierto docente.
 * @param docenteId la id del docente del cual se regresarán sus clases.
 * @returns las clases de dicho docente.
 */
export async function fetchGetClasesDeDeterminadoDocente(docenteId:any){
  const clases = await getClasesDeDeterminadoDocente(docenteId)

  return clases
}

export async function fetchCrearClase(data:any){
  let response = {
    success: false,
    message: ""
  }
  
  if(data.docente===""){
    await crearClaseSinDocente(data)
    response.message = "Se creó la clase."
  }else{

    let valido = true
    let idDocente: number = data.docente
    const clasesDeDocente = await fetchGetClasesDeDeterminadoDocente(idDocente)
    const diasARegistrar: string[] = data.dias.split(',')

    if(clasesDeDocente.length>0){
      for(const clase of clasesDeDocente){
        const diasDeClase: string[] = clase.dias.split(',')
        for(const diaDeClase of diasDeClase){
          for(const diaAR of diasARegistrar){
            if(diaAR===diaDeClase){
              if(clase.hora===data.horario){
                valido = false
                response.message = "Horario no disponible."
                break;
              }
            }
          }
        }
      }

      if(valido){
        response.message="Se creó la clase."
        await crearClaseConDocente(data)
      }
    }else{
      await crearClaseConDocente(data)
      response.message = "Se creó la clase."
    }
  }

  actualizarEstadoDeDocentes()
  return response
}