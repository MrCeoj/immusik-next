import { toTitleCase } from "@/lib/utils";
import { Tabs, Tab } from "@nextui-org/tabs";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditarInformacion from "./EditarInformacion";
import { Card, CardBody } from "@nextui-org/card";

// con esta función se podrán agregar clases de tailwindcss a los componentes de nextui
import { cn } from "@nextui-org/react";
import HistoricoDePagos from "./HistoricoDePagos";
import TodosLosPagos from "./TodosLosPagos";

function GestionarAlumno({
  setGestionar,
  alumno,
}: {
  setGestionar: any;
  alumno: any;
}) {
  //useStates para almacenar los pagos, todos los pagos, si son más de 6 pagos y la id del alumno
  const [pagos, setPagos] = useState([]);
  const [alumnoId, setAlumnoId] = useState(alumno.id);
  const [masDeSeis, setMasDeSeis] = useState(false);
  const [pagosCompletos, setPagosCompletos] = useState([]);

  //useState para mostrar todos los pagos
  const [verTodos, setVerTodos] = useState(false);

  const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTab(index); // Actualizar el estado de la pestaña activa
  };

  //Sale de este componente
  const handleCancelar = () => {
    setGestionar(false);
  };

  //Cambia la variable verTodos a true
  const handleVerTodos = () => {
    setVerTodos(true);
  };

  //Cuando se ejecuta este componente, se consiguen todos los pagos del alumno
  useEffect(() => {
    fetch(`api/pagos/pagos?id=${alumnoId}`).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          //Si son más de 6 pagos-
          if (data.length > 6) {
            setMasDeSeis(true); //Se declara true el masDeSeis
            setPagosCompletos(data); //Se pasan todos los pagos completos a pagosCompletos
            setPagos(data.slice(0, 6)); //Se cortan los primeros 6 datos a pagos
          } else {
            setPagos(data); //Si no son mas de 6 solo se almacenan los pagos en su variable
          }
        });
      } else {
        toast.error("Hubo un error al encontrar los datos del alumno.");
      }
    });
  }, []);

  return (
    <>
      {verTodos && (
        <TodosLosPagos pagos={pagosCompletos} setVerTodos={setVerTodos} />
      )}
      <div className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center w-4/5 h-5/6">
          <h1 className="m-2 font-bold text-4xl">
            Detalles de {toTitleCase(alumno.nombre)}{" "}
            {toTitleCase(alumno.aPaterno)}
          </h1>
          <Tabs aria-label="Options" className={cn("w-full font-bold")}>
            <Tab className="w-full" title="Información del alumno">
              <Card>
                <CardBody>
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      Editar información del alumno
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
            <Tab className="w-full" title="Pagos del alumno">
              <Card>
                <CardBody>
                  <div className="flex flex-row ">
                    <div className="w-1/2">
                      Registrar pago{" "}
                      <p className="font-bold">
                        NOTA: esto lo va a hacer fong 🤠💀
                      </p>
                    </div>
                    <div className="w-1/2 flex flex-col p-2">
                      <h1>Histórico de pagos</h1>
                      {pagos.length > 0 ? (
                        <div>
                          <div className="grid grid-cols-3 gap-3">
                            {pagos.map((pago) => (
                              <HistoricoDePagos pago={pago} />
                            ))}
                          </div>
                          {masDeSeis && (
                            <button onClick={handleVerTodos}>Ver todos</button>
                          )}
                        </div>
                      ) : (
                        <p>No hay pagos registrados</p>
                      )}
                    </div>
                  </div>
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
