// RegistrarClase
import React, { useEffect, useState } from "react";
import Label from "../form/Label";
import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import ConfirmacionRegistro from "./ConfirmacionRegistro";

function RegistrarDocente({
  setRegistrarDocente, 
  setCambio, 
  cambio
  } : {
    setRegistrarDocente: any,  
    setCambio: any, 
    cambio: any
  }) {


  const [docentes, setDocentes] = useState([]);
  const [docente, setDocente] = useState("");
  const [nombre, setNombre] = useState("");
  const [aPaterno, setaPaterno] = useState("");
  const [aMaterno, setaMaterno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [curp, setCurp] = useState("");
  const [data, setData] = useState<any>();
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
        aPaterno: aPaterno,
        aMaterno: aMaterno,
        telefono: telefono,
        curp: curp,
      };
      setData(datos); //por que me da error aqui
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
        <div className="bg-black p-9 w-9/12 h-5/6 rounded-lg shadow-lg flex flex-col bg-opacity-">
          <form className="flex flex-col gap-2">
            <label className="my-1 font-bold text-white">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="Nombre"
            />
            <label className="my-1 font-bold text-white">Apellido Paterno</label>
            <input
              value={aPaterno}
              onChange={(e) => setaPaterno(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="Apellido Paterno"
            />
            <label className="my-1 font-bold text-white">Apellido Materno</label>
            <input
              value={aMaterno}
              onChange={(e) => setaMaterno(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="Apellido Materno"
            />
            <label className="my-1 font-bold text-white">Contacto</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="Contacto"
            />
            <label className="my-1 font-bold text-white">CURP</label>
            <input
              value={curp}
              onChange={(e) => setCurp(e.target.value.toUpperCase())}
              className="p-1 rounded-md text-black"
              placeholder="CURP"
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
