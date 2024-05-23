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

/**
 * Función que registra pagos
 * @author Fong
 * @param data datos del pago a registrar
 * @returns el pago registrado
 */
export async function crearPago(data:any){
    let montoNum:number = parseFloat(data.monto)
    let idAlumnoNum:number = parseInt(data.idAlumno)

    return await prisma.pagos.create({
        data: {
            monto: montoNum,
            metodo:data.metodo,
            idAlumno:idAlumnoNum,
            concepto: data.concepto,
            fecha:data.fecha
        }
    })
}