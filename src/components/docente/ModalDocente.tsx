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
import ConfirmacionEliminarDocente from './ConfirmacionEliminarDocente';

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
	const [clases, setClases] = useState<Clase[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errorClases, setErrorClases] = useState(null);

	
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
		const res = await fetch("/api/clase/eliminarDocente", {
		  method: "DELETE",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			idClase,
		  }),
		});
	
		const data = await res.json();
	
		if (data?.error) {
		  toast.error(data.error);
		} else {
		  // Se actualiza la lista de clases
		  
		  // Se actualiza la información de la clase
		  actualizarDocente();
		  toast.success("Clase eliminada correctamente", {
			autoClose: 2000,
		  });
		}
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

					<div className="flex flex-col justify-between">
					{mensajeClase() ? (
						<p className="flex-grow grid place-items-center">
							{mensajeClase()}
						</p>
						) : ( 
							<table className="w-full text-center overflow-hidden text-white">
								 <caption className="font-bold text-xl mb-3">
									Clases
								</caption>
								<thead>
									<tr className="bg-gray-contrast rounded-lg font-normal">
										<th className="py-1">Nombre</th>
										<th className="py-1">Ap. Paterno</th>
										<th className="py-1">Ap. Materno</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{clases?.map((clase, index) => ( 
										<tr key={index} className="border-b-2">
										<td className="py-2">{toTitleCase(clase.nombre)}</td>
										<td className="py-2">{toTitleCase(clase.hora)}</td>
										<td className="py-2">{toTitleCase(clase.dias)}</td>
										<td className="py-2">
											<button
												onClick={() => handleEliminarClase(clase.id)}
												className="bg-rose-600 text-white font-bold w-6 h-6 rounded"
											>
												×
											</button>
										</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
						{/* <ConfirmacionEliminarDocente clase={clases} actualizarDocente={actualizarDocente} setModalOpen={setModalOpen} /> */}
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