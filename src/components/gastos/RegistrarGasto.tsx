import React, { useState } from "react"
import Modal from "react-modal"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Input from "../form/Input"
import Label from "../form/Label"
import { useForm } from "react-hook-form"
import { sucursalContext } from "@/hooks/sucursalContext"
import { categoriasGasto } from "@/lib/data"
import Select from "../form/Select"
import TextArea from "../form/TextArea"
import { convertirAStringFecha } from "@/lib/utils"

function RegistrarClase({ actualizarGastos }: {
	actualizarGastos: any
}) {
	//useState para manejar el abrir y cerrar el modal
	const [modalOpen, setModalOpen] = useState(false)
	const context = sucursalContext((state: any) => state.context)
	const [monto, setMonto] = useState("")

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	//Función para cerrar el modal
	const handleCancelar = () => {
		setModalOpen(false)
	}

	//Funcion para registrar la sucursal en la base de datos
	const handleAceptar = handleSubmit(async (data) => {
		const response = await fetch("/api/gastos/registrar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				gasto: {
					idSucursal: context.id,
					monto: data.monto,
					fecha: data.fecha,
					categoria: data.categoria,
					concepto: data.concepto,
				},
			}),
		})

		const resJSON = await response.json()

		if (response.status === 500) {
			toast.error(resJSON.message)
		} else {
      actualizarGastos()

			toast.success(resJSON.message, {
				className: "text-white px-6 py-4 border-0 rounded-md bg-green-500",
				bodyClassName: "font-semibold text-sm text-green-500",
				autoClose: 2000,
				draggable: false,
				onClose: () => setModalOpen(false),
			})

			reset()
      setMonto("")
		}
	})

	//Función para abrir el modal
	const handleRegistrar = () => {
		reset()
    setMonto("")
		setModalOpen(true)
	}

	return (
		<>
			<button
				className="bg-pink-focus px-4 py-2 text-md rounded-md font-semibold hover:shadow-md hover:shadow-pink-accent hover:-translate-y-1 transition-all duration-25 ease-out"
				onClick={handleRegistrar}
			>
				<span>Registrar gasto</span>
			</button>
			<Modal
				isOpen={modalOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalOpen(false)}
				overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
				className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-lg min-h-min rounded-md text-white"
			>
				<div className="flex items-center justify-center">
					<h1 className="font-bold text-3xl">Alta de gasto</h1>
				</div>
				<form className="flex flex-col p-5 gap-y-3">
					<div>
						<Label
							htmlFor="monto"
							label="Monto"
							error={Boolean(errors.monto?.type === "required")}
							className="block"
						/>
						<Input
							type="text"
							id="monto"
							error={errors.monto}
							className="w-full border text-black border-gray-300 font-bold px-2 rounded-md"
							value={monto}
							placeholder="$0.00"
							onChange={(e) => {
								const value = e.target.value

								// valida que el monto sea un número o un número con punto decimal
								if (value.match(/^\d+(\.\d*)?$/) || value === "") {
									setMonto(value)
								}
							}}
							register={register("monto", {
								required: {
									value: true,
									message: "El monto es requerido.",
								},
								value: monto,
								valueAsNumber: true,
							})}
						/>
					</div>
					<div>
						<Label
							htmlFor="fecha"
							label="Fecha en la que se realizó el gasto"
							error={Boolean(errors.fecha?.type === "required")}
							className="block"
						/>
						<Input
							type="date"
							id="fecha"
							error={errors.fecha}
							className="w-full border text-black border-gray-300 font-bold px-2 rounded-md"
							max={convertirAStringFecha(new Date(), "fr-CA")}
							register={register("fecha", {
								required: {
									value: true,
									message: "La fecha es requerida.",
								},
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
							className="w-full border text-black border-gray-300 font-bold px-2 rounded-md"
							items={categoriasGasto}
							register={register("categoria", {
								required: {
									value: true,
									message: "La categoría es requerida.",
								},
							})}
						/>
					</div>
					<div>
						<Label
							htmlFor="concepto"
							label="Concepto"
							error={Boolean(errors.concepto?.type === "required")}
							className="block"
						/>
						<TextArea
							id="concepto"
							error={errors.concepto}
							className="w-full max-h-32 min-h-9 border text-black border-gray-300 font-bold px-2 rounded-md"
							register={register("concepto", {
								required: {
									value: true,
									message: "El concepto es requerido.",
								},
							})}
						/>
					</div>
				</form>
				<div className="flex justify-center items-center mt-3">
					<button
						className="bg-gray-500 py-1 px-3 rounded-md text-lg shadow-md mr-2 hover:bg-gray-600"
						onClick={handleCancelar}
					>
						Cancelar
					</button>
					<button
						onClick={handleAceptar}
						className="bg-pink-500 py-1 px-3 rounded-md text-lg shadow-md ml-2 hover:bg-pink-600"
					>
						Aceptar
					</button>
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

export default RegistrarClase
