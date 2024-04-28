import Alumnos from "@/components/Alumno/Alumno";
import GestionarAlumno from "@/components/Alumno/GestionarAlumno";
import RegistrarAlumno from "@/components/Alumno/RegistrarAlumno";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Alumno } from "@prisma/client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Navbar from "@/components/Navbar";
import Paginador from "@/components/Paginador";

function Index() {
  const [registrar, setRegistrar] = useState(false);
  const [alumnos, setAlumnos] = useState([]); // Almacena los alumnos

  const [cambio, setCambio] = useState(false); // Detecta cambios en los alumnos
  const [busqueda, setBusqueda] = useState(""); // Almacena el texto que busca el usuario
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]); // Alumnos filtrados dependiendo de el texto que contenga la variable "busqueda"

  //usestates para la paginación
  const [currentPage, setCurrentPage] = useState(1); // Define en que página va a empezar, por defecto en página 1
  const [itemsPerPage, setItemsPerPage] = useState(5); // Define cuantos elementos se van a mostrar por página
  const [pageNumbers, setPageNumbers] = useState<number[]>([]); // Almacena el número de páginas que se van a mostrar dependiendo de la cantidad de clases

  const indexOfLastItem = currentPage * itemsPerPage; // Define el índice del último elemento que se va a mostrar
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Define el índice del primer elemento que se va a mostrar
  const currentItems = alumnosFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  ); // Define los elementos que se van a mostrar en la página actual

  useEffect(() => {
    obtenerAlumnos();
  }, [cambio]);

  useEffect(() => {
    const filtrados = alumnos.filter((alumnos: any) => {
      const fullName = alumnos.nombre + alumnos.aPaterno + alumnos.aMaterno;
      return fullName.toUpperCase().includes(busqueda.toUpperCase());
    });

    setAlumnosFiltrados(filtrados);
    setCurrentPage(1);
    contarPaginas(filtrados);
  }, [busqueda, alumnos]);

  const handleRegistrar = () => {
    setRegistrar(true);
  };
  //Función para obtener a los alumnos
  const obtenerAlumnos = async () => {
    const response = await fetch("/api/alumno/alumno");
    const data = await response.json();
    setAlumnos(data);
    contarPaginas(alumnos); // Se manda llamar el método contarPaginas para contar cuantas páginas habrá dependiendo de la cantidad de alumnos
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

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        <div className="flex w-full items-end mb-1">
          <h1 className="text-5xl font-semibold mr-20">Alumnos</h1>
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
            {registrar && <RegistrarAlumno setRegistrar={setRegistrar} />}
            <button
              onClick={handleRegistrar}
              className="bg-pink-focus px-4 h-full text-md rounded-md font-semibold hover:shadow-md hover:shadow-pink-accent hover:-translate-y-1 transition-all duration-25 ease-out"
            >
              Registrar Alumno
            </button>
          </div>
        </div>
        <div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-10 mt-3 gap-5 px-5">
          <div className="text-2xl font-bold col-span-3 text-left ">Nombre</div>
          <div className="text-2xl font-bold col-span-2 text-left ">Tutor</div>
          <div className="text-2xl font-bold col-span-2 text-left ">
            Contacto
          </div>
          <div className="text-2xl font-bold col-span-2 text-left ">
            Nacimiento
          </div>
          <div className="text-2xl font-bold col-span-1 text-left ">
            Detalles
          </div>
        </div>
        <div className="overflow-y-auto w-full h-[55%]">
          {alumnosFiltrados.length >= 0
            ? currentItems.map((alumno, index) => (
                <Alumnos key={index} alumno={alumno} />
              ))
            : alumnos
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((alumno, index) => (
                  <Alumnos key={index} alumno={alumno} />
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

export default Index;
