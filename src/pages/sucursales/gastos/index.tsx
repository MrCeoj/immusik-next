import { cn } from "@nextui-org/react";
import { Gasto } from "@/entities";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ToastContainer } from "react-toastify";
import { useGastos } from "@/hooks/gastos/useGastos";
import ModalGasto from "@/components/gastos/ModalGasto";
import { sucursalContext } from "@/hooks/sucursalContext";
import BarraNavegacion from "@/components/barraNavegacion";
import RegistrarGasto from "@/components/gastos/RegistrarGasto";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Index = () => {
  const router = useRouter();
  const context = sucursalContext((state: any) => state.context);
  const recienMontado = useRef(true);

  const { gastos, fetchGastos } = useGastos();
  const [cargando, setCargando] = useState(true);
  const [cambio, setCambio] = useState(false);

  const [uniqueDates, setUniqueDates] = useState<string[]>([]);
  const [gastosFiltrados, setGastosFiltrados] = useState<Gasto[]>([]);
  const [currentDate, setCurrentDate] = useState({ month: 0, year: 0 });
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  // Verificar si hay una sucursal seleccionada
  useEffect(() => {
    if (!context) {
      router.push("/inicio");
    }
  }, [context, router]);

  // Obtener los gastos de la sucursal seleccionada
  useEffect(() => {
    if (context) {
      fetchGastos(context.id);
      setCargando(false);
    }
  }, [context]);

  //Se actualizan los gatos de la sucursal
  const nuevosGastos = () => {
    fetchGastos(context.id);
  };

  // Este useEffect se ejecuta cuando se obtienen los gastos
  useEffect(() => {
    if (gastos.length > 0) {
      const parseDate = (dateString: string) => {
        let [day, month, year] = dateString.split("/");
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      };

      // Ordenar los gastos por fecha
      const sortedGastos = gastos
        .filter((gasto) => gasto !== undefined)
        .sort((b, a) => {
          return parseDate(a.fecha).getTime() - parseDate(b.fecha).getTime();
        });

      // Obtener las fechas únicas de los gastos para el paginador
      const uniqueDatesArray = Array.from(
        new Set(
          sortedGastos.map((gasto: Gasto) => {
            const date = parseDate(gasto.fecha);
            return `${date.getMonth()}-${date.getFullYear()}`;
          })
        )
      ).sort((a, b) => {
        const [monthA, yearA] = a.split("-").map(Number);
        const [monthB, yearB] = b.split("-").map(Number);
        return (
          new Date(yearB, monthB).getTime() - new Date(yearA, monthA).getTime()
        );
      });

      setUniqueDates(uniqueDatesArray);

      // Si es la primera vez que se monta el componente, se obtiene el mes y año del gasto más reciente
      if (recienMontado.current) {
        recienMontado.current = false;

        const mostRecentGasto = sortedGastos[0];
        const mostRecentDate = parseDate(mostRecentGasto.fecha);
        const mostRecentMonthYear = `${mostRecentDate.getMonth()}-${mostRecentDate.getFullYear()}`;
        const currentIndex = uniqueDatesArray.findIndex(
          (date) => date === mostRecentMonthYear
        );

        setCurrentDateIndex(currentIndex !== -1 ? currentIndex : 0);
        filterGastos({
          month: mostRecentDate.getMonth(),
          year: mostRecentDate.getFullYear(),
        });
      }
    }
  }, [gastos]);

  // Este useEffect garantiza que en cada cambio de gastos se actualice la lista de gastos filtrados
  useEffect(() => {
    if (uniqueDates.length > 0) {
      const [month, year] = uniqueDates[currentDateIndex]
        .split("-")
        .map(Number);
      filterGastos({ month, year });
    }
  }, [currentDateIndex, uniqueDates]);

  // Funciones para cambiar de mes en el paginador
  const handleLeftClick = () => {
    if (currentDateIndex > 0) {
      setCurrentDateIndex(currentDateIndex - 1);
      const [month, year] = uniqueDates[currentDateIndex - 1]
        .split("-")
        .map(Number);
      filterGastos({ month, year });
    }
  };

  const handleRightClick = () => {
    if (currentDateIndex < uniqueDates.length - 1) {
      setCurrentDateIndex(currentDateIndex + 1);
      const [month, year] = uniqueDates[currentDateIndex + 1]
        .split("-")
        .map(Number);
      filterGastos({ month, year });
    }
  };

  // Función para filtrar los gastos por mes y año
  const filterGastos = ({ month, year }: { month: any; year: any }) => {
    setCurrentDate({ month, year });
    const parseDate = (dateString: string) => {
      let [day, month, year] = dateString.split("/");
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    };

    let monthlyGastos = gastos.filter((gasto) => {
      const date = parseDate(gasto.fecha);
      return date.getMonth() === month && date.getFullYear() === year;
    });

    monthlyGastos = monthlyGastos.sort((a, b) => {
      return parseDate(b.fecha).getTime() - parseDate(a.fecha).getTime();
    });

    setGastosFiltrados(monthlyGastos);
  };

  // Función para actualizar la lista de gastos
  const handleCambio = () => {
    setCambio(!cambio);
  };

  return (
    <>
      <BarraNavegacion titulo="Gastos" />
      <ToastContainer />
      <div className="h-screen bg-fondo w-screen flex justify-start items-center flex-col px-20 pt-20 text-white bg-cover">
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
                  gastosFiltrados.map((gasto) => (
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
                        nuevosGastos={nuevosGastos}
                      />
                    </div>
                  ))
                ) : (
                  <p>No hay gastos</p>
                )}
              </div>
              <Paginador
                handleLeftClick={handleLeftClick}
                uniqueDates={uniqueDates}
                currentDateIndex={currentDateIndex}
                setCurrentDateIndex={setCurrentDateIndex}
                setCurrentDate={setCurrentDate}
                handleRightClick={handleRightClick}
                filterGastos={filterGastos}
              />
            </Tab>
            <Tab
              className="w-full text-xl py-1 flex justify-center"
              title="Registrar"
            >
              <RegistrarGasto
                actualizarGastos={handleCambio}
                nuevosGastos={nuevosGastos}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

// Componente para el paginador de gastos
const Paginador = ({
  handleLeftClick,
  uniqueDates,
  setCurrentDateIndex,
  setCurrentDate,
  handleRightClick,
  currentDateIndex,
  filterGastos,
}: {
  handleLeftClick: any;
  uniqueDates: any;
  setCurrentDateIndex: any;
  setCurrentDate: any;
  handleRightClick: any;
  currentDateIndex: number;
  filterGastos: any;
}) => {
  return (
    <div className="absolute bottom-8 flex justify-start w-[90%]">
      <button onClick={handleLeftClick} className="w-10">
        <ChevronLeftIcon />
      </button>
      {uniqueDates.map((date: any, index: number) => {
        const [month, year] = date.split("-").map(Number);
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentDateIndex(index);
              setCurrentDate({ month, year });
              filterGastos({ month, year });
            }}
            className={
              index === currentDateIndex
                ? "bg-white text-back-dark px-2 py-1 rounded-sm hover:cursor-pointer"
                : "px-2 py-1 rounded-sm hover:cursor-pointer"
            }
          >
            {`${month + 1}/${year}`}
          </button>
        );
      })}
      <button onClick={handleRightClick} className="w-10">
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Index;
