import React, { useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import RegistrarDocente from "@/components/docente/RegistrarDocente";
import Docente from "@/components/docente/Docente";
import {
	MagnifyingGlassIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
  } from "@heroicons/react/20/solid";
import Paginador from "@/components/Paginador";
import { ToastContainer } from "react-toastify";


const Index = () => {
	const [cambio, setCambio] = useState(false); //Detecta cambios en los docentes
	const [docentes, setDocentes] = useState([]); //Almacena los docentes
	const [busqueda, setBusqueda] = useState('') // Almacena el texto que busca el usuario
	const [docentesFiltrados, setDocentesFiltrados] = useState([]) //Docentes filtrados dependiendo de el texto que contenga la variable "busqueda"
	const [registrarDocente, setRegistrarDocente] = useState(false)

	//usestates para la paginación
	const [currentPage, setCurrentPage] = useState(1); // Define en que página va a empezar, por defecto en página 1
	const [itemsPerPage, setItemsPerPage] = useState(5); // Define cuantos elementos se van a mostrar por página
	const [pageNumbers, setPageNumbers] = useState<number[]>([]); // Almacena el número de páginas que se van a mostrar dependiendo de la cantidad de clases

	const indexOfLastItem = currentPage * itemsPerPage; // Define el índice del último elemento que se va a mostrar
	const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Define el índice del primer elemento que se va a mostrar
	const currentItems = docentesFiltrados.slice(indexOfFirstItem, indexOfLastItem); // Define los elementos que se van a mostrar en la página actual


	// UseEffect para obtener los docentes, asumo que si se hacen cambios se actualiza igual
	useEffect(() => {
		obtenerDocentes();
	}, [cambio]);

	// UseEffect para filtrar los docentes dependiendo de la busqueda
	useEffect(() => {
		const filtrados = docentes.filter((docente: any) => {
		  return docente.nombre.toUpperCase().includes(busqueda.toUpperCase());
		});
	
		setDocentesFiltrados(filtrados);
		contarPaginas(filtrados);
	}, [busqueda, docentes]);

	// UseEffect para contar las páginas dependiendo de la cantidad de docentes
	useEffect(() => {
		contarPaginas(docentesFiltrados);
	  }, [itemsPerPage]);


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

  	// Método para abrir el componente de registrar docente
	const handleRegistrar = () => {
		setRegistrarDocente(true);
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


	//funciones para moverte 
	const goClases = () => {
		router.push("/clases")
	}
	const regresarMenu = () => {
		router.push("/inicio")
	}

 	return (
      <>
	   
		<div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pb-20 text-white">
			<div className="w-full flex items-center bg-transparent h-1/5">
				<h1 className="font-PassionOne text-6xl text-white">i.m.musik</h1>
				<div className="flex ml-auto text-xl gap-10">
					<button className="text-white font-medium" >
						Alumnos
					</button>
					<button className="text-white font-medium bg-primary rounded-lg p-2 relative shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)]">
						Docentes
					</button>
					<button className="text-white font-medium" onClick={goClases}>
						Clases
					</button>
					<Image src={require("@/img/back.png")} alt={""} 
					className="cursor-pointer transform transition-transform hover:scale-110"
					onClick={regresarMenu}>
					</Image>
				</div>
			</div>
			
			<div className="flex w-full items-end mb-1">
				<h1 className="text-6xl font-bold mr-3">Docentes</h1>
				<form className="flex bg-[rgba(217,217,217,0.5)] rounded-md items-center h-3/5">	
					<Image 
						src={require("@/img/lupa.png")} alt={""} className="bg-transparent max-w-5 max-h-6 pl-1">
					</Image>
					<input
						className="bg-transparent rounded-md text-md text-white "
						placeholder=""
						value={busqueda}
						onChange={
							(e) =>
								handleBusqueda(e.target.value) /*Se manda llamar el método
									handleBusqueda cada que el usuario teclee algo */
						}
					></input>
				</form>
				<RegistrarDocente setCambio={setCambio} cambio={cambio} />
		</div>
				<div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-10 mt-3 gap-5 px-5">
					<div className="text-2xl font-bold col-span-4 text-left ">Nombre</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Contacto</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Estado</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Detalles</div>
				</div>
				<div className="overflow-y-auto w-full h-5/6">
					{docentesFiltrados.length >= 0
						? currentItems.map((docente, index) => (
							<Docente key={index} docente={docente} actualizarDocente={handleCambio}/>
						))
						: docentes
							.slice(indexOfFirstItem, indexOfLastItem)
							.map((docente, index) => <Docente key={index} docente={docente} actualizarDocente={handleCambio}/>)}
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
