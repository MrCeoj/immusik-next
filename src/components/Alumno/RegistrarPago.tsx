import { DatePicker } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmarPago from "./ConfirmarPago";

function RegistrarPago({
  alumno,
  cambio,
  setCambio,
}: {
  alumno: any;
  cambio: any;
  setCambio: any;
}) {
  //useEffects para registrar los datos referentes al pago
  const [monto, setMonto] = useState("");
  const [concepto, setConcepto] = useState("");
  const [metodo, setMetodo] = useState("");
  const [fecha, setFecha] = useState("");
  const [data, setData] = useState();

  //useEffect para mostrar el modal de confirmación
  const [confirmar, setConfirmar] = useState(false);

  //useEffect para manejar cualquier cambio
  const [cambio2, setCambio2] = useState(false);

  //Función para manejar cambios de fecha
  function handleDateChange(newDate: any) {
    setFecha(newDate);
  }

  //Función para agregarle un 0 a los numeros menores a 10 para armar la fecha en string
  function formatear(x: number) {
    if (x < 10) {
      return "0" + x.toString();
    } else {
      return x.toString();
    }
  }

  //Cuando haya un cambio en la variable cambio2 se reiniciará la información a vacía.
  useEffect(() => {
    setMetodo("");
    setMonto("");
    setConcepto("");
    setFecha("");
  }, [cambio2]);

  // Función para verificar si la fecha es válida
  function esFechaValida(fecha: string) {
    const partes = fecha.split("-");
    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; // El mes en el objeto Date comienza desde 0
    const dia = parseInt(partes[2]);
    const fechaObjeto = new Date(ano, mes, dia);
    return (
      fechaObjeto.getFullYear() === ano &&
      fechaObjeto.getMonth() === mes &&
      fechaObjeto.getDate() === dia
    );
  }

  //Cuando se presiona aceptar se ejecuta este función.
  function handleAceptar() {
    try {
      //Se formatean los inputs de tipo texto.
      let conceptoForm = concepto.trim().toUpperCase();
      let metodoForm = metodo.toUpperCase();

      // Validación de la fecha
      if (!esFechaValida(fecha)) {
        toast.error("Fecha no valida");
        return;
      }

      // Validación para campos vacíos.
      if (!fecha || !monto || !conceptoForm || !metodoForm) {
        toast.error("No deje campos vacíos.");
        return;
      }

      //Validación para monto.
      let montoNum: number = parseFloat(monto);
      if (montoNum < 0) {
        toast.error("Ingrese un monto válido.");
        return;
      }

    
      //Validación de la fecha

      //Se crea la variable fechaConFormato
      let fechaConFormato = "";
      //Se obtiene la fecha actual
      const fechaActual = new Date();
      if (fecha !== "") {
        //Se separa la fecha del pago en día mes y año
        const partes = fecha.split("-");
        const ano = parseInt(partes[0]);
        const mes = parseInt(partes[1]) - 1; //Se le resta 1 al mes porque se usará esta información para crear otro objeto de tipo Date
        const dia = parseInt(partes[2]);
        //Se crea el objeto tipo Date con la infomación de la fecha de pago
        const fechaPago = new Date(ano, mes, dia);

        if (fechaPago > fechaActual) {
          //Si la fecha del pago es después de la fecha actual se marca error.
          toast.error(
            "La fecha de pago no puede ser superior a la fecha actual."
          );
          return;
        } else {
          //Se calcula la diferencia en días de las 2 fechas
          const diferenciaEnDias = Math.floor(
            (fechaActual - fechaPago) / (1000 * 60 * 60 * 24)
          );
          if (diferenciaEnDias > 30) {
            //Si hay una diferencia mayor a 30 días marca error
            toast.error("No puede registrar un pago después de 30 días.");
            return;
          } else {
            //Si no hay error se formatea la fecha en formato dd/mm/aa
            fechaConFormato =
              formatear(dia) +
              "/" +
              formatear(mes + 1) +
              "/" +
              formatear(ano - 2000);
          }
        }
      } else {
        //Si la fecha está vacía se marca error
        toast.error("Ingrese una fecha válida.");
        return;
      }

      //Se encapsula la ifnormación en dataTemp
      const dataTemp = {
        monto: montoNum,
        metodo: metodoForm,
        idAlumno: alumno.id,
        concepto: conceptoForm,
        fecha: fechaConFormato,
      };

      //Se asigna dataTemp a data
      setData(dataTemp);

      setConfirmar(true);
    } catch (e: any) {
      toast.error("Hubo un error al registrar el pago.");
      return;
    }
  }

  return (
    <>
      {confirmar && (
        <ConfirmarPago
          data={data}
          setConfirmar={setConfirmar}
          cambio={cambio}
          setCambio={setCambio}
          cambio2={cambio2}
          setCambio2={setCambio2}
        />
      )}
      <div>
        <h1 className="font-bold text-2xl text-center text-white">
          Registrar pago
        </h1>
        <form className="flex flex-col text-white text-lg">
          <div className="flex flex-col my-2 z-10">
            <label>Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="rounded-lg p-1 text-black"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Monto</label>
            <input
              type="number"
              placeholder="$"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="rounded-lg p-1 text-black"
            ></input>
          </div>
          <div className="flex flex-col my-2">
            <label>Concepto</label>
            <textarea
              placeholder="Concepto"
              value={concepto}
              onChange={(e) => setConcepto(e.target.value)}
              className="rounded-lg p-1 text-black"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Método de pago</label>
            <select
              onChange={(e) => setMetodo(e.target.value)}
              value={metodo}
              className="text-black rounded-lg p-1"
            >
              <option disabled selected value="">
                Método de pago
              </option>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="cheque">Cheque</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            onClick={handleAceptar}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center disabled:bg-disabled transition-all duration-75"
          >
            Registrar
          </button>
        </div>
      </div>
    </>
  );
}

export default RegistrarPago;
