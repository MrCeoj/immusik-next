import {
	convertirAFecha,
	convertirAStringFecha,
	toSentenceCase,
} from "@/lib/utils"
import { Gasto } from "@/entities"
import { useState } from "react"
import Modal from "react-modal"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Label from "../form/Label"
import "react-toastify/dist/ReactToastify.css"
import Input from "../form/Input"
import { categoriasGasto } from "@/lib/data"
import Select from "../form/Select"
import TextArea from "../form/TextArea"

export default function ModalGasto({
	gastoArgs,
	actualizarGastos,
}: {
	gastoArgs: Gasto
	actualizarGastos: any
}) {
	const [gasto, setGasto] = useState<Gasto>(gastoArgs)
	// useState para guardar la visibilidad del modal
	const [modalOpen, setModalOpen] = useState(false)
	const [monto, setMonto] = useState(gasto.monto.toString())

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm()

	// Función que se ejecuta al hacer click en el botón Editar
	// Muestra un modal con la información del gasto
	const handleEditar = async () => {
		/**
		 * Se resetean los valores del formulario para evitar que
		 * se guarden los valores del gasto anterior
		 */
		reset()
		setGasto(gastoArgs)
		setMonto(gastoArgs.monto.toString())
		// se abre el modal primero para dar una experiencia más fluida
		setModalOpen(true)
	}

	const onSubmit = handleSubmit(async (data) => {
		// Se hace una petición a la API para modificar el gasto
		const res = await fetch("/api/gastos/modificar", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: gasto.id,
				...data,
			}),
		})

		const dataRes = await res.json()

		// Si hay un error, se muestra un toast con el mensaje de error
		if (dataRes?.error) {
			toast.error(dataRes.error)
		}

		// Si el gasto se modificó correctamente, se muestra un toast con un mensaje de éxito
		else {
			// Actualiza la información de los gastos
			actualizarGastos()
			toast.success("Gasto modificado correctamente", {
				className: "text-white px-6 py-4 border-0 rounded-md bg-green-500",
				bodyClassName: "font-semibold text-sm text-green-500",
				autoClose: 2000,
				draggable: false,
			})
		}
	})

	return (
		<>
			<button
				onClick={handleEditar}
				className="col-span-1 underline hover:text-pink-500 cursor-pointer"
			>
				Editar (icono de lápiz)
			</button>
			<Modal
				isOpen={modalOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalOpen(false)}
				overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
				className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-lg min-h-min rounded-md text-white"
			>
				<h1 className="font-bold text-4xl mb-3 text-center">Modificar gasto</h1>
				<form onSubmit={onSubmit} className="flex flex-col gap-2">
					<div>
						<Label
							label="Monto"
							htmlFor="monto"
							error={Boolean(errors.monto?.type === "required")}
							className="block"
						/>
						<Input
							type="text"
							id="monto"
							error={errors.monto}
							className="w-full text-black border-gray-300 font-bold px-2 py-1"
							value={monto}
							placeholder="$0.00"
							onChange={(e) => {
								const value = e.target.value

								// valida que el monto sea un número o un número con punto decimal
								if (value.match(/^\d+(\.\d*)?$/) || value === "") {
									setMonto(value)
									setValue("monto", value)
								}
							}}
							register={register("monto", {
								required: {
									value: true,
									message: "El monto es requerido",
								},
								valueAsNumber: true,
							})}
						/>
					</div>
					<div>
						<Label
							htmlFor="fecha"
							label="Fecha"
							error={Boolean(errors.fecha?.type === "required")}
							className="block"
						/>
						<Input
							type="date"
							id="fecha"
							error={errors.fecha}
							className="w-full border text-black border-gray-300 font-bold px-2"
							max={convertirAStringFecha(new Date(), "fr-CA")}
							register={register("fecha", {
								required: {
									value: true,
									message: "La fecha es requerida.",
								},
								value: convertirAStringFecha(
									convertirAFecha(gasto.fecha, "/", "dd/mm/aaaa"),
									"fr-CA"
								),
							})}
						/>
					</div>
					<div>
						<Label
							htmlFor="categoria"
							label="Categoría"
							error={Boolean(errors.categoria?.type === "required")}
							className="block"
						/>
						<Select
							id="categoria"
							error={errors.categoria}
							className="w-full border text-black border-gray-300 font-bold px-2"
							items={categoriasGasto}
							register={register("categoria", {
								required: {
									value: true,
									message: "La categoría es requerida.",
								},
								value: gasto.titulo,
							})}
						/>
					</div>
					<div>
						<Label
							label="Concepto"
							htmlFor="concepto"
							error={Boolean(errors.concepto?.type === "required")}
							className="block"
						/>
						<TextArea
							id="concepto"
							error={errors.concepto}
							className="w-full max-h-32 min-h-9 border text-black border-gray-300 font-bold px-2"
							register={register("concepto", {
								required: {
									value: true,
									message: "El concepto es requerido.",
								},
								value: toSentenceCase(gasto.concepto.trim()),
							})}
						/>
					</div>
					<button className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center disabled:bg-disabled disabled:text-black/75 transition-all duration-75">
						Modificar
					</button>
				</form>
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
