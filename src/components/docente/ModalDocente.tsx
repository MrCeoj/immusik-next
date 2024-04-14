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

export default function ModalDocente({ 
	docente,
	actualizarDocente
	}:{
		docente: Docente,
		actualizarDocente: any
	}){
	
	// useState para guardar la visibilidad del modal
	const [modalOpen, setModalOpen] = useState(false);
	const [diasClase, setDiasClase] = useState<string[]>([]);
	// useState para guardar las clases que imparte el docente
	const [clases, setClases] = useState<Clase[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorClases, setErrorClases] = useState(null);

	const [showConfirmationModal, setShowConfirmationModal] = useState(false);

	//useState para el cambio de estado
	const [estado, setEstado] = useState<string>("");
	const [masterKey, setMasterKey] = useState("");
	const [isMasterKeyModalOpen, setIsMasterKeyModalOpen] = useState(false);
	
	// useForm para manejar los inputs del formulario
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	// Cargar las clases del docente cuando el componente se monta
	useEffect(() => {
		const loadClases = async () => {
		  setIsLoading(true);
		  const res = await fetch(`/api/docente/${docente.id}/clasesDocente`);
		  const data = await res.json();
		  data.error ? setErrorClases(data.error) : setClases(data);
		  setIsLoading(false);
		};
		loadClases();
	  }, [docente.id]);

	  const mensajeClase = () => {
		if (errorClases) {
		  return errorClases;
		}
	
		if (isLoading) {
		  return "Cargando...";
		} else if (clases === null || clases.length === 0) {
		  return "No imparte ninguna clase";
		}
		return null;
	  };

	  const handleVerDetalles = async () => {
		/**
		 * Se resetean los valores del formulario para evitar que
		 * se guarden los valores de la clase anterior
		 */
		reset();
		// se abre el modal primero para dar una experiencia más fluida
		setModalOpen(true);
	  };

	//funcion para eleiminar al docente de la clase 
	const handleEliminarClase = async (idClase: number) => {
		handleOpenConfirmationModal();
		try{
		const response = await fetch("/api/clase/eliminarDocente", {
		  method: "DELETE",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			id: idClase
		  }),
		});

		if (response.ok) {

			// Docente eliminado exitosamente
			toast.success("Docente eliminado", {
				autoClose: 3000,
			});
			clases && setClases(clases.filter((clase) => clase.id !== idClase));
			actualizarDocente();
		  } else {
			const error = await response.json();
			toast.error(`Error al eliminar docente: ${error.error}`);
		  }
		} catch (error) {
		  toast.error("Ocurrió un error al eliminar el docente");
		  console.error("Error al eliminar docente:", error);
		}
	  };

	//función para abrir el modal de confirmación
	const handleOpenConfirmationModal = () => {
		setShowConfirmationModal(true);
	};

	//función para cerrar el modal de confirmación y cancelar la eliminación
	const handleCloseConfirmationModal = () => {
		setShowConfirmationModal(false);
	};
	
	const handleConfirmEliminarClase = async (idClase: number) => {
		await handleEliminarClase(idClase);
		setShowConfirmationModal(false); // Cierra el modal de confirmación después de eliminar la clase
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
			actualizarDocente()
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
					Detalles del docente
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
								label="CURP"
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

					<div className="flex flex-col justify-around">
						<div className="flex flex-col justify-between ">
						{mensajeClase() ? (
							<p className="flex-grow grid place-items-center">
								{mensajeClase()}
							</p>
							) : ( 
								<table className="w-full text-center text-white overflow-hidden">
									<caption className="font-bold text-xl mb-3">
										Clases
									</caption>
									<thead>
										<tr className="bg-gray-contrast rounded-lg font-normal">
											<th className="py-1">Nombre</th>
											<th className="py-1">Sucursal</th>
											<th className="py-1">Día</th>
											<th></th>
										</tr>
									</thead>
									<tbody className="overflow-y-auto">
										{clases?.map((clase, index) => ( 
											<tr key={index} className="border-b-2">
											<td className="py-2">{toTitleCase(clase.nombre)}</td>
											<td className="py-2">{toTitleCase(clase.hora)}</td>
											<td className="py-2">{toTitleCase(clase.dias)}</td>
											<td className="py-2">
												<button
													onClick={handleOpenConfirmationModal}
													className="bg-rose-600 text-white font-bold w-6 h-6 rounded"
												>
													×
												</button>
												<Modal
													isOpen={showConfirmationModal}
													ariaHideApp={false}
													onRequestClose={handleCloseConfirmationModal}
													contentLabel="Confirm Delete Docente"
													className="relative flex flex-col items-center bg-secciones bg-opacity-95 p-6 w-full max-w-xl min-h-min rounded-md text-white"
													overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
												>
													<div>
													<h2 className="text-2xl font-bold mb-4">
														¿Estás seguro de que quieres eliminar al docente de la clase?
													</h2>
													<div className="flex justify-end">
													<button
														className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-4"
														onClick={handleCloseConfirmationModal}
													>
														Cancelar
													</button>
													<button
														className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
														onClick={() => handleConfirmEliminarClase(clase.id)} 
													>
														Eliminar
													</button>
													</div>
													</div>
												</Modal>
											</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</div>
						<div className="">
							<h1 className="font-bold text-xl text-center mt-5 text-white">Cambiar estado del docente</h1>
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
									} else {
									setEstado(e.target.value);
									}
								}}
								className="border-2 border-primary text-primary min-w-[170px] max-w-[200px] text-center bg-transparent cursor-pointer"
								aria-label="Cambiar estado"
								disabled={estado === "VETADO"}
								>
								{docente.estado === "ACTIVO" ? (
									<>
										<option value="ACTIVO">ACTIVO</option>
										<option value="VETADO">VETADO</option>
									</>
								) : (
									<>
										<option value="INACTIVO">INACTIVO</option>
										<option value="VETADO">VETADO</option>
									</>
								)}
								</select>
							</div>
							<Modal
								isOpen={isMasterKeyModalOpen}
								ariaHideApp={false}
								onRequestClose={() => {
								setMasterKey("");
								setIsMasterKeyModalOpen(false);
								}}
								className="relative flex flex-col items-center bg-secciones bg-opacity-95 p-6 w-full max-w-xl min-h-min rounded-md text-white"
								overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
							>
								<div className="">
								<div className="">
									<h2 className="text-xl font-bold mb-4 text-white">
									Ingresar contraseña Maestra para vetar a un docente
									</h2>
									<h3>Esta acción será permanente</h3>
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

										const { verified } = await res.json();

										if (verified) {
										await fetch(`/api/docente/changeEstado`, {
											method: "PATCH",
											headers: {
											"Content-Type": "application/json",
											},
											body: docente.id.toString(),
										});
										setEstado("VETADO");
										setIsMasterKeyModalOpen(false);
										} else {
										alert("Contraseña maestra incorrecta");
										}
									}}
									className="bg-red-500 py-1 px-5 rounded-md hover:bg-red-700 text-white mr-3"
									>
									Confirmar
									</button>
									<button
									onClick={() => {
										setMasterKey("");
										setIsMasterKeyModalOpen(false);
									}}
									className="mr-1 bg-gray-500 py-1 px-5 rounded-md hover:bg-gray-700 text-white"
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
    );
}