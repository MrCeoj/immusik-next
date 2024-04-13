import { Alumno, Clase, Docente } from '@prisma/client'
import { Sucursal } from "@/entities";
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from '../form/Label'
import { toArrayDiasClase, toStringDiasClase, toTitleCase } from '@/lib/utils'
import 'react-toastify/dist/ReactToastify.css'
import Input from '../form/Input'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import router, { useRouter } from 'next/router';
import { XMarkIcon } from '@heroicons/react/16/solid';

export default function ModalDocente({ docente }:{docente: Docente}){
	type ClaseSucursal = {
		id: number;
		nombre: string;
		dias: string;
	
		sucursal: Sucursal;
	  };
	const [tempEstado, setTempEstado] = useState("");
	const router = useRouter();
	const [masterKey, setMasterKey] = useState("");
	const [isMasterKeyModalOpen, setIsMasterKeyModalOpen] = useState(false);
	const { id } = router.query;
	const [clases, setClases] = useState([{}] as ClaseSucursal[]);
	const [estado, setEstado] = useState<string>("");
	const [color, setColor] = useState("");
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

	};

	const obtenerDatos = useCallback(async () => {
		if (!id) return;
		const response = await fetch(`/api/docente/${id}`);
		const data = await response.json();
		console.log(data);
		if (data && data.data && data.clases) {
		  setdocentes(data.data);
		  setClases(data.clases);
		  switch (data.data.estado) {
			case "VETADO":
			  setEstado("VETADO");
			  setColor("bg-red-500");
			  break;
			default:
			  if (clases.length > 0) {
				setEstado("ACTIVO");
				setColor("bg-green-500");
			  } else {
				setEstado("INACTIVO");
				setColor("bg-yellow-300");
			  }
		  }
		  console.log("fetcheado");
		}
	  }, [clases.length, id]);

	  useEffect(() => {
		if (id) {
		  obtenerDatos();
		}
	  }, [id, obtenerDatos, estado]);

	  const deleteDocenteFromClase = async (id: number) => {
		const response = await fetch(`/api/clase/eliminarDocente`, {
		  method: "DELETE",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ id: id }),
		})
		  .then((res) => res.json())
		  .then((data) => {
			if (data.error) {
			  toast(data.error);
			} else {
			  console.log("se elimino 1");
			  obtenerDatos();
			}
		  });
	
		return response;
	  };

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

        const res = await fetch('/api/docente/modificar', {
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
			toast.success('Docente actualizado correctamente')
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
				className="relative bg-customGray p-6 w-full max-w-5xl min-h-min rounded"
			>
				<ToastContainer />
				<h1 className="font-bold text-4xl mb-3 text-center text-white">
					Detalles de la clase
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
					<form onSubmit={onSubmit} className="flex flex-col gap-1 bg-secciones">
						<div>
							<Label
								htmlFor="nombre"
								label="Nombre"
								error={Boolean(errors.nombre?.type === 'required')}
								className="block text-white text-lg"
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

						<div>
							<Label
								htmlFor="aPaterno"
								label="Apellido Paterno"
								error={Boolean(errors.aPaterno?.type === 'required')}
								className="block text-white text-lg"
							/>
							<Input
								type="text"
								id="aPaterno"
								error={errors.aPaterno}
								className="w-full border border-gray-300 font-bold px-2"
								register={register('aPaterno', {
									required: {
										value: true,
										message: 'El apellido es requerido.'
									},
									value: toTitleCase(docente.aPaterno)
								})}
							/>
						</div>

						<div>
							<Label
								htmlFor="aMaterno"
								label="Apellido Materno"
								error={Boolean(errors.aMaterno?.type === 'required')}
								className="block text-white text-lg"
							/>
							<Input
								type="text"
								id="aMaterno"
								error={errors.aMaterno}
								className="w-full border border-gray-300 font-bold px-2"
								register={register('aMaterno', {
									required: {
										value: true,
										message: 'El apellido es requerido.'
									},
									value: toTitleCase(docente.aMaterno)
								})}
							/>
						</div>

						<div>
							<Label
								htmlFor="telefono"
								label="Contacto"
								error={Boolean(errors.telefono?.type === 'required')}
								className="block text-white text-lg"
							/>
							<Input
								type="text"
								id="telefono"
								error={errors.telefono}
								className="w-full border border-gray-300 font-bold px-2"
								register={register('telefono', {
									required: {
										value: true,
										message: 'El Contacto es requerido.'
									},
									value: toTitleCase(docente.telefono)
								})}
							/>
						</div>

						<div>
							<Label
								htmlFor="curp"
								label="curp"
								error={Boolean(errors.curp?.type === 'required')}
								className="block text-white text-lg"
							/>
							<Input
								type="text"
								id="curp"
								error={errors.curp}
								className="w-full border border-gray-300 font-bold px-2"
								register={register('curp', {
									required: {
										value: true,
										message: 'El CURP es requerido.'
									},
									value: toTitleCase(docente.curp).toUpperCase()
								})}
							/>
						</div>

						<button className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center">
							Guardar cambios
						</button>
					</form>
					<div className="text-white grid">
						<div className="text-center">
							<h1 className="font-bold text-2xl">Clases</h1>
							<div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-12 mt-3 gap-2 px-5">
								<div className="text-lg font-bold col-span-4 text-center">Nombre</div>
								<div className="text-lg font-bold col-span-4 text-center">Sucursal</div>
								<div className="text-lg font-bold col-span-4 text-center">Días</div>
							</div>
						</div>
						<div className="text-center">
							<h1 className="font-bold text-2xl">Cambiar estado del docente</h1>
							<div className="flex justify-center my-5">
								<select
									value={estado}
									onChange={(e) => {
									if (estado === "VETADO") {
										return;
									}
									if (e.target.value === "VETADO") {
										setMasterKey("");
										setIsMasterKeyModalOpen(true);
										setTempEstado(e.target.value);
									} else {
										setEstado(e.target.value);
										setTempEstado(e.target.value);
									}
									}}
									className={`border-2 ${
									estado === "VETADO"
										? "border-gray-500 text-gray-500"
										: "border-primary text-primary"
									} min-w-[170px] max-w-[200px] text-center bg-transparent cursor-pointer`}
									aria-label="Cambiar estado"
									disabled={estado === "VETADO"}
								>
									{estado === "ACTIVO" && <option value="ACTIVO">ACTIVO</option>}
									<option value="INACTIVO">INACTIVO</option>
									<option value="VETADO">VETADO</option>
								</select>
							</div>
							<Modal
								isOpen={isMasterKeyModalOpen}
								onRequestClose={() => {
									setMasterKey("");
									setIsMasterKeyModalOpen(false);
								}}
							>
							<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent">
								<div className="bg-customGray p-6 rounded-lg shadow-lg">
								<h2 className="text-xl font-semibold mb-4 text-white">
									Ingresar contraseña Maestra para vetar a un docente
								</h2>
								<h3 className="text-white">Esta acción será permanente</h3>
								<input
									type="password"
									value={masterKey}
									onChange={(e) => setMasterKey(e.target.value)}
									placeholder="Ingresa Contraseña Maestra"
									className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
								/>
								<button
									onClick={async () => {
									const res = await fetch("/api/docente/changeEstado", {
										method: "POST",
										headers: {
										"Content-Type": "application/json",
										},
										body: JSON.stringify({ masterKey }),
									});

									if (docente) {
										const { verified } = await res.json();

										if (verified) {
										await fetch(`/api/docente/changeEstado`, {
											method: "PATCH",
											headers: {
											"Content-Type": "application/json",
											},
											body: docente.id.toString(),
										});
										setEstado(tempEstado);
										setIsMasterKeyModalOpen(false);
										obtenerDatos();
										} else {
										toast("Contraseña Maestra incorrecta");
										}
									}
									}}
									className="bg-pink-500 text-white rounded-md px-4 py-2 mr-2 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)]"
								>
									Confirmar
								</button>
								<button
									onClick={() => {
									setMasterKey("");
									setIsMasterKeyModalOpen(false);
									}}
									className="bg-gray-300 text-gray-800 rounded-md px-4 py-2"
								>
									Cancelar
								</button>
								</div>
							</div>
							</Modal>
						</div>
					</div>
				</div>
				<button
					onClick={() => setModalOpen(false)}
					className="absolute text-white top-4 right-4 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
				>
					X
				</button>
			</Modal>
        </>
    )
}
function setErrorClases(message: any) {
	throw new Error('Function not implemented.')
}

