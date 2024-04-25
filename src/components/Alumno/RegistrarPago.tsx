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
  const [monto, setMonto] = useState("");
  const [concepto, setConcepto] = useState("");
  const [metodo, setMetodo] = useState("");
  const [fecha, setFecha] = useState("");
  const [confirmar, setConfirmar] = useState(false);
  const [data, setData] = useState();
  const [cambio2, setCambio2] = useState(false);

  function handleDateChange(newDate: any) {
    setFecha(newDate);
  }

  useEffect(() => {
    setMetodo("");
    setMonto("");
    setConcepto("");
    setFecha("");
  }, [cambio2]);

  function handleAceptar() {
    try {
      let conceptoForm = concepto.trim().toUpperCase();
      let metodoForm = metodo.toUpperCase();

      if (
        fecha === null ||
        fecha === "" ||
        monto === "" ||
        conceptoForm === "" ||
        metodoForm === ""
      ) {
        toast.error("No deje campos vacios.");
        return;
      }

      const separada = fecha.toString().split("-");
      const ano: number = parseInt(separada[0]);
      const mes: number = parseInt(separada[1]);
      const dia: number = parseInt(separada[2]);

      const fechaActual = new Date();
      const diaActual = fechaActual.getDate();
      const mesActual = fechaActual.getMonth() + 1;
      const anoActual = fechaActual.getFullYear();

      const fecha1 = new Date(ano + "-" + mes + "-" + dia);
      const fecha2 = new Date(anoActual + "-" + mesActual + "-" + diaActual);

      if (fecha1 > fecha2) {
        toast.error("La fecha de pago no puede superar la fecha actual.");
        return;
      } else {
        const diferenciaEnDias = Math.abs(
          (fecha2 - fecha1) / (1000 * 60 * 60 * 24)
        );

        if (diferenciaEnDias > 30) {
          toast.error("No se puede registrar un pago después de 30 dias.");
          return;
        }
      }

      let diaFor = dia.toString();
      let mesFor = mes.toString();
      let anotemp = ano - 2000;
      let anoFor = anotemp.toString();

      if (dia < 10) {
        diaFor = "0" + dia;
      }
      if (mes < 10) {
        mesFor = "0" + mes;
      }
      if (ano < 10) {
        anoFor = "0" + ano;
      }
      const fechaConFormato = diaFor + "/" + mesFor + "/" + anoFor;

      let montoNum: number = parseFloat(monto);
      if (montoNum < 0) {
        toast.error("Ingrese un monto válido.");
        return;
      }

      const dataTemp = {
        monto: montoNum,
        metodo: metodoForm,
        idAlumno: alumno.id,
        concepto: conceptoForm,
        fecha: fechaConFormato,
      };

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
        <h1 className="font-bold">Registrar pago</h1>
        <form className="flex flex-col">
          <label>Fecha</label>
          <DatePicker onChange={handleDateChange} />
          <label>Monto</label>
          <input
            type="number"
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          ></input>
          <label>Concepto</label>
          <textarea
            placeholder="Concepto"
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
          />
          <label>Método de pago</label>
          <select onChange={(e) => setMetodo(e.target.value)}>
            <option disabled selected value="">
              Método de pago
            </option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="cheque">Cheque</option>
            <option value="otro">Otro</option>
          </select>
        </form>
        <button onClick={handleAceptar}>Aceptar</button>
      </div>
    </>
  );
}

export default RegistrarPago;
