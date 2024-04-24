import prisma from "@/utils/Prisma";

/**
 * Función que recupera los pagos de cierto alumno
 * @param id del alumno cuyos pagos se van a recuperar
 * @returns los pagos que ha realizado el alumno
 */
export async function getPagosDeAlumno(id:any){
    let idNum: number = parseInt(id)

    const pagos = await prisma.pagos.findMany({
        where: {
            idAlumno:idNum
        }
    })

    return pagos
}