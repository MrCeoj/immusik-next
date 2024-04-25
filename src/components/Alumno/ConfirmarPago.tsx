import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmarPago({
  data,
  setConfirmar,
  cambio,
  setCambio,
  cambio2,
  setCambio2,
}: {
  data: any;
  setConfirmar: any;
  cambio: any;
  setCambio: any;
  cambio2: any;
  setCambio2: any;
}) {
  function handleCancelar() {
    setConfirmar(false);
  }

  function handleAceptar() {
    fetch("api/pagos/pagos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if ((data.message = "Se registó el pago correctamente.")) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        });
      } else {
        toast.error("No se pudo registrar el pago.");
      }
    });
    setCambio(!cambio);
    setConfirmar(false);
    setCambio2(!cambio2);
  }
  return (
    <div className="bg-black bg-opacity-50 top-0 left-0 absolute z-100 h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-5">
        <h1 className="font-bold">
          ¿Está seguro que quiere registrar el pago?
        </h1>
        <div>
          <p>
            <span className="font-bold">Fecha: </span>
            {data.fecha}
          </p>
          <p>
            <span className="font-bold">Monto: </span>${data.monto}
          </p>
          <p>
            <span className="font-bold">Concepto: </span>
            {data.concepto}
          </p>
          <p>
            <span className="font-bold">Método de pago: </span>
            {data.metodo}
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={handleCancelar}
            className="bg-zinc-400 py-1 px-5 rounded-md text-white hover:bg-zinc-500 active:bg-zinc-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleAceptar}
            className="bg-pink-500 py-1 px-5 rounded-md text-white hover:bg-pink-600 active:bg-pink-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarPago;
