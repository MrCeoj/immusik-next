import RegistrarAlumno from "@/components/RegistrarAlumno";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

function alumnos() {
  const [registrar, setRegistrar] = useState(false);

  const handleRegistrar = () => {
    setRegistrar(true);
  };

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
    </>
  );
}

export default alumnos;
