import warningIcon from "@/img/warningIcon.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Clase, Docente } from "@prisma/client";
import ModalClase from "./ModalClase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Clase({
  clase,
  actualizarClases,
}: {
  clase: Clase;
  actualizarClases: any;
}) {
  //useState para guardar los registros alumnoClases
  const [alumnoClases, setAlumnoClases] = useState([]);
  const [docentes, setDocentes] = useState<Docente[] | null>(null);
  const [dias, setDias] = useState<string[]>([]);

  useEffect(() => {
    // Se obtienen todos los docentes disponibles (que no estén vetados)
    // para no hacer fetch por cada clase
    fetch("api/docente/obtenerDisponibles")
      .then((res) => res.json())
      .then((data) => setDocentes(data));

    /*Se obtienen todos los registros AlumnoClase */
    fetch("api/AlumnoClase").then((response) => {
      if (response.ok) {
        return response.json().then((data) => setAlumnoClases(data)); //Los registros se guardan en alumnoClases
      } else {
        toast.error("Error al cargar los registros Alumno-Clase.");
      }
    });

    setDias(clase.dias.split(",")); //Se separan los dias de la clase
  }, [clase]); //Se ejecuta cada vez que se modifica la clase

  //Declaración de variable cupo para mostrar el cupo de la clase
  let cupo;

  //Si hay registros de alumnoClases se hace lo siguiente:
  if (alumnoClases.length > 0) {
    /*Se filtran los registros alumnoClase que esten relacionados con esta clase */
    let alumnosInscritos = alumnoClases.filter(
      (alumnoClase: any) => alumnoClase.claseId === clase.id
    );
    //Se determinan los alumnos inscritos dependiendo de la cantidad de registros que concuerden
    cupo = alumnosInscritos.length + "/" + clase.cupoMax;
  } else {
    cupo = "0/" + clase.cupoMax; //Si no hay registros de plano se declaran los alumnos inscritos como 0
  }

  //Actualizar cupo se ejecuta cuando se desasignan alumnos de esta clase
  const actualizarCupo = () => {
    /*Se obtienen todos los registros AlumnoClase */
    fetch("api/AlumnoClase").then((response) => {
      if (response.ok) {
        return response.json().then((data) => setAlumnoClases(data)); //Los registros se guardan en alumnoClases
      } else {
        toast.error("Error al cargar los registros Alumno-Clase.");
      }
    });

    if (alumnoClases.length > 0) {
      const inscritos = alumnoClases.filter(
        (registro: any) => registro.claseId === clase.id
      );
      cupo = inscritos.length + "/" + clase.cupoMax;
    } else {
      cupo = "0/" + clase.cupoMax;
    }
  };

  /*CONTENIDO DE LA PAGINA 
  Se muestran solo el nombre, dias, hora y el cupo con formato, también la imagen de advertencia 
  en caso de que no tenga docente.
  */
  return (
    <>
      <div className="grid grid-cols-12 font-bold my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg items-center">
        <div className="flex justify-center items-center col-span-1">
          {
            //Si el idDocente es null significa que no tiene docente, por lo que se muestra la imagen de advertencia
            clase.idDocente === null && (
              <Image
                src={warningIcon}
                alt="¡Esta clase no tiene un docente asignado!"
                className="w-8 h-8"
                title="¡Esta clase no tiene un docente asignado!"
              />
            )
          }
        </div>
        <div className="col-span-2">{clase.nombre}</div>
        <div className="col-span-3">
          <span>
            {dias.map((dia) => {
              if (dia !== dias[dias.length - 1]) {
                return dia + ", ";
              }
              return dia;
            })}
          </span>
        </div>
        <div className="col-span-2">{clase.hora}</div>
        <div className="col-span-2">{cupo}</div>
        <ModalClase
          claseArgs={clase}
          actualizarClases={actualizarClases}
          docentes={docentes}
          actualizarCupo={actualizarCupo}
        />
      </div>
    </>
  );
}
