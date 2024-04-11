import React, { useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import RegistrarDocente from "@/components/docente/RegistrarDocente";
import Docente from "@/components/docente/Docente";


const Index = () => {
  const [cambio, setCambio] = useState(false)
  const [docentes, setDocentes] = useState([]);
  const [busqueda, setBusqueda] = useState('')
  const [docentesFiltrados, setDocentesFiltrados] = useState([])
  const [procesado, setProcesado] = useState(false)
  const [registrarDocente, setRegistrarDocente] = useState(false)
  const [sucursales, setSucursales] = useState([])
  
  const [search, setSearch] = useState("");
  // const [viewed, setViewed] = useState([]);
  // const [sortConfig, setSortConfig] = useState({
  //   key: "estado",
  //   direction: "asc",
  // });

  // const obtenerDocentes = async () => {
  //   const response = await fetch("/api/docente/fetchAll");
  //   const data = await response.json();
  //   setDocentes(data);
  //   setViewed(data);
  // };

  // const sortBy = (key: any) => {
  //   let direction = "asc";
  //   if (sortConfig.key === key && sortConfig.direction === "asc") {
  //     direction = "desc";
  //   }
  //   setSortConfig({ key, direction });
  // };

  // useEffect(() => {
  //   obtenerDocentes();
  // }, []);

  // useEffect(() => {
  //   const busquedaSeparada = search.trim();

  //   const filtrados = docentes.filter((docente: Docente) => {
  //     const fullName =
  //       `${docente.nombre} ${docente.aPaterno} ${docente.aMaterno}`.toLowerCase();
  //     return fullName.includes(busquedaSeparada.toLowerCase());
  //   });

  //   const sortedDocentes = [...filtrados].sort((a: Docente, b: Docente) => {
  //     if (sortConfig.key === "estado") {
  //       return a.estado.localeCompare(b.estado);
  //     } else {
  //       if ((a as any)[sortConfig.key] < (b as any)[sortConfig.key]) {
  //         return sortConfig.direction === "asc" ? -1 : 1;
  //       }
  //       if ((a as any)[sortConfig.key] > (b as any)[sortConfig.key]) {
  //         return sortConfig.direction === "asc" ? 1 : -1;
  //       }
  //       return 0;
  //     }
  //   });

  //   setViewed(sortedDocentes);
  // }, [docentes, search, sortConfig]);

  // const handleRegister = () => {
  //   router.push("/docente/registrar");
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  // };

  useEffect(() => {
		fetch('api/docente/fetchAll').then((response) => {
			if (response.ok) {
				return response.json().then((data) => {
					setDocentes(data) //las clases se guardan en la variable "clases"
				})
			} else {
				alert('Error al conseguir los Docentes.')
			}
		})
		setBusqueda('')
	}, [cambio])

  useEffect(() => {
		if (busqueda === '') {
			//Si la barra de busqueda está vacía las clases filtradas serán todas las clases
			setDocentesFiltrados(docentes)
		} else {
			//Si no está vacía la barra de búsqueda las clases filtradas volverán a ser todas las clases
			setDocentesFiltrados(docentes)
			//Luego las clases filtradas serán solo aquellas clases cuyo nombre coincida con "busqueda"
			setDocentesFiltrados(
				docentes.filter((docente: any) =>
					docente.nombre.toUpperCase().includes(busqueda.toUpperCase())
				)
			)
		}
	}, [busqueda])

  useEffect(() => {
		fetch('api/Sucursal').then((response) => {
			if (response.ok) {
				return response.json().then((data) => {
					setSucursales(data)
				})
			} else {
				alert('Error al conseguir las sucursales')
			}
		})
	}, [])

  const handleBusqueda = (value: any) => {
		setBusqueda(value)
		setProcesado(true)
	}

  const handleCambio = () => {
		setCambio(!cambio)
	}

  const handleRegistrar = () => {
		if (sucursales.length === 0) {
			alert('No se pueden registrar clases ya que no hay sucursales.')
		} else {
			setRegistrarDocente(true)
		}
	}

  const regresarMenu = () => {
    router.push("/inicio")
  }

  return (
      <>
        {registrarDocente && (
				<RegistrarDocente
					setRegistrarDocente={setRegistrarDocente}
					sucursales={sucursales}
					setCambio={setCambio}
					cambio={cambio}
				/>
			)}
			<div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pb-20 text-white">
				<div className="w-full flex items-center bg-transparent h-1/5">
					<h1 className="font-PassionOne text-6xl text-white">i.m.musik</h1>
					<div className="flex ml-auto text-xl gap-10">
						<button className="text-white font-medium">
							Alumnos
						</button>
						<button className="text-white font-medium bg-primary rounded-lg p-2 relative shadow-[0px_0px_20px_8px_rgba(251,_3,_143,_0.25)]">
							Docentes
						</button>
						<button className="text-white font-medium">
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
					<button
						onClick={handleRegistrar}
						className="bg-primary rounded-md shadow-md text-white text-center px-4 py-1 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)] text-lg font-bold ml-3"
					>
						Registrar
					</button>
				</div>
				<div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-10 mt-3 gap-5 px-5">
					<div className="text-2xl font-bold col-span-4 text-left ">Nombre</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Contacto</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Estado</div>
					<div className="text-2xl font-bold col-span-2 text-left ">Detalles</div>
				</div>
				<div className="overflow-y-auto w-full h-5/6">
					{
						/*Si procesado es true, se mostrarán las clases filtradas, si no, se mostrarán
          las clases sin filtrar*/
						procesado
							? docentesFiltrados.map((docente, index) => (
									<Docente
										key={index}
										docente={docente}
										actualizarDocentes={handleCambio}
									/>
							  ))
							: docentes.map((docente, index) => (
									<Docente
										key={index}
										docente={docente}
										actualizarDocentes={handleCambio}
									/>
							  ))
					}
				</div>
			</div>
      </>
  );
};

export default Index;
