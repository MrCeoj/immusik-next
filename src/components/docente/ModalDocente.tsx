import { Docente } from '@prisma/client'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from '../form/Label'
import { toArrayDiasClase, toStringDiasClase, toTitleCase } from '@/lib/utils'
import 'react-toastify/dist/ReactToastify.css'
import Input from '../form/Input'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'

export default function ModalDocente({
    docente,
    actualizarDocentes
}:{
    docente: Docente
    actualizarDocentes: any
}){
    // useState para guardar la visibilidad del modal
	const [modalOpen, setModalOpen] = useState(false)
	// useState para guardar los docentes
	const [docentes, setdocentes] = useState<Docente[] | null>(null)
	// useState para guardar un mensaje de error ocurrido durante la obtención de los alumnos
	const [errorDocente, setErrorDocente] = useState(null)
	// useForm para manejar los inputs del formulario
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

    const handleVerDetalles = async () => {
		/**
		 * Se resetean los valores del formulario para evitar que
		 * se guarden los valores de la clase anterior
		 */
		reset()
		// se abre el modal primero para dar una experiencia más fluida
		setModalOpen(true)

		// Si no se han obtenido los alumnos se hace una petición a la API para obtenerlos
		if (docentes === null) {
			const res = await fetch(`/api/docente/${docente.id}`)
			const data = await res.json()

			// data.error ? setErrorAlumnos(data.error) : setAlumnos(data)
		}
	}

    const onSubmit = handleSubmit(async (data) => {
		// Se verifica que la información haya sido modificada
		if (
			docente.nombre === data.nombre.toUpperCase() &&
			docente.aPaterno === data.nombre.toUpperCase()  &&
			docente.aMaterno === data.nombre.toUpperCase() &&
			docente.telefono ===  data.telefono.toUpperCase() &&
			docente.curp === data.curp.toUpperCase()
		) {
			return
		}

        const res = await fetch('/api/docente/mod', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: docente.id,
				...data
			})
		})

        const dataRes = await res.json()

		// Si hay un error, se muestra un toast con el mensaje de error
		if (dataRes?.error) {
			toast.error(dataRes.error)
		}
		// Si la clase se modificó correctamente, se muestra un toast con un mensaje de éxito
		else {
			// Actualiza la información de la clase
			actualizarDocentes()
			toast.success('Clase modificada correctamente')
		}
	})

    return(
        <>
            <button onClick={handleVerDetalles} className="col-span-1 underline">
				Ver detalles
			</button>
            <Modal
				isOpen={modalOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalOpen(false)}
				overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
				className="relative bg-white p-6 w-full max-w-5xl min-h-min rounded"
			>
				<ToastContainer />
				<h1 className="font-bold text-4xl mb-3 text-center">
					Detalles de la clase
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<form onSubmit={onSubmit} className="flex flex-col gap-1">
						<div>
							<Label
								htmlFor="nombre"
								label="Nombre"
								error={Boolean(errors.nombre?.type === 'required')}
								className="block"
							/>
							<Input
								type="text"
								id="nombre"
								error={errors.nombre}
								className="w-full border border-gray-300 font-bold px-2"
								register={register('nombre', {
									required: {
										value: true,
										message: 'El nombre de clase es requerida.'
									},
									value: toTitleCase(docente.nombre)
								})}
							/>
						</div>
						
						
						<button className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center">
							Guardar cambios
						</button>
					</form>

				</div>
				<button
					onClick={() => setModalOpen(false)}
					className="absolute top-4 right-4 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
				>
					X
				</button>
			</Modal>
        </>
    )
}