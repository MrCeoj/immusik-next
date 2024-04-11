import React, { useEffect, useState } from "react";
import ConfirmacionRegistrar from "@/components/Clases/ConfirmacionRegistrar";
import { Docente, Sucursal } from "@/entities/edge"


function RegistrarClase({
  setRegistrarClase,
  setCambio,
  cambio,
}: {
  setRegistrarClase: any;
  setCambio: any;
  cambio: any;
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
  const [confirmacionRegistrar, setConfirmacionRegistrar] = useState(false);
  const [data, setData] = useState({
    nombre: "",
    diasDisplay: "",
    horario: "",
    sucursal: "",
    cupo: "",
    docente: "",
  });
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);

  useEffect(() => {
    obtenerDocentes();
    obtenerSucursales();
  }, []);

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
    setRegistrarClase(false);
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
      alert("No deje campos vacíos");
      return;
    }

    const cupoNum = Number(cupo);

    if (cupoNum < 1 || cupoNum > 10 || cupoNum % 1 !== 0) {
      alert("Ingrese un cupo válido.");
      return;
    }

    const datos = {
      nombre: nombre,
      diasDisplay: diasDisplay,
      horario: horario,
      sucursal: sucursal,
      cupo: cupo,
      docente: docente,
    };
    setData(datos);
    setConfirmacionRegistrar(true);
  };

  return (
    <>
      {confirmacionRegistrar && (
        <ConfirmacionRegistrar
          setConfirmacionRegistrar={setConfirmacionRegistrar}
          data={data}
          cambio={cambio}
          setCambio={setCambio}
          setRegistrarClase={setRegistrarClase}
        />
      )}
      <div className="absolute z-20 top-0 left-0 bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center">
        <div className="bg-black text-white p-9 w-9/12 h-5/6 rounded-lg shadow-lg flex flex-col bg-opacity-90">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-3xl">Alta de clase</h1>
          </div>
          <form className="flex flex-col">
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
              {docentes && docentes.map((docente) => (
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
        </div>
      </div>
    </>
  );
}

export default RegistrarClase;
