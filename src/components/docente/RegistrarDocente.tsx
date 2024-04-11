// RegistrarClase
import React, { useEffect, useState } from "react";
import Label from "../form/Label";
import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import ConfirmacionRegistro from "./ConfirmacionRegistro";

function RegistrarDocente({setRegistrarDocente, sucursales, setCambio, cambio}) {
    const [docentes, setDocentes] = useState([]);
    const [docente, setDocente] = useState("");
    const [nombre, setNombre] = useState("");
    const [data, setData] = useState();
    const [confirmacionRegistrar, setConfirmacionRegistrar] = useState(false);

  useEffect(() => {
    fetch("api/docente/fetchAll").then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            setDocentes(data);
          });
        } else {
          alert("Hubo un error al encontrar los docentes.");
        }
      })
  }, []);

  const handleCancelar = () => {
    setRegistrarDocente(false);
  };

  const handleAceptar = () => {
    let datos = {
        nombre: nombre,
      };
      setData(datos);
      setConfirmacionRegistrar(true);
  };

  return (
    <>
      {confirmacionRegistrar && (
        <ConfirmacionRegistro
          setConfirmacionRegistrar={setConfirmacionRegistrar}
          data={data}
          cambio={cambio}
          setCambio={setCambio}
          setRegistrarDocente={setRegistrarDocente}
        />
      )}
      <div className="absolute z-20 top-0 left-0 bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center">
        <div className="bg-black text-white p-9 w-9/12 h-5/6 rounded-lg shadow-lg flex flex-col bg-opacity-90">
          <form className="flex flex-col">
            <label className="my-1 font-bold">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="Nombre"
            />
          </form>
          {/* Botones de cancelar y aceptar */}
          <div className="flex justify-center items-center mt-3">
            <button
              className="bg-gray-500 py-1 px-3 rounded-md text-lg shadow-md mr-2 hover:bg-gray-600"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button
              onClick={handleAceptar}
              className="bg-pink-500 py-1 px-3 rounded-md text-lg shadow-md ml-2 hover:bg-pink-600"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrarDocente;
