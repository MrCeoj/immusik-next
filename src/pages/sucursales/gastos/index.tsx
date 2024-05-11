import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sucursalContext } from "@/hooks/sucursalContext";
import { useGastos } from "@/hooks/gastos/useGastos";
import RegistrarGasto from "@/components/gastos/RegistrarGasto";
import { ToastContainer } from "react-toastify";

const Index = () => {
  const router = useRouter();
  const context = sucursalContext((state: any) => state.context);
  const { gastos, fetchGastos } = useGastos();
  const [cargando, setCargando] = useState(true);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context, router]);

  useEffect(() => {
    obtenerGastos()
  }, [context, fetchGastos, cambio]);

  const obtenerGastos = async () => {
    if (context) fetchGastos(context.id);
    setCargando(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen bg-back-dark text-white">
        <h1>{context && `Gastos Sucursal ${context.nombre}`}</h1>
        <RegistrarGasto setCambio={setCambio} cambio={cambio} />
        <div>
          {cargando ? (
            <p>Cargando</p>
          ) : gastos.length > 0 ? (
            gastos.map((gasto) => (
              <div key={gasto.id}>
                <p>{gasto.concepto} - {gasto.fecha} - ${gasto.monto}</p>
              </div>
            ))
          ) : (
            <p>No hay gastos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
