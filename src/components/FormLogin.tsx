'use client'

import { useForm } from 'react-hook-form'
import Label from './form/Label'
import Input from './form/Input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Componente que contiene el formulario de inicio de sesión
export default function LoginUsuario() {
	// useForm para manejar los inputs del formulario
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const router = useRouter()

	const onSubmit = handleSubmit(async (data) => {
		const res = await signIn('credentials', { ...data, redirect: false })
		// Si hay un error, se muestra un toast con el mensaje de error
		if (res?.error) {
			toast.error(res.error)
		}
		// Si el inicio de sesión es exitoso, se muestra un toast con un mensaje de éxito
		else {
			toast.success('Inicio de sesión exitoso', {
				// Redireccionar a la página de inicio después de cerrar el toast
				onClose: () => router.push('/inicio')
			})
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
						label="Usuario"
						error={Boolean(errors.nombre?.type === 'required')}
					/>
					<div className="border-2 border-gray-500 rounded-lg flex">
					<Image src={require("@/img/user.png")} alt={''} width={30} className="p-1 opacity-40" />
					<Input
						type="text"
						id="nombre"
						placeholder="Usuario"
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
				</div>
				<div className="flex flex-col max-w-82 min-w-72 relative">
					<Label
						htmlFor="contrasena"
						label="Contraseña"
						error={Boolean(errors.contrasena?.type === 'required')}
					/>
					<div className="border-2 border-gray-500 rounded-lg flex">
					<Image src={require("@/img/key.png")} alt={''} width={30} className="p-1 opacity-50" />
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
						
				</div>
				<button className="rounded-md bg-primary px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-300">
					Acceder
				</button>
			</form>
		</>
	)
}
