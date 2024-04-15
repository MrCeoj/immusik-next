import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Clase from "@/components/Clases/Clase";
import Navbar from "@/components/Navbar";
import Paginador from "@/components/Paginador";
import RegistrarClase from "@/components/Clases/RegistrarClase";

export default function Clases() {
  /*Funciones useState para detectar cambios en variables */
  const [cambio, setCambio] = useState(false); //Detecta cambios en alguna clase
  const [clases, setClases] = useState([]); //Almacena las clases que existen
  const [busqueda, setBusqueda] = useState(""); //Almacena el texto que se buscará en el nombre de las clases
  const [clasesFiltradas, setClasesFiltradas] = useState([]); //Clases filtradas dependiendo de el texto que contenga la variable "busqueda"

  //usestates para la paginación
  const [currentPage, setCurrentPage] = useState(1); // Define en que página va a empezar, por defecto en página 1
  const [itemsPerPage, setItemsPerPage] = useState(5); // Define cuantos elementos se van a mostrar por página
  const [pageNumbers, setPageNumbers] = useState<number[]>([]); // Almacena el número de páginas que se van a mostrar dependiendo de la cantidad de clases

  const indexOfLastItem = currentPage * itemsPerPage; // Define el índice del último elemento que se va a mostrar
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Define el índice del primer elemento que se va a mostrar
  const currentItems = clasesFiltradas.slice(indexOfFirstItem, indexOfLastItem); // Define los elementos que se van a mostrar en la página actual

  // UseEffect para obtener las clases, asumo que si se hacen cambios se actualiza igual
  useEffect(() => {
    obtenerClases();
  }, [cambio]);

  // UseEffect para filtrar las clases dependiendo de la busqueda
  useEffect(() => {
    const filtrados = clases.filter((clase: any) => {
      return clase.nombre.toUpperCase().includes(busqueda.toUpperCase());
    });

    setClasesFiltradas(filtrados);
    contarPaginas(filtrados);
  }, [busqueda, clases]);

  // UseEffect para contar las páginas dependiendo de la cantidad de clases
  useEffect(() => {
    contarPaginas(clasesFiltradas);
  }, [itemsPerPage]);

  // Función para obtener las clases
  const obtenerClases = async () => {
    const response = await fetch("/api/clase/clases");
    const data = await response.json();
    setClases(data);
    contarPaginas(clases); // Se manda llamar el método contarPaginas para contar cuantas páginas habrá dependiendo de la cantidad de clases
  };

  // Método para contar las páginas
  const contarPaginas = (data: any) => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  };

  // Método para filtrar las clases con la barra de búsqueda
  const handleBusqueda = (value: any) => {
    setBusqueda(value);
  };

  // Método para cambiar la cantidad de elementos por página
  const handleItemsPags = (e: any) => {
    const pag = e.target.value;
    setItemsPerPage(pag);
  };

  // Método para indicar que ocurrió un cambio
  const handleCambio = (message: string) => {
    setCambio(!cambio);
  };

  /*CONTENIDO DE LA PÁGINA
  Un botón agregar que abre el componente para registrar otra clase, la barra de búsqueda */
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        <div className="flex w-full items-end mb-1">
          <h1 className="text-5xl font-semibold mr-20">Clases</h1>
          <div className="flex h-3/4 items-center">
            <form className="h-full relative flex items-center mr-5">
              <input
                className="h-4/5 bg-disabled bg-opacity-50 rounded-sm shadow-md pl-10 text-md text-white"
                value={busqueda}
                onChange={(e) => handleBusqueda(e.target.value)}
              />
              <MagnifyingGlassIcon
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                width={20}
                height={20}
              />
            </form>
            <RegistrarClase setCambio={setCambio} cambio={cambio} />
          </div>
        </div>
        <div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-12 mt-3 gap-3">
          {/**
           * Esto puede ser complicado de entender, pero entendí que la fila está "formateada"
           * usando grid, le acomodé un total de 12 columnas (arriba en grid-cols-12)
           * El col-span indica cuantas columnas de espacio tiene el elemento para estirarse
           * mientras mas grande el numero, mas ancho es su espacio.
           */}
          <div className="col-span-1"></div>
          <div className="text-xl font-bold col-span-2">Nombre</div>
          <div className="text-xl font-bold col-span-3">Días</div>
          <div className="text-xl font-bold col-span-2">Hora</div>
          <div className="text-xl font-bold col-span-2">Cupo</div>
          <div className="text-xl font-bold col-span-1">Detalles</div>
        </div>
        <div className="overflow-y-auto w-full h-[55%]">
          {clasesFiltradas.length >= 0
            ? currentItems.map((clase, index) => (
                <Clase
                  key={index}
                  clase={clase}
                  actualizarClases={handleCambio}
                />
              ))
            : clases
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((clase, index) => (
                  <Clase
                    key={index}
                    clase={clase}
                    actualizarClases={handleCambio}
                  />
                ))}
        </div>
        <Paginador
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumbers={pageNumbers}
          handleItemsPags={handleItemsPags}
        />
      </div>
    </>
  );
}
