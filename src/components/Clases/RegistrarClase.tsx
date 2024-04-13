import React, { useEffect, useState } from "react";
import { Docente, Sucursal } from "@/entities/edge";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegistrarClase({
  setCambio,
  cambio,
}: {
  setCambio: React.Dispatch<React.SetStateAction<boolean>>;
  cambio: boolean;
}) {
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [cupo, setCupo] = useState("");
  const [docente, setDocente] = useState("");
  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [lunes, setLunes] = useState(false);
  const [martes, setMartes] = useState(false);
  const [miercoles, setMiercoles] = useState(false);
  const [jueves, setJueves] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    obtenerDocentes();
    obtenerSucursales();
  }, []);

  useEffect(() => {
    if (modalOpen) {
      setNombre("");
      setHorario("");
      setSucursal("");
      setCupo("");
      setDocente("");
      setLunes(false);
      setMartes(false);
      setMiercoles(false);
      setJueves(false);
      setSabado(false);
    }
  }, [modalOpen]);

  const obtenerDocentes = async () => {
    const response = await fetch("api/docente/docenteNoVetado");
    const data = await response.json();
    setDocentes(data);
  };

  const obtenerSucursales = async () => {
    const response = await fetch("api/Sucursal");
    const data = await response.json();
    setSucursales(data);
  };

  const handleDia = (dia: string) => {
    if (dia === "l") {
      if (lunes) {
        setLunes(false);
      } else {
        setLunes(true);
      }
    }
    if (dia === "ma") {
      if (martes) {
        setMartes(false);
      } else {
        setMartes(true);
      }
    }
    if (dia === "mi") {
      if (miercoles) {
        setMiercoles(false);
      } else {
        setMiercoles(true);
      }
    }
    if (dia === "j") {
      if (jueves) {
        setJueves(false);
      } else {
        setJueves(true);
      }
    }
    if (dia === "s") {
      if (sabado) {
        setSabado(false);
      } else {
        setSabado(true);
      }
    }
  };

  const handleCancelar = () => {
    setModalOpen(false);
  };

  const handleAceptar = () => {
    const dias = [""];
    if (lunes) dias.push("LUNES");
    if (martes) dias.push("MARTES");
    if (miercoles) dias.push("MIÉRCOLES");
    if (jueves) dias.push("JUEVES");
    if (sabado) dias.push("SÁBADO");

    const temp: string = dias.toString();
    const diasDisplay: string = temp.substring(1);

    if (
      nombre === "" ||
      diasDisplay === "" ||
      horario === "" ||
      sucursal === "" ||
      cupo === null ||
      cupo === ""
    ) {
      toast.error("Llene todos los campos.");
      return;
    }

    const cupoNum = Number(cupo);

    if (cupoNum < 1 || cupoNum > 10 || cupoNum % 1 !== 0) {
      toast.error("El cupo debe ser un número entero entre 1 y 10.");
      return;
    }

    fetch("api/clase/clases", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        diasDisplay,
        horario,
        sucursal,
        cupo,
        docente,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se creó la clase.") {
            toast.success("Se creó la clase.", {
              autoClose: 2000,
              onClose: () => {
                setModalOpen(false);
              },
            });
            if (cambio) {
              setCambio(false);
            } else {
              setCambio(true);
            }
          } else {
            toast.error("Error al registrar la nueva clase.", {
              autoClose: 2000,
              onClose: () => {
                setModalOpen(false);
              },
            });
          }
        });
      } else {
        toast.error("Error al registrar la nueva clase.");
      }
    });
  };

  const handleRegistrar = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button
        className="bg-pink-focus px-4 h-full text-md rounded-md font-semibold hover:shadow-md hover:shadow-pink-accent hover:-translate-y-1 transition-all duration-25 ease-out"
        onClick={handleRegistrar}
      >
        <span>Registrar clase</span>
      </button>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
        className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-5xl min-h-min rounded-md text-white"
      >
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">Alta de clase</h1>
        </div>
        <form className="flex flex-col p-10">
          <label className="my-1 font-bold">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value.toUpperCase())}
            className="p-1 rounded-md text-black"
            placeholder="Nombre"
          />
          <label className="my-1 font-bold">Días impartidos</label>
          <div className="w-full flex justify-between">
            <label className="flex justify-center">
              Lunes
              <input
                onChange={() => handleDia("l")}
                className="ml-2"
                type="checkbox"
              ></input>
            </label>
            <label className="flex justify-center">
              Martes
              <input
                onChange={() => handleDia("ma")}
                className="ml-2"
                type="checkbox"
              ></input>
            </label>
            <label className="flex justify-center">
              Miércoles
              <input
                onChange={() => handleDia("mi")}
                className="ml-2"
                type="checkbox"
              ></input>
            </label>
            <label className="flex justify-center">
              Jueves
              <input
                onChange={() => handleDia("j")}
                className="ml-2"
                type="checkbox"
              ></input>
            </label>
            <label className="flex justify-center">
              Sábado
              <input
                onChange={() => handleDia("s")}
                className="ml-2"
                type="checkbox"
              ></input>
            </label>
          </div>
          <label className="my-1 font-bold">Horario de clase</label>
          <select
            onChange={(e) => setHorario(e.target.value)}
            className="p-1 rounded-md text-black"
          >
            <option value="">Seleccione un horario</option>
            <option value="15:00 - 16:00">15:00 - 16:00</option>
            <option value="16:00 - 17:00">16:00 - 17:00</option>
            <option value="17:00 - 18:00">17:00 - 18:00</option>
            <option value="18:00 - 19:00">18:00 - 19:00</option>
            <option value="19:00 - 20:00">19:00 - 20:00</option>
          </select>
          <label className="my-1 font-bold">Cupo máximo</label>
          <input
            className=" p-1 rounded-md text-black"
            type="number"
            value={cupo}
            placeholder="1 a 10"
            onChange={(e) => setCupo(e.target.value)}
          />
          <label className="my-1 font-bold">Docente</label>
          <select
            className=" p-1 rounded-md text-black"
            onChange={(e) => setDocente(e.target.value)}
            disabled={docentes.length === 0}
          >
            <option value="">Seleccione un docente</option>
            {docentes &&
              docentes.map((docente) => (
                <option key={docente.id} value={docente.id}>
                  {docente.nombre} {docente.aPaterno}
                </option>
              ))}
          </select>
          <label className="my-1 font-bold">Sucursal (Temporal)</label>
          <select
            onChange={(e) => setSucursal(e.target.value)}
            className="p-1 rounded-md text-black"
          >
            <option value="">Seleccione una sucursal</option>
            {sucursales.map((sucursal) => (
              <option key={sucursal.id} value={sucursal.id}>
                {sucursal.nombre}
              </option>
            ))}
          </select>
        </form>
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
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
      </Modal>
    </>
  );
}

export default RegistrarClase;
