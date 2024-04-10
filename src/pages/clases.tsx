import Clase from '@/components/Clases/Clase'
import { useEffect, useState } from 'react'
import RegistrarClase from '@/components/Clases/RegistrarClase'

export default function Clases() {
	/*Funciones useState para detectar cambios en variables */
	const [cambio, setCambio] = useState(false) //Detecta cambios en alguna clase
	const [clases, setClases] = useState([]) //Almacena las clases que existen
	const [busqueda, setBusqueda] = useState('') //Almacena el texto que se buscará en el nombre de las clases
	const [clasesFiltradas, setClasesFiltradas] = useState([]) //Clases filtradas dependiendo de el texto que contenga la variable "busqueda"
	const [procesado, setProcesado] = useState(false) //Bandera que indica que las clases ya se cargaron correctamente
	const [registrarClase, setRegistrarClase] = useState(false)
	const [sucursales, setSucursales] = useState([])

	/*useEffect que se ejecuta cuando se carga esta página por primera vez o cuando 
  haya algun cambio en la variable "cambio". Por medio de fetch obtiene todas las clases
  y se las asigna a "clases"*/
	useEffect(() => {
		fetch('api/clase/clases').then((response) => {
			if (response.ok) {
				return response.json().then((data) => {
					setClases(data) //las clases se guardan en la variable "clases"
				})
			} else {
				alert('Error al conseguir las sucursales.')
			}
		})
		setBusqueda('')
	}, [cambio])

	/*useEffect que se ejecuta al cargar la página y cada que la variable búsqueda cambie
  la variable "busqueda" va a cambiar cada que el usuario teclee algo en el buscador (form -> input) */
	useEffect(() => {
		if (busqueda === '') {
			//Si la barra de busqueda está vacía las clases filtradas serán todas las clases
			setClasesFiltradas(clases)
		} else {
			//Si no está vacía la barra de búsqueda las clases filtradas volverán a ser todas las clases
			setClasesFiltradas(clases)
			//Luego las clases filtradas serán solo aquellas clases cuyo nombre coincida con "busqueda"
			setClasesFiltradas(
				clases.filter((clase: any) =>
					clase.nombre.toUpperCase().includes(busqueda.toUpperCase())
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

<<<<<<< Updated upstream
	/*Cada que el usuario teclee algo en la barra de búsqueda, se cambiará el valor de busqueda a lo que
  sea que este teclee y se declarará true la variable "procesado" ¿Para qué? ver linea 85 del código */
	const handleBusqueda = (value: any) => {
		setBusqueda(value)
		setProcesado(true)
	}

	const handleRegistrar = () => {
		if (sucursales.length === 0) {
			alert('No se pueden registrar clases ya que no hay sucursales.')
		} else {
			setRegistrarClase(true)
		}
	}
=======
  // UseEffect para filtrar las clases dependiendo de la busqueda
  useEffect(() => {
    const filtrados = clases.filter((clase: any) => {
      return clase.nombre.toUpperCase().includes(busqueda.toUpperCase());
    });
>>>>>>> Stashed changes

	const handleCambio = () => {
		setCambio(!cambio)
	}

<<<<<<< Updated upstream
	/*CONTENIDO DE LA PÁGINA
  Un botón agregar que abre el componente para registrar otra clase, la barra de búsqueda */
	return (
		<>
			{registrarClase && (
				<RegistrarClase
					setRegistrarClase={setRegistrarClase}
					sucursales={sucursales}
					setCambio={setCambio}
					cambio={cambio}
				/>
			)}
			<div className="h-screen bg-neutral-900  w-screen flex justify-center items-center flex-col p-20 text-white">
				<div className="flex w-full">
					<button
						onClick={handleRegistrar}
						className="bg-pink-500 py-1 px-8 mb-5 rounded-md shadow-md hover:bg-pink-700 text-lg"
					>
						Registrar Clase
					</button>
					<form className="flex-grow w-full flex justify-end">
						<input
							className="h-1/2 py-5 rounded-md shadow-md px-5 text-2xl text-black"
							placeholder="Buscar Clase"
							value={busqueda}
							onChange={
								(e) =>
									handleBusqueda(e.target.value) /*Se manda llamar el método
             handleBusqueda cada que el usuario teclee algo */
							}
						></input>
					</form>
				</div>
				<div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-10 mt-3">
					<div className="col-span-1"></div>
					<div className="text-2xl font-bold col-span-2">Nombre</div>
					<div className="text-2xl font-bold col-span-2">Días</div>
					<div className="text-2xl font-bold col-span-2">Hora</div>
					<div className="text-2xl font-bold col-span-2">Cupo</div>
					<div className="text-2xl col-span-1"></div>
				</div>
				<div className="overflow-y-auto w-full h-5/6">
					{
						/*Si procesado es true, se mostrarán las clases filtradas, si no, se mostrarán
          las clases sin filtrar*/
						procesado
							? clasesFiltradas.map((clase, index) => (
									<Clase
										key={index}
										clase={clase}
										actualizarClases={handleCambio}
									/>
							  ))
							: clases.map((clase, index) => (
									<Clase
										key={index}
										clase={clase}
										actualizarClases={handleCambio}
									/>
							  ))
					}
				</div>
			</div>
		</>
	)
=======
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

  // Método para abrir el componente de registrar clase
  const handleRegistrar = () => {
    setRegistrarClase(true);
  };

  // Método para cambiar la cantidad de elementos por página
  const handleItemsPags = (e: any) => {
    const pag = e.target.value;
    setItemsPerPage(pag);
  };

  /*CONTENIDO DE LA PÁGINA
  Un botón agregar que abre el componente para registrar otra clase, la barra de búsqueda */
  return (
    <>
      {registrarClase && (
        <RegistrarClase
          setRegistrarClase={setRegistrarClase}
          setCambio={setCambio}
          cambio={cambio}
        />
      )}
      <div className="h-screen bg-back-dark w-screen flex justify-center items-center font-inter flex-col p-20 text-white">
        <div className="flex w-full items-end">
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
            <button
              onClick={handleRegistrar}
              className="bg-pink-focus px-4 h-full rounded-md font-semibold shadow-md hover:bg-pink-focus text-md"
            >
              Registrar
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-contrast py-2 rounded-lg bg-opacity-40 grid grid-cols-12 mt-3">
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
        <div className="overflow-y-auto w-full h-5/6">
          {clasesFiltradas.length >= 0
            ? currentItems.map((clase, index) => (
                <Clase key={index} clase={clase} />
              ))
            : clases
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((clase, index) => <Clase key={index} clase={clase} />)}
        </div>
        <div className="w-full flex justify-between">
          <ul className="flex items-center text-white" id="page-numbers">
            <li>
              <ChevronLeftIcon
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                className={
                  currentPage === 1
                    ? "text-disabled text-opacity-40"
                    : "text-white hover:cursor-pointer"
                }
                width={25}
                height={25}
              />
            </li>
            {pageNumbers.map((number) => {
              return (
                <li
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={
                    currentPage === number
                      ? "bg-white text-back-dark px-2 py-1 rounded-sm hover:cursor-pointer"
                      : "px-2 py-1 rounded-sm hover:cursor-pointer"
                  }
                >
                  {number}
                </li>
              );
            })}

            <li>
              <ChevronRightIcon
                onClick={() => {
                  if (currentPage < pageNumbers.length) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                className={
                  currentPage >= pageNumbers.length
                    ? "text-disabled text-opacity-40"
                    : "text-white hover:cursor-pointer"
                }
                width={25}
                height={25}
              />
            </li>
          </ul>
          <span>
            Mostrar{" "}
            <select
              onChange={handleItemsPags}
              className="bg-disabled bg-opacity-10 border-white border-solid"
            >
              <option className="bg-back-dark">5</option>
              <option className="bg-back-dark">7</option>
              <option className="bg-back-dark">10</option>
            </select>{" "}
            elementos por página
          </span>
        </div>
      </div>
    </>
  );

  //prueba
>>>>>>> Stashed changes
}

/*Procesado inicialmente será false, esto para que cuando recien se cargue la página
          se muestren las clases sin filtrar, esto porque al intentar mostrar desde un inicio las clases
          filtradas, hay un error, ya que se intentan filtrar las clases al mismo tiempo que se estan
          obteniendo del fetch, marcando error, una vez que el procesado pase a true, se muestran ya 
          las clases filtradas */
