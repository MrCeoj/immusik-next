import { useState, useEffect } from "react"
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

function RegistrarClase({ actualizarGastos }: { actualizarGastos: any }) {
	const [modalOpen, setModalOpen] = useState(false)
	const context = sucursalContext((state: any) => state.context)
	const [monto, setMonto] = useState("")
	const [formData, setFormData] = useState<any>(null)
	const [minDate, setMinDate] = useState(convertirAStringFecha(new Date(), "fr-CA"))

	useEffect(() => {
		let date = new Date()
		date.setDate(date.getDate()-31)
		setMinDate(date.toISOString().split("T")[0])
	}, [])

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" }) // 'onChange' mode to validate in real-time

	const handleCancelar = () => {
		setModalOpen(false)
	}

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
			setFormData(null)
			setModalOpen(false)
		}
	})

	const handleRegistrar = handleSubmit((data) => {
		setFormData(data)
		if(!data.monto){
			toast.error("Ingresar un monto válido.")
			return
		}
		setModalOpen(true)
	})
	return (
		<>
			<div className="flex flex-col w-3/4">
				<div className="flex items-center justify-center mt-5">
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
							min={minDate}
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
              emptyValue="Seleccionar una categoría"
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
						onClick={handleRegistrar}
						className="bg-pink-500 py-1 px-3 rounded-md text-lg shadow-md ml-2 hover:bg-pink-600"
					>
						Dar de alta
					</button>
					<Modal
						isOpen={modalOpen}
						ariaHideApp={false}
						onRequestClose={() => setModalOpen(false)}
						overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
						className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-xl min-h-min rounded-md text-white"
					>
						<h1 className="text-xl">¿Estás seguro de que deseas registrar el siguiente pago?</h1>
						{formData && (
							<div className="mt-4">
								<p><strong>Monto:</strong> {formData.monto}</p>
								<p><strong>Fecha:</strong> {formData.fecha}</p>
								<p><strong>Categoría:</strong> {formData.categoria}</p>
								<p><strong>Concepto:</strong> {formData.concepto}</p>
							</div>
						)}
						<div className="flex justify-end mt-4">
							<button
								className="bg-gray-500 py-1 px-3 rounded-md text-lg shadow-md mr-2 hover:bg-gray-600"
								onClick={handleCancelar}
							>
								Cancelar
							</button>
							<button
								onClick={handleAceptar}
								className="bg-pink-500 py-1 px-3 rounded-md text-lg shadow-md ml-2 hover:bg-pink-600"
								disabled={!isValid} // Desactiva el botón si el formulario no es válido
							>
								Dar de alta
							</button>
						</div>
					</Modal>
				</div>
			</div>
		</>
	)
}

export default RegistrarClase
