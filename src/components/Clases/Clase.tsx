import warningIcon from '@/img/warningIcon.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Clase, Docente } from '@prisma/client'
import ModalClase from './ModalClase'

export default function Clase({
	clase,
	actualizarClases
}: {
	clase: Clase
	actualizarClases: any
}) {
	//useState para guardar los registros alumnoClases
	const [alumnoClases, setAlumnoClases] = useState([])
	const [docentes, setDocentes] = useState<Docente[] | null>(null)

	useEffect(() => {
		// Se obtienen todos los docentes disponibles (que no estén vetados)
		// para no hacer fetch por cada clase
		fetch('api/docente/obtenerDisponibles')
			.then((res) => res.json())
			.then((data) => setDocentes(data))

		/*Se obtienen todos los registros AlumnoClase */
		fetch('api/AlumnoClase').then((response) => {
			if (response.ok) {
				return response.json().then((data) => setAlumnoClases(data)) //Los registros se guardan en alumnoClases
			} else {
				alert('Error al encontrar los registros AlumnoClase')
			}
		})
	}, [clase]) //Se ejecuta cada vez que se modifica la clase

	//Declaración de variable cupo para mostrar el cupo de la clase
	let cupo

	//Si hay registros de alumnoClases se hace lo siguiente:
	if (alumnoClases.length > 0) {
		/*Se filtran los registros alumnoClase que esten relacionados con esta clase */
		let alumnosInscritos = alumnoClases.filter(
			(alumnoClase: any) => alumnoClase.claseId === clase.id
		)
		//Se determinan los alumnos inscritos dependiendo de la cantidad de registros que concuerden
		cupo = alumnosInscritos.length + '/' + clase.cupoMax
	} else {
		cupo = '0/' + clase.cupoMax //Si no hay registros de plano se declaran los alumnos inscritos como 0
	}

	/*CONTENIDO DE LA PAGINA 
  Se muestran solo el nombre, dias, hora y el cupo con formato, también la imagen de advertencia 
  en caso de que no tenga docente.
  */
	return (
		<>
			<div className="grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg">
				<div className="flex justify-center items-center col-span-1">
					{
						//Si el idDocente es null significa que no tiene docente, por lo que se muestra la imagen de advertencia
						clase.idDocente === null && (
							<Image
								src={warningIcon}
								alt="¡Esta clase no tiene un profesor asignado!"
								className="w-8 h-8"
								title="¡Esta clase no tiene un profesor asignado!"
							/>
						)
					}
				</div>
				<div className="col-span-2">{clase.nombre}</div>
				<div className="col-span-2">{clase.dias}</div>
				<div className="col-span-2">{clase.hora}</div>
				<div className="col-span-2">{cupo}</div>
				<ModalClase
					clase={clase}
					actualizarClases={actualizarClases}
					docentes={docentes}
				/>
			</div>
		</>
	)
}
