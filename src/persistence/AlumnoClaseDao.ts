import prisma from "@/utils/Prisma";

/*
 * Un registro AlumnoClase es una tabla intermedia en nuestra base de datos,
 * ya que un alumno puede estar inscrito a muchas clases y una clase puede tener muchos alumnos
 * creando una relación de muchos a muchos, la cual para ser normalizada necesita una tabla
 * intermedia
 *
 * La tabla AlumnoClase contiene su propia id autogenerada, la id del alumno y la id de la clase
 * en la que está registrado el alumno.
 *  */

//Regresa todos los registros AlumnoClase
export async function getAllAlumnoClase() {
  return await prisma.alumnoClase.findMany();
}

/**
 * Obtiene un registro AlumnoClase por el id de la clase y el alumno
 * @param idAlumno id del alumno
 * @param idClase id de la clase
 * @returns registro AlumnoClase
 */
export async function getAlumnoClase(idClase: number, idAlumno: number) {
  return await prisma.alumnoClase.findFirst({
    where: {
      alumnoId: idAlumno,
      claseId: idClase,
    },
  });
}

/*
 * Borra un registro AlumnoClase
 * @param id: id del registro AlumnoClase que se eliminará
 *  */
export async function deleteAlumnoClase(id: any) {
  return await prisma.alumnoClase.delete({ where: { id } });
}

/*
 * Borra registro AlumnoClase solo de una clase específica.
 * @param id: id de la clase de la cual se eliminarán los registros AlumnoClase
 *  */
export async function deleteAlumnoClaseFromClase(id: any) {
  return await prisma.alumnoClase.deleteMany({
    where: {
      claseId: id,
    },
  });
}

/**
 * Función para obtener los registros AlumnoClase relacionados a cierto alumno
 * @param id id del alumno del cual se regresarán los registros AlumnoClase
 * @returns los registros AlumnoClase relacionadas al alumno
 */
export async function getClasesDeCiertoAlumno(id: any) {
  const clases = await prisma.alumnoClase.findMany({
    where: { alumnoId: id },
  });
  return clases;
}

/**
 * Obtiene un arreglo de alumnos que pertenecen a una clase
 * @param id Identificador de la clase
 * @returns Arreglo de alumnos que pertenecen a la clase
 */
export async function getAlumnosFromClase(id: number) {
  const alumnosClase = await prisma.alumnoClase.findMany({
    where: {
      claseId: id,
    },
  });

  const alumnos = alumnosClase.map((alumnoClase) => {
    return prisma.alumno.findUnique({
      where: {
        id: alumnoClase.alumnoId,
      },
    });
  });

  return Promise.all(alumnos);
}

/**
 * Función que regresa un arreglo de objetos de clases que pertenece
 * un alumno con su nombre de sucursal
 * @param id - Id del alumno
 * @returns Arreglo de objetos de clases con nombre de sucursal
 */
export async function getClaseByIdAl(id: number) {
  const clases = await prisma.alumnoClase.findMany({
    where: {
      alumnoId: id,
    },
    select: {
      id: false,
      clase: {
        select: {
          id: true,
          nombre: true,
          cupoMax: true,
          dias: true,
          hora: true,
          sucursal: {
            select: {
              nombre: true,
            },
          },
        },
      },
    },
  });

  // Esto se hace porque cuando se hace la consulta se hace con un scope extra, lo cual es molesto, aqui se lo quito
  const clasesWithoutWrapper = clases.map((claseWrapper) => claseWrapper.clase);
  return clasesWithoutWrapper;
}

/**
 * Función que actaliza el estado de un alumno de acuerdo al valor ingresado
 * @param estado - Estado al que se actualizará el alumno
 * @param idAlumno - Id del alumno al que se actualizará el estado
 * @returns Registro actualizado
 */
export async function changeEstado(estado: boolean, idAlumno: number) {
  try {
    const transaction = await prisma.$transaction([
      prisma.alumno.update({
        where: {
          id: idAlumno,
        },
        data: {
          activo: estado,
        },
      }),
    ]);
    return transaction;
  } catch (error) {
    return error;
  }
}

/**
 * Función que desinscribe a un alumno de determinada clase eliminando su registro
 * en tabla alumnoclase.
 * @param idAlumno - Id del alumno al cual desinscribir.
 * @param idClase - Id de la clase de la cual desinscribir.
 * @returns Mensaje de éxito o error.
 */
export async function desinscribirAlumno(idAlumno: number, idClase: number) {
  try {
    const idAlumnoClase = await getAlumnoClase(idClase, idAlumno);

    if (idAlumnoClase === null || idAlumnoClase === undefined) {
      throw Error("No se encontró el registro de alumno en la clase");
    }

    const transaction = await prisma.$transaction([
      prisma.alumnoClase.delete({
        where: {
          id: idAlumnoClase?.id,
        },
      }),
    ]);
    return transaction;
  } catch (error) {
    return error;
  }
}

/**
 * Función que devuelve una lista de clases con disponibilidad de cupo
 * La lógica de traslape de usuarios se realiza en business
 * @returns Lista de clases disponibles
 */
export async function getClasesDisponibles() {
  const clasesLlenas: any[] = [];

  const allClases = await prisma.clase.findMany({
    select: {
      id: true,
      cupoMax: true,
    },
  });

  allClases.forEach(async (clase) => {
    const count = await prisma.alumnoClase.count({
      where: {
        claseId: clase.id,
      },
    });

    if (count >= clase.cupoMax) clasesLlenas.push(clase.id);
  });

  const clases = await prisma.clase.findMany({
    where: {
      id: {
        not: {
          in: clasesLlenas,
        },
      },
    },
  });

  console.log("clases disponibles por cupo; ", clases);

  return clases;
}

/**
 * Función que inscribe a un alumno en determinada clase por sus Id
 * @params IdAlumno - identificador del alumno
 * @params IdClase - Identificador de la clase.
 */
export async function createAlumnoClase(idAlumno: number, idClase: number) {
  try {
    const transaction = await prisma.$transaction([
      prisma.alumnoClase.create({
        data: {
          alumnoId: idAlumno,
          claseId: idClase,
        },
      }),
    ]);
    return transaction;
  } catch (error: any) {}
}

/**
 * Función para borrar relaciones alumnoClase en lotes
 * @author Fong
 * @param alumnoId alumno del cual se desasignarán clases
 * @param claseId clases que serán desasignadas
 */
export async function desasignarMuchos(alumnoId:number,claseId:number[]){
  try{
    //Método de prisma para borrar varios registros alumnoClase
    const respuesta = await prisma.alumnoClase.deleteMany({
      where: {
        alumnoId: alumnoId,
        claseId: {
          in: claseId
        }
      },
    })
    return respuesta
  }catch(e:any){
    console.log("AlumnoClaseDAO: "+e.message)
    return null
  }
}