'use client'

import { useForm } from 'react-hook-form'
import Label from './form-label'
import Input from './form-input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Componente que contiene el formulario de registro
export default function FormRegistro() {
	// useForm para manejar los inputs del formulario
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = handleSubmit(async (data) => {
		const res = await fetch('/api/auth/registro', {
			method: 'POST',
			body: JSON.stringify({
				usuario: {
					nombre: data.nombre,
					correo: data.correo,
					contrasena: data.contrasena
				},
				contrasenaMaestra: data.contrasenaMaestra
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const resJSON = await res.json()

		if (res.status === 500) {
			toast.error(resJSON.error, { toastId: resJSON.error })
		} else {
			toast.success(resJSON.message, { toastId: resJSON.message })
		}
	})

	return (
		<>
			<ToastContainer />
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-4 bg-gray-300 p-8 rounded-md"
			>
				<div className="flex flex-col max-w-82 min-w-72 relative">
					<Label
						htmlFor="nombre"
						label="Nombre de usuario"
						error={Boolean(errors.nombre?.type === 'required')}
					/>
					<Input
						type="text"
						id="nombre"
						placeholder="Nombre de usuario"
						error={errors.nombre}
						register={register('nombre', {
							required: {
								value: true,
								message: 'El nombre de usuario es requerido.'
							},
							minLength: {
								value: 6,
								message: 'Nombre de usuario debe tener mínimo 6 caracteres.'
							}
						})}
					/>
				</div>
				<div className="flex flex-col max-w-82 min-w-72 relative">
					<Label
						htmlFor="correo"
						label="Correo Electrónico"
						error={Boolean(errors.correo?.type === 'required')}
					/>
					<Input
						type="email"
						id="correo"
						placeholder="Correo electrónico"
						error={errors.correo}
						register={register('correo', {
							required: {
								value: true,
								message: 'El correo electrónico es requerido.'
							},
							pattern: {
								value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
								message: 'El correo electrónico no es válido.'
							}
						})}
					/>
				</div>
				<div className="flex flex-col max-w-82 min-w-72 relative">
					<Label
						htmlFor="contrasena"
						label="Contraseña"
						error={Boolean(errors.contrasena?.type === 'required')}
					/>
					<Input
						type="password"
						id="contrasena"
						placeholder="Contraseña"
						error={errors.contrasena}
						register={register('contrasena', {
							required: {
								value: true,
								message: 'La contraseña es requerida.'
							},
							minLength: {
								value: 8,
								message: 'Contraseña debe tener mínimo 8 caracteres.'
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
								message:
									'La contraseña debe tener al menos una mayúscula, una minúscula y un número.'
							}
						})}
					/>
				</div>
				<div className="flex flex-col max-w-82 min-w-72 relative">
					<Label
						htmlFor="contrasenaMaestra"
						label="Contraseña maestra"
						error={Boolean(errors.contrasenaMaestra?.type === 'required')}
					/>
					<Input
						type="password"
						id="contrasenaMaestra"
						placeholder="Contraseña maestra"
						error={errors.contrasenaMaestra}
						register={register('contrasenaMaestra', {
							required: {
								value: true,
								message: 'La contraseña maestra es requerida.'
							}
						})}
					/>
				</div>
				<button className="rounded-md bg-primary px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-300">
					Aceptar
				</button>
			</form>
		</>
	)
}
