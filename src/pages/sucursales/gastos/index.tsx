import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sucursalContext } from "@/hooks/sucursalContext";
import { useGastos } from "@/hooks/gastos/useGastos";
import RegistrarGasto from "@/components/gastos/RegistrarGasto";
import { ToastContainer } from "react-toastify";
import ModalGasto from "@/components/gastos/ModalGasto";
import Navbar from "@/components/Navbar";
import BarraNavegacion from "@/components/barraNavegacion";
import { Tab, Tabs } from "@nextui-org/tabs";
import { cn } from "@nextui-org/react";
import Paginador from "@/components/Paginador";

const Index = () => {
  const router = useRouter();
  const context = sucursalContext((state: any) => state.context);
  const { gastos, fetchGastos } = useGastos();
  const [cargando, setCargando] = useState(true);
  const [cambio, setCambio] = useState(false);

  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gastosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context, router]);

  useEffect(() => {
    obtenerGastos();
  }, [context, fetchGastos, cambio]);

  const obtenerGastos = async () => {
    if (context) fetchGastos(context.id);
    setCargando(false);
    contarPaginas(gastos);
  };

  const handleCambio = () => {
    setCambio(!cambio);
  };

  const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTab(index); // Actualizar el estado de la pestaña activa
  };

  // Método para contar las páginas
  const contarPaginas = (data: any) => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  };

  // Método para cambiar la cantidad de elementos por página
  const handleItemsPags = (e: any) => {
    const pag = e.target.value;
    setItemsPerPage(pag);
    setCurrentPage(1);
  };

  return (
    <>
      <BarraNavegacion titulo="Gastos" />
      <ToastContainer />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white bg-cover">
        <h1 className="text-5xl font-semibold pb-5">
          {context && `Gastos Sucursal ${context.nombre}`}
        </h1>
        <div className="overflow-y-auto w-full h-[75%]">
          <Tabs
            aria-label="Options"
            color={"secondary"}
            variant="light"
            className={cn(
              "w-full font-bold flex flex-col justify-center shadow-lg rounded-lg "
            )}
            classNames={{
              tabList: "bg-gray-contrast bg-opacity-40",
              tabContent: "text-white",
              tab: "py-4",
            }}
          >
            <Tab className="w-full text-xl py-1 " title="Registros">
              <div className="w-full bg-neutral-400 rounded-lg mt-3 bg-opacity-40 grid grid-cols-10 py-2 px-4">
                <div className="text-2xl font-bold col-span-2">Fecha</div>
                <div className="text-2xl font-bold col-span-3">Concepto</div>
                <div className="text-2xl font-bold col-span-2">Categoría</div>
                <div className="text-2xl font-bold col-span-2">Cantidad</div>
              </div>
              <div className="overflow-y-auto w-full h-[55%]">
                {cargando ? (
                  <p>Cargando</p>
                ) : gastosFiltrados.length >= 0 ? (
                  gastos.map((gasto) => (
                    <div
                      key={gasto.id}
                      className="px-4 py-2 grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 rounded-lg font-bold items-center"
                    >
                      <div className="col-span-2">{gasto.fecha}</div>
                      <div className="col-span-3">{gasto.concepto}</div>
                      <div className="col-span-2">{gasto.titulo}</div>
                      <div className="col-span-2">${gasto.monto}</div>

                      <ModalGasto
                        gastoArgs={gasto}
                        actualizarGastos={handleCambio}
                      />
                    </div>
                  ))
                ) : (
                  <p>No hay gastos</p>
                )}
              </div>
              <Paginador
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageNumbers={pageNumbers}
                handleItemsPags={handleItemsPags}
              />
            </Tab>
            <Tab className="w-full text-xl py-1 flex justify-center" title="Registrar">
              <RegistrarGasto actualizarGastos={handleCambio} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Index;
