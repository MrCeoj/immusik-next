import { toTitleCase } from "@/lib/utils";
import { Tabs, Tab } from "@nextui-org/tabs";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditarInformacion from "./EditarInformacion";
import { Card, CardBody } from "@nextui-org/card";

// con esta función se podrán agregar clases de tailwindcss a los componentes de nextui
import { cn } from "@nextui-org/react";

function GestionarAlumno({
  setGestionar,
  alumno,
}: {
  setGestionar: any;
  alumno: any;
}) {
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTab(index); // Actualizar el estado de la pestaña activa
  };

  const handleCancelar = () => {
    setGestionar(false);
  };

  return (
    <>
      <div className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center w-4/5 h-5/6">
          <h1 className="m-2 font-bold text-4xl">
            Detalles de {toTitleCase(alumno.nombre)}{" "}
            {toTitleCase(alumno.aPaterno)}
          </h1>
          <Tabs aria-label="Options" className={cn("w-full font-bold")}>
            <Tab title="Información del alumno">
              <Card>
                <CardBody>
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <EditarInformacion alumno={alumno} />
                    </div>
                    <div className="w-1/2">
                      <h1>Clases</h1>
                      <p className="font-bold">
                        NOTA: esto lo va a hacer Marcelo
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab title="Pagos del alumno">
              <Card>
                <CardBody>
                  <div>PAGOS (aqui trabajaremos marce y fong)</div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          <button
            onClick={handleCancelar}
            className="bg-zinc-400 py-1 px-5 rounded-md text-white hover:bg-zinc-500 active:bg-zinc-600"
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}
export default GestionarAlumno;
