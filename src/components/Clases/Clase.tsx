import warningIcon from "@/img/warningIcon.png";
import Image from "next/image";
import Modal from "react-modal";
import { useState } from "react";
import { useSucursal } from "@/hooks/sucursal";
import type { Alumno, Clase, Docente } from "@prisma/client";
import toTitleCase from "@/lib/utils";

export default function Clase({ clase }: { clase: Clase }) {
  const handleEliminar = () => {
    let id = clase.id;
    alert("vas a eliminar");
    fetch("api/clase/clases", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          alert(data.message);
        });
      } else {
        alert("Hubo un problema al eliminar la clase.");
      }
    });
  };

  //useState para guardar los registros alumnoClases
  const [alumnoClases, setAlumnoClases] = useState([]);
  // useState para cambiar la visibilidad del modal
  const [modalOpen, setModalOpen] = useState(false);
  // useState para guardar los alumnos inscritos a la clase
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [docente, setDocente] = useState<{ data: Docente } | null>(null);
  // useState para guardar un mensaje de error ocurrido durante la obtención de los alumnos
  const [errorAlumnos, setErrorAlumnos] = useState(null);
  // se obtiene la sucursal de la clase
  const [sucursal] = useSucursal(clase.idSucursal.toString());
  // useState para mostrar confirmación para eliminar
  const [eliminar, setEliminar] = useState(true);

  /*Se obtienen todos los registros AlumnoClase */
  fetch("api/AlumnoClase").then((response) => {
    if (response.ok) {
      return response.json().then((data) => setAlumnoClases(data)); //Los registros se guardan en alumnoClases
    } else {
      alert("Error al encontrar los registros AlumnoClase");
    }
  });

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

  //Función que se ejecuta al hacer click en el botón "Ver más"
  // Muestra un modal con la información de la clase y los alumnos inscritos
  const handleVerMas = async () => {
    // Si no se han obtenido los alumnos se hace una petición a la API para obtenerlos
    if (alumnos.length === 0) {
      const res = await fetch(`/api/clase/${clase.id}/obtenerAlumnos`);
      const data = await res.json();

      data.error ? setErrorAlumnos(data.error) : setAlumnos(data);
    }

    // Si no se ha obtenido el docente se hace una petición a la API para obtenerlo
    if (!docente) {
      const res = await fetch(`/api/docente/${clase.idDocente}`);
      const data = await res.json();
      setDocente(data);
    }

    setModalOpen(true);
  };

  /*CONTENIDO DE LA PAGINA 
  Se muestran solo el nombre, dias, hora y el cupo con formato, también la imagen de advertencia 
  en caso de que no tenga docente.
  */
  return (
    <>
      <div className="grid grid-cols-12 my-4 items-center font-inter font-bold bg-gray-contrast py-3 rounded-lg">
        <div className="flex justify-center items-center col-span-1">
          {
            //Si el idDocente es null significa que no tiene docente, por lo que se muestra la imagen de advertencia
            clase.idDocente === null && (
              <Image
                src={warningIcon}
                alt="¡Esta clase no tiene un profesor asignado!"
                className="w-8 h-8"
                title="¡Esta clase no tiene un profesor asignado!"
              />
            )
          }
        </div>
        <div className="col-span-2">{clase.nombre}</div>
        <div className="col-span-3">{clase.dias}</div>
        <div className="col-span-2">{clase.hora}</div>
        <div className="col-span-2">{cupo}</div>
        <div className="col-span-1">
          <button className="underline" onClick={handleVerMas}>Ver detalles</button>
        </div>
        <Modal
          isOpen={modalOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalOpen(false)}
          overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50"
          className="relative bg-white p-4 w-full max-w-xl min-h-min rounded"
        >
          <h1 className="font-bold text-3xl mb-3 text-center">
            Detalles de la clase
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <p>
                <span className="font-bold">Sucursal:</span> {sucursal?.nombre}
              </p>
              <p>
                <span className="font-bold">Días:</span> {clase?.dias}
              </p>
              <p>
                <span className="font-bold">Horas:</span> {clase?.hora}
              </p>
              <p>
                <span className="font-bold">Cupo máximo:</span> {clase?.cupoMax}
              </p>
              <p>
                {docente?.data.nombre ? (
                  <>
                    <span className="font-bold">Docente:</span>{" "}
                    {docente?.data.nombre} {docente?.data.aPaterno}{" "}
                    {docente?.data.aMaterno}
                  </>
                ) : (
                  "No hay docente asignado"
                )}
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center">
                Guardar cambios
              </button>
            </div>
            <div className="flex flex-col">
              {errorAlumnos ? (
                <p className="mt-3">{errorAlumnos}</p>
              ) : (
                <table className="w-full">
                  <caption className="font-bold text-xl mb-3">
                    Alumnos inscritos
                  </caption>
                  <thead>
                    <tr className="text-left">
                      <th>Nombre</th>
                      <th>Ap. Paterno</th>
                      <th>Ap. Materno</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumnos.map((alumno, index) => (
                      <tr key={index}>
                        <td>{toTitleCase(alumno.nombre)}</td>
                        <td>{toTitleCase(alumno.aPaterno)}</td>
                        <td>{toTitleCase(alumno.aMaterno)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <button
                onClick={handleEliminar}
                className="bg-red-500 py-2 px-3 mt-3 rounded-md text-white hover:bg-red-700 justify-self-end self-center"
              >
                Eliminar clase
              </button>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 bg-rose-600 text-white font-bold w-8 h-8 rounded"
          >
            ×
          </button>
        </Modal>
      </div>
    </>
  );
}
