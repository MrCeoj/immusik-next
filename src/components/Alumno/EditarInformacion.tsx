import { toTitleCase } from "@/lib/utils";
import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmacionEditar from "./ConfirmacionEditar";

function EditarInformacion({ alumno }: { alumno: any }) {
  //Función que llena un arreglo de números del 1 al 31 para la selección de días.
  let dias = [];
  for (let i = 1; i <= 31; i++) {
    dias.push(i + "");
  }

  //Arreglo de meses para la selección de meses
  let mesesStr = "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic";
  let meses = mesesStr.split(",");

  //Se crea un nombreDisplay que será el que se presente en el mensaje de confirmación
  const [nomDisplay, setNom] = useState(
    toTitleCase(alumno.nombre) + " " + toTitleCase(alumno.aPaterno)
  );

  //Se les aplica formato normalizado a los datos del alumno For=Formato
  let nombreFor = toTitleCase(alumno.nombre);
  let aPaternoFor = toTitleCase(alumno.aPaterno);
  let aMaternoFor = toTitleCase(alumno.aMaterno);
  let tutorFor = toTitleCase(alumno.tutor);

  //Se separa la fecha por dia, mes y año Temp=Temporal
  let temp = alumno.fechaNac.split("/");

  //Se consigue la id del alumno
  let id = alumno.id;

  //Se asignan los datos ya con formato a los useState
  const [nombre, setNombre] = useState(nombreFor);
  const [aPaterno, setAPaterno] = useState(aPaternoFor);
  const [aMaterno, setAMaterno] = useState(aMaternoFor);
  const [tutor, setTutor] = useState(tutorFor);

  //Se separa la fecha en dia mes y año
  const [dia, setDia] = useState(temp[0]);
  const [mes, setMes] = useState(temp[1]);
  const [ano, setAno] = useState(temp[2]);

  //La curp no se formatea ya que siempre debe de estar en mayúsculas.
  const [curp, setCurp] = useState(alumno.curp);

  //Contacto no se formatea ya que es numérico
  const [contacto, setContacto] = useState(alumno.contacto);

  //useState para abrir y cerrar el modal para confirmar la edición
  const [editar, setEditar] = useState(false);

  //useState para los datos que se enviarán
  const [data, setData] = useState();

  //Función para saber si tiene Números
  const tieneNum = (str: string) => {
    const regex = /\d/;
    return regex.test(str);
  };

  //Función para saber si tiene letras
  const tieneLetra = (str: string) => {
    const regex = /[a-zA-Z]/;
    return regex.test(str);
  };

  //Se ejecuta cuando se presiona editar
  const handleEditar = () => {
    //Se formatean los datos necesarios con trim y pasandolos a mayusculas
    nombreFor = nombre.trim().toUpperCase();
    aPaternoFor = aPaterno.trim().toUpperCase();
    aMaternoFor = aMaterno.trim().toUpperCase();
    tutorFor = tutor.trim().toUpperCase();
    let mesFor = mes.toUpperCase();
    let contactoFor = contacto.trim();
    let curpFor = curp.trim();

    //Validación para campos vacíos
    if (
      nombreFor === "" ||
      aMaternoFor === "" ||
      aPaternoFor === "" ||
      tutorFor === "" ||
      ano === "" ||
      dia === "" ||
      mesFor === "" ||
      contactoFor === "" ||
      curpFor === ""
    ) {
      toast.error("No deje espacios vacios.");
      return;
    }

    //Validación para saber si el nombre del alumno tiene números
    if (tieneNum(nombreFor) || tieneNum(aPaternoFor) || tieneNum(aMaternoFor)) {
      toast.error("El nombre del alumno no puede contener números.");
      return;
    }

    //Validación para saber si el nombre del tutor tiene números
    if (tieneNum(tutorFor)) {
      toast.error("El nombre del tutor no puede contener números.");
      return;
    }

    //Validación para saber si el teléfono tiene letras
    if (tieneLetra(contactoFor)) {
      toast.error("El número de teléfono no puede contener letras.");
      return;
    }

    //Validación para la fecha
    let fechaValida = true;
    if (ano < 1 || ano % 1 !== 0) {
      fechaValida = false;
    }

    if (mesFor === "FEB") {
      if (ano % 4 === 0) {
        if (dia === "30" || dia === "31") fechaValida = false;
      } else {
        if (dia === "29" || dia === "30" || dia === "31") fechaValida = false;
      }
    } else if (
      mesFor === "ABR" ||
      mesFor === "JUN" ||
      mesFor === "SEP" ||
      mesFor === "NOV"
    ) {
      if (dia === "31") fechaValida = false;
    }

    if (!fechaValida) {
      toast.error("Ingrese una fecha válida.");
      return;
    }

    //Validación para CURP
    if (curpFor.length !== 18) {
      toast.error("Ingrese una CURP con formato correcto.");
      return;
    }

    //Se pasa la fecha de nacimiento a Formato STRING
    let fds = dia + "/" + mesFor + "/" + ano;

    //Se junta toda la información en dataTemp
    let dataTemp = {
      id: id,
      nombre: nombreFor,
      aPaterno: aPaternoFor,
      aMaterno: aMaternoFor,
      tutor: tutorFor,
      contacto: contactoFor,
      fechaNac: fds,
      curp: curpFor,
    };

    //se asigna a data los datos
    setData(dataTemp);

    //Se abre el modal de confirmación de editar
    setEditar(true);
  };

  return (
    <>
      {editar && ( //Se envía la data, el setEditar y el nomDisplay al modal para confirmar edición
        <ConfirmacionEditar
          data={data}
          setEditar={setEditar}
          nomDisplay={nomDisplay}
        />
      )}
      <form className="flex flex-col">
        <div className="grid grid-cols-3">
          <div>
            <label>Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
            ></input>
          </div>
          <div>
            <label>Apellido Paterno</label>
            <input
              value={aPaterno}
              onChange={(e) => setAPaterno(e.target.value)}
              placeholder="Apellido Paterno"
            ></input>
          </div>
          <div>
            <label>Apellido Materno</label>
            <input
              value={aMaterno}
              onChange={(e) => setAMaterno(e.target.value)}
              placeholder="Apellido Materno"
            ></input>
          </div>
        </div>
        <label>Tutor</label>
        <input
          placeholder="Tutor"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />
        <label>Teléfono</label>
        <input
          placeholder="Teléfono"
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
        />
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <label>Día</label>
            <select onChange={(e) => setDia(e.target.value)}>
              <option disabled value="">
                Día
              </option>
              {dias.map((d) =>
                d === dia ? (
                  <option selected value={d}>
                    {d}
                  </option>
                ) : (
                  <option value={d}>{d}</option>
                )
              )}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Mes</label>
            <select onChange={(e) => setMes(e.target.value)}>
              <option disabled value="">
                Mes
              </option>
              {meses.map((m) =>
                m.toUpperCase() === mes ? (
                  <option selected value={m}>
                    {m}
                  </option>
                ) : (
                  <option value={m}>{m}</option>
                )
              )}
            </select>
          </div>
          <div className="flex flex-col">
            <label>Año</label>
            <input
              type="number"
              placeholder="Año"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            ></input>
          </div>
        </div>
        <label>CURP</label>
        <input
          placeholder="CURP"
          value={curp}
          onChange={(e) => setCurp(e.target.value.toUpperCase())}
        />
      </form>
      <button
        onClick={handleEditar}
        className="bg-pink-500 text-white hover:bg-pink-600 py-1 px-5 rounded-md"
      >
        Editar
      </button>
    </>
  );
}

export default EditarInformacion;
