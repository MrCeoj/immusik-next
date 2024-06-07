import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ToastContainer } from "react-toastify";
import RegistrarDocente from "@/components/docente/RegistrarDocente";
import Paginador from "@/components/Paginador";
import Docente from "@/components/docente/Docente";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Index = () => {
  const [cambio, setCambio] = useState(false); //Detecta cambios en los docentes
  const [docentes, setDocentes] = useState([]); //Almacena los docentes
  const [busqueda, setBusqueda] = useState(""); // Almacena el texto que busca el usuario
  const [docentesFiltrados, setDocentesFiltrados] = useState([]); //Docentes filtrados dependiendo de el texto que contenga la variable "busqueda"

  //usestates para la paginación
  const [currentPage, setCurrentPage] = useState(1); // Define en que página va a empezar, por defecto en página 1
  const [itemsPerPage, setItemsPerPage] = useState(5); // Define cuantos elementos se van a mostrar por página
  const [pageNumbers, setPageNumbers] = useState<number[]>([]); // Almacena el número de páginas que se van a mostrar dependiendo de la cantidad de clases

  const indexOfLastItem = currentPage * itemsPerPage; // Define el índice del último elemento que se va a mostrar
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Define el índice del primer elemento que se va a mostrar
  const currentItems = docentesFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  ); // Define los elementos que se van a mostrar en la página actual

  // UseEffect para obtener los docentes, asumo que si se hacen cambios se actualiza igual
  useEffect(() => {
    obtenerDocentes();
  }, [cambio]);

  // UseEffect para filtrar los docentes dependiendo de la busqueda
  useEffect(() => {
    const filtrados = docentes.filter((docente: any) => {
      const fullName = docente.nombre + docente.aPaterno + docente.aMaterno;
      return fullName.toUpperCase().includes(busqueda.toUpperCase());
    });

    setDocentesFiltrados(filtrados);
    setCurrentPage(1);
    contarPaginas(filtrados);
    ordenarEstado(filtrados);
  }, [busqueda, docentes]);

  // UseEffect para contar las páginas dependiendo de la cantidad de docentes
  useEffect(() => {
    contarPaginas(docentesFiltrados);
  }, [itemsPerPage]);

  // Método para ordenar los docentes por nombre y estado
  const ordenarEstado = (docentesFiltrados: any) => {
    const orden = ["ACTIVO", "INACTIVO", "VETADO"];
    const porNombre = docentesFiltrados.sort((a: any, b: any) => {
      const fullNameA = a.nombre + a.aPaterno + a.aMaterno;
      const fullNameB = b.nombre + b.aPaterno + b.aMaterno;
      if (fullNameA < fullNameB) {
        return -1;
      }
      if (fullNameA > fullNameB) {
        return 1;
      }
      return 0;
    });

    const ordenados = porNombre.sort((a: any, b: any) => {
      return orden.indexOf(a.estado) - orden.indexOf(b.estado);
    });
    setDocentesFiltrados(ordenados);
  };

  //Función para obtener a los docentes
  const obtenerDocentes = async () => {
    const response = await fetch("/api/docente/fetchAll");
    const data = await response.json();
    setDocentes(data);
    contarPaginas(docentes); // Se manda llamar el método contarPaginas para contar cuantas páginas habrá dependiendo de la cantidad de clases
  };

  // Método para contar las páginas
  const contarPaginas = (data: any) => {
    const newPageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  };

  // Método para filtrar los docentes con la barra de búsqueda
  const handleBusqueda = (value: any) => {
    setBusqueda(value);
  };

  // Método para cambiar la cantidad de elementos por página
  const handleItemsPags = (e: any) => {
    const pag = e.target.value;
    setItemsPerPage(pag);
    setCurrentPage(1);
  };

  // Método para indicar que ocurrió un cambio
  const handleCambio = () => {
    setCambio(!cambio);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        <div className="flex w-full items-end mb-1">
          <h1 className="text-5xl font-semibold mr-20">Docentes</h1>
          <div className="flex h-3/4 items-center">
            <form className="h-full relative flex items-center mr-5">
              <input
                className="h-4/5 bg-disabled bg-opacity-50 rounded-sm shadow-md pl-10 text-md text-white"
                placeholder=""
                value={busqueda}
                onChange={
                  (e) =>
                    handleBusqueda(e.target.value) /*Se manda llamar el método
									handleBusqueda cada que el usuario teclee algo */
                }
              ></input>
              <MagnifyingGlassIcon
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                width={20}
                height={20}
              />
            </form>
            <RegistrarDocente setCambio={setCambio} cambio={cambio} />
          </div>
        </div>
        <div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-10 mt-3 gap-5 px-5">
          <div className="text-2xl font-bold col-span-4 text-left ">Nombre</div>
          <div className="text-2xl font-bold col-span-2 text-left ">
            Contacto
          </div>
          <div className="text-2xl font-bold col-span-2 text-left ">Estado</div>
          <div className="text-2xl font-bold col-span-2 text-left ">
            Detalles
          </div>
        </div>
        <div className="overflow-y-auto w-full h-[55%]">
          {docentesFiltrados.length >= 0
            ? currentItems.map((docente, index) => (
                <Docente
                  key={index}
                  docente={docente}
                  obtenerDocentes={obtenerDocentes}
                />
              ))
            : docentes
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((docente, index) => (
                  <Docente
                    key={index}
                    docente={docente}
                    obtenerDocentes={obtenerDocentes}
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
};

export default Index;
