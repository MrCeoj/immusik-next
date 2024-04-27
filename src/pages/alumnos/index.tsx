import Alumnos from "@/components/Alumno/Alumno";
import GestionarAlumno from "@/components/Alumno/GestionarAlumno";
import RegistrarAlumno from "@/components/Alumno/RegistrarAlumno";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Alumno } from "@prisma/client";

function Index() {
  const [registrar, setRegistrar] = useState(false);
  const [alumnos, setAlumnos] = useState([]);

  const handleRegistrar = () => {
    setRegistrar(true);
  };

  useEffect(() => {
    fetch("api/alumno/alumno").then(async (response) => {
      if (response.ok) {
        return response.json().then((data) => {
          setAlumnos(data);
        });
      } else {
        alert("error con el fetch");
        toast.error("Hubo un error al conseguir los alumnos.");
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />
      {registrar && <RegistrarAlumno setRegistrar={setRegistrar} />}
      <button
        onClick={handleRegistrar}
        className="m-5 bg-pink-500 py-1 px-3 rounded-md shadow-md text-white hover:bg-pink-600 active:bg-pink-700"
      >
        Registrar
      </button>
      {alumnos.map((alumno: Alumno) => (
        <Alumnos key={alumno.id} alumno={alumno} />
      ))}
    </>
  );
}

export default Index;
