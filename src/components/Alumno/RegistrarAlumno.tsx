import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClases } from "@/hooks/clases/useClases";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

function RegistrarAlumno({
  setRegistrar,
  fetchAlumnos,
  setCambio,
  cambio
}: {
  setRegistrar: any;
  setCambio: any;
  cambio: any;
  fetchAlumnos: () => void;
}) {
  //useState para capturar la información del alumno
  const [nombre, setNombre] = useState("");
  const [aPaterno, setAPaterno] = useState("");
  const [aMaterno, setAMaterno] = useState("");
  const [mes, setMes] = useState("");
  const [dia, setDia] = useState("");
  const [tutor, setTutor] = useState("");
  const [contacto, setContacto] = useState("");
  const [ano, setAno] = useState("");
  const [curp, setCurp] = useState("");
  const [clase, setClase] = useState("");
  const [data, setData] = useState();
  const { inscribirAlumno } = useClases((state) => state);

  //useState para almacenar las clases
  const [clases, setClases] = useState([]);

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const { inscribirPorCurp } = useClases();

  const registrarConfirmar = (onClose: any) => {
    fetch("api/alumno/alumno", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data, //se envian los datos de el alumno
      }),
    })
      .then((response) => {
        if (response.ok) {
          inscribirPorCurp(data?.curp, parseInt(data?.clase));
          return response.json().then((data) => {
            if (data.message === "Alumno registrado correctamente.") {
              toast.success(data.message);
              onClose();
              fetchAlumnos();
              setRegistrar(false);
            } else {
              toast.error(data.message);
              onClose();
            }
          });
        } else {
          toast.error("Error al registrar al alumno.");
          onClose();
        }
      })
      .catch((e) => {
        toast.error(
          "Hubo un error al realizar la operación, revise su conexión."
        );
      });
  };

  //useEffect para conseguir las clases con cupo disponible cada que se ejecute el componente
  useEffect(() => {
    fetch("api/clase/clasesConCupo")
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            setClases(data);
            setCambio(!cambio);
          });
        } else {
          toast.error("Error al encontrar las clases con cupo disponible.");
        }
      })
      .catch((e) => {
        toast.error("Hubo un problema, revise su conexión.");
        handleCancelar();
      });
  }, []);

  //Cierra este modal
  const handleCancelar = () => {
    setRegistrar(false);
  };

  //Crea un arreglo de dias del 1 al 31
  const dias = [];
  for (let i = 1; i <= 31; i++) {
    dias.push(i + "");
  }

  //Función para detectar si un string tiene letras
  function tieneLetra(str: string) {
    return /[a-zA-Z]/.test(str);
  }

  //Función para detectar si un string tiene números
  function tieneNumeros(str: string) {
    return /\d/.test(str);
  }

  //Función de aceptar
  const handleAceptar = () => {
    //Se aplica trim a todos los datos
    const nombreTrim = nombre.trim().toUpperCase();
    const aPaternoTrim = aPaterno.trim().toUpperCase();
    const aMaternoTrim = aMaterno.trim().toUpperCase();
    const tutorTrim = tutor.trim().toUpperCase();
    const contactoTrim = contacto.trim();
    const curpTrim = curp.trim().toUpperCase();

    //Validación para campos vacios
    if (
      nombreTrim === "" ||
      aPaternoTrim === "" ||
      aMaternoTrim === "" ||
      tutorTrim === "" ||
      contactoTrim === "" ||
      dia === "" ||
      mes === "" ||
      ano === "" ||
      curpTrim === ""
    ) {
      toast.error("¡No deje campos vacíos!");
      return;
    }

    //Validación para saber si el nombre tiene números
    if (
      tieneNumeros(nombreTrim) ||
      tieneNumeros(aPaternoTrim) ||
      tieneNumeros(aMaternoTrim)
    ) {
      toast.error("El nombre del alumno no puede contener números.");
      return;
    }

    //Validación para saber si el tutor tiene numeros
    if (tieneNumeros(tutorTrim)) {
      toast.error("El nombre del tutor no puede contener números.");
      return;
    }

    //Validación para saber si el contacto tiene letras
    if (tieneLetra(contactoTrim)) {
      toast.error("¡El contacto no puede contener letras!");
      return;
    }

    //Validación para formato de año
    if (ano.includes(".")) {
      toast.error("Ingrese una fecha válida.");
      return;
    }

    const anoNum: number = parseInt(ano);
    if (anoNum < 0 || anoNum % 1 !== 0) {
      toast.error("Ingrese una fecha válida.");
      return;
    }

    //Validación para fecha existente
    let fechaValida = true;
    if (mes === "feb") {
      if (anoNum % 4 == 0) {
        if (dia === "30" || dia === "31") {
          fechaValida = false;
        }
      } else {
        if (dia === "29" || dia === "30" || dia === "31") {
          fechaValida = false;
        }
      }
    } else if (
      mes === "abr" ||
      mes === "jun" ||
      mes === "sep" ||
      mes === "nov"
    ) {
      if (dia === "31") {
        fechaValida = false;
      }
    }

    if (!fechaValida) {
      toast.error("Ingrese una fecha válida.");
      return;
    }

    //validación para formato de curp
    if (curpTrim.length !== 18) {
      toast.error("Ingrese una CURP con formato válido.");
      return;
    }

    //formateo de fecha de nacimiento y conjunto de datos del alumno
    let fechaNac = dia + "/" + mes + "/" + ano;
    fechaNac = fechaNac.toUpperCase();
    const dataTemp = {
      nombre: nombreTrim,
      aPaterno: aPaternoTrim,
      aMaterno: aMaternoTrim,
      tutor: tutorTrim,
      contacto: contactoTrim,
      fechaNac: fechaNac,
      curp: curpTrim,
      clase: clase,
    };
    setData(dataTemp);

    onOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                ¿Seguro que quiere registrar a {data?.nombre}?
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <p>
                    <span>Nombre: </span>
                    {data.nombre} {data.aPaterno} {data.aMaterno}
                  </p>
                  <p>
                    <span>Teléfono: </span>
                    {data.contacto}
                  </p>
                  <p>
                    <span>CURP: </span>
                    {data.curp}
                  </p>
                  <p>
                    <span>Fecha de Nacimiento: </span>
                    {data.fechaNac}
                  </p>
                  <p>
                    <span>Tutor: </span>
                    {data.tutor}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex flex-row gap-1">
                  <button
                    onClick={onClose}
                    className="bg-zinc-500 text-white py-1 px-3 rounded-md hover:bg-zinc-600"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => registrarConfirmar(onClose)}
                    className="bg-primary py-1 px-3 text-white rounded-md hover:bg-pink-800"
                  >
                    Aceptar
                  </button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="absolute z-10 top-0 left-0 bg-black bg-opacity-50 h-screen w-screen flex items-center justify-center">
        <div className="bg-secciones opacity-95 text-white rounded-lg shadow-lg py-5 px-12 flex flex-col items-center w-9/12 relative">
        <button
          onClick={handleCancelar}
          className="absolute top-2 right-2 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
          <h1 className="font-bold text-3xl mb-5">Registrar Alumno</h1>
          <form className="flex flex-col w-full">
            <div className="grid grid-cols-3 mb-2 gap-5">
              <div className="flex flex-col">
                <label className="text-lg mr-2 font-bold">Nombre</label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="text-black text-lg p-1 rounded-md"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg mr-2 font-bold">
                  Apellido Paterno
                </label>
                <input
                  value={aPaterno}
                  onChange={(e) => setAPaterno(e.target.value)}
                  className="text-black text-lg p-1 rounded-md"
                  type="text"
                  placeholder="Apellido Paterno"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-lg mr-2 font-bold">
                  Apellido Materno
                </label>
                <input
                  value={aMaterno}
                  onChange={(e) => setAMaterno(e.target.value)}
                  className="text-black text-lg p-1 rounded-md"
                  type="text"
                  placeholder="Apellido Materno"
                />
              </div>
            </div>
            <label className="text-lg mr-2 font-bold">Tutor</label>
            <input
              value={tutor}
              onChange={(e) => setTutor(e.target.value)}
              className="text-black text-lg p-1 rounded-md mb-3"
              type="text"
              placeholder="Tutor"
            />
            <label className="text-lg mr-2 font-bold">Teléfono</label>
            <input
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              className="text-black text-lg p-1 rounded-md mb-3"
              type="number"
              onKeyDown={(e) => {
                if (e.key === "e" || e.key === "+" || e.key === "-" || e.key === "." || e.key === "," || e.key === "E") {
                  e.preventDefault();
                }
              }}
              placeholder="Contacto"
            />

            <div className="flex gap-5">
              <div className="w-1/2">
                <label className="text-lg mr-2 font-bold">
                  Fecha de Nacimiento
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <select
                    onChange={(e) => setDia(e.target.value)}
                    className="text-black text-lg p-1 rounded-md"
                  >
                    <option disabled selected value="">
                      Día
                    </option>
                    {dias.map((dia) => (
                      <option key={dia} value={dia}>
                        {dia}
                      </option>
                    ))}
                  </select>
                  <select
                    onChange={(e) => setMes(e.target.value)}
                    className="text-black text-lg p-1 rounded-md"
                  >
                    <option disabled selected value="">
                      Mes
                    </option>
                    <option value="ene">ENE</option>
                    <option value="feb">FEB</option>
                    <option value="mar">MAR</option>
                    <option value="abr">ABR</option>
                    <option value="may">MAY</option>
                    <option value="jun">JUN</option>
                    <option value="jul">JUL</option>
                    <option value="ago">AGO</option>
                    <option value="sep">SEP</option>
                    <option value="oct">OCT</option>
                    <option value="nov">NOV</option>
                    <option value="dic">DIC</option>
                  </select>

                  <input
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    type="number"
                    placeholder="Año"
                    className="text-black text-lg p-1 rounded-md"
                  ></input>
                </div>
              </div>

              <div className="w-full">
                <label className="text-lg mr-2 font-bold">
                  CURP del Alumno
                </label>
                <input
                  value={curp}
                  onChange={(e) => setCurp(e.target.value.toUpperCase())}
                  className="text-black text-lg p-1 rounded-md mb-3 w-full"
                  type="text"
                  placeholder="CURP"
                />
              </div>
            </div>
            <label className="text-lg mr-2 font-bold">
              Inscribir a clase (opcional)
            </label>
            <select
              onChange={(e) => setClase(e.target.value)}
              className="text-black text-lg p-1 rounded-md"
              disabled={clases.length === 0}
            >
              <option disabled selected value="">
                Seleccione una clase
              </option>
              {clases.map((clase: any) => (
                <option key={clase.id} value={clase.id}>
                  {clase.nombre}
                </option>
              ))}
            </select>
          </form>
          <div className="flex justify-center items-center mt-3 gap-x-3">
            <button
              onClick={handleCancelar}
              className="mr-1 text-lg bg-zinc-500 py-1 px-5 rounded-md text-white hover:bg-zinc-600 active:bg-zinc-700"
            >
              Cancelar
            </button>
            <button
              onClick={handleAceptar}
              className="ml-1 text-lg bg-pink-600 py-1 px-5 rounded-md text-white hover:bg-pink-700 active:bg-pink-800"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrarAlumno;
