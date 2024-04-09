import prisma from "@/utils/Prisma";
import { parse } from "path";

/**
 * Regresa una clase por su id
 * @param id - id de la clase a buscar
 * @returns la clase encontrada
 */
export async function getClase(id: number) {
  return await prisma.clase.findUnique({
    where: {
      id: id,
    },
  });
}

/**
 * Regresa todas las clases
 * @returns - todas las clases
 */
export async function getAllClases() {
  return await prisma.clase.findMany();
}

/**
 * Borra una clase
 * @param id: id de la clase a borrar
 * @return la clase eliminada
 */
export async function deleteClase(id: any) {
  return await prisma.clase.delete({ where: { id } });
}

/**
 * Regresa todas las clases de cierta sucursal
 * @param id: id de la sucursal de la cual se buscaran sus clases
 * @return las clases de la sucursal
 */
export async function getClasesFromSucursal(id: any) {
  return await prisma.clase.findMany({
    where: {
      idSucursal: id,
    },
  });
}

/**
 * Elimina clases de cierta sucursal
 * @param id: la id de la sucursal cuyas clases van a ser eliminadas
 * @return las clases eliminadas
 */
export async function deleteClasesFromSucursal(id: any) {
  return await prisma.clase.deleteMany({
    where: {
      idSucursal: id,
    },
  });
}

/**
 * Elimina el docente de una clase, es posible debido a la no nullabilidad de la columna idDocente
 * @param id id de la clase a la que se le va a quitar el docente
 * @return la clase con el docente eliminado
 */
export async function deleteDocenteFromClase(id: number) {
  return await prisma.clase.updateMany({
    where: {
      idDocente: id,    
    },
    data: {
      idDocente: null,
    },
  });
}

export async function deleteSingelDocente(id: number) {
  return await prisma.clase.update({
    where: {
      id: id,
    },
    data: {
      idDocente: null,
    },
  });
}

/**
 * Función que obtiene las clases que imparte cierto docente.
 * @param id id de docente del cual se recuperarán las clases que imparte
 * @returns las clases que imparte el docente
 */
export async function getClasesDeDeterminadoDocente(id: any){
  let idNum: number = parseInt(id)
  const clases = await prisma.clase.findMany({
    where:{idDocente:idNum}
  })
  return clases
}

export async function crearClaseSinDocente(data:any){
  let cupoNum: number = parseInt(data.cupo)
  let idSucursal: number = parseInt(data.sucursal)

  await prisma.clase.create({data: {
    nombre: data.nombre,
    idSucursal: idSucursal,
    cupoMax: cupoNum,
    dias: data.dias,
    hora: data.horario
  }})
}

export async function crearClaseConDocente(data:any){
  let cupoNum: number = parseInt(data.cupo)
  let idDocente: number = parseInt(data.docente)
  let idSucursal: number = parseInt(data.sucursal)

  await prisma.clase.create({data: {
    nombre: data.nombre,
    idSucursal: idSucursal,
    cupoMax: cupoNum,
    dias: data.dias,
    hora: data.horario,
    idDocente: idDocente
  }})
}
