import Clase from '@/components/Clases/Clase'
import { useEffect, useState } from 'react'

export default function Clases() {
	/*Funciones useState para detectar cambios en variables */
	const [cambio, setCambio] = useState(false) //Detecta cambios en alguna clase
	const [clases, setClases] = useState([]) //Almacena las clases que existen
	const [busqueda, setBusqueda] = useState('') //Almacena el texto que se buscará en el nombre de las clases
	const [clasesFiltradas, setClasesFiltradas] = useState([]) //Clases filtradas dependiendo de el texto que contenga la variable "busqueda"
	const [procesado, setProcesado] = useState(false) //Bandera que indica que las clases ya se cargaron correctamente

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

	/*Cada que el usuario teclee algo en la barra de búsqueda, se cambiará el valor de busqueda a lo que
  sea que este teclee y se declarará true la variable "procesado" ¿Para qué? ver linea 85 del código */
	const handleBusqueda = (value: any) => {
		setBusqueda(value)
		setProcesado(true)
	}

	/*CONTENIDO DE LA PÁGINA
  Un botón agregar que abre el componente para registrar otra clase, la barra de búsqueda */
	return (
		<>
			<div className="bg-gray-100 h-screen w-screen flex justify-center items-center flex-col p-20">
				<div className="flex w-full">
					<button className="bg-gray-300 py-1 px-8 mb-5 rounded-md shadow-md hover:bg-gray-400 text-lg">
						Agregar
					</button>
					<form className="flex-grow w-full flex justify-end">
						<input
							className="h-1/2 py-5 rounded-md shadow-md px-5 text-2xl"
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
				<div className="bg-pink-200 rounded-lg shadow-lg p-5 overflow-y-auto w-full h-5/6">
					<div className="grid grid-cols-10 mt-3 mb-5">
						<div></div>
						<div className="text-2xl font-bold col-span-2">Nombre</div>
						<div className="text-2xl font-bold col-span-2">Días</div>
						<div className="text-2xl font-bold col-span-2">Hora</div>
						<div className="text-2xl font-bold col-span-2">Cupo</div>
						<div className="text-2xl"></div>
					</div>
					{
						/*Si procesado es true, se mostrarán las clases filtradas, si no, se mostrarán
          las clases sin filtrar*/
						procesado
							? clasesFiltradas.map((clase, index) => (
									<Clase key={index} clase={clase} />
							  ))
							: clases.map((clase, index) => (
									<Clase key={index} clase={clase} />
							  ))
					}
				</div>
			</div>
		</>
	)
}

/*Procesado inicialmente será false, esto para que cuando recien se cargue la página
          se muestren las clases sin filtrar, esto porque al intentar mostrar desde un inicio las clases
          filtradas, hay un error, ya que se intentan filtrar las clases al mismo tiempo que se estan
          obteniendo del fetch, marcando error, una vez que el procesado pase a true, se muestran ya 
          las clases filtradas */
