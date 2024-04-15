'use client'

import { useForm } from 'react-hook-form'
import Label from './form/Label'
import InputLogin from './form/InputLogin'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { convertirAMinutosYSegundos } from '@/lib/utils'

// Componente que contiene el formulario de inicio de sesión
export default function LoginUsuario() {
	// useForm para manejar los inputs del formulario
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const router = useRouter()
	const TIEMPO_LIMITE = 1000 * 30 // 30 segundos
	const INTENTOS_MAXIMOS = 5
	const [intentosRestantes, setIntentosRestantes] = useState(INTENTOS_MAXIMOS)
	const [tiempoRestante, setTiempoRestante] = useState<null | number>(null)
	const [intentoBloqueado, setIntentoBloqueado] = useState(false)

	useEffect(() => {
		// Si los intentos restantes llegan a 0, se bloquea el formulario,
		// se muestra un toast con el mensaje de error y se limpian los campos
		if (intentosRestantes === 0) {
			setIntentoBloqueado(true)
			// Iniciar el tiempo restante
			setTiempoRestante(TIEMPO_LIMITE)
		}
	}, [intentosRestantes])

	useEffect(() => {
		let intervalo: NodeJS.Timeout

		// Si el número de intentos restantes es 0, se inicia el tiempo restante
		if (tiempoRestante !== null) {
			// Actualizar el tiempo restante cada segundo
			intervalo = setInterval(() => {
				setTiempoRestante(tiempoRestante - 1000)
			}, 1000)
		}

		// Si el tiempo restante llega a 0, se reinician los intentos restantes y el tiempo restante
		if (tiempoRestante === 0) {
			setIntentosRestantes(INTENTOS_MAXIMOS)
			setTiempoRestante(null)
			setIntentoBloqueado(false)
		}

		// Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
		return () => {
			clearInterval(intervalo)
		}
	}, [tiempoRestante])

	const onSubmit = handleSubmit(async (data) => {
		// Si el intento está bloqueado, no se envía la petición
		if (intentoBloqueado) return

		const res = await signIn('credentials', { ...data, redirect: false })
		// Si hay un error, se muestra un toast con el mensaje de error
		if (res?.error) {
			const nuevosIntentosRestantes = intentosRestantes - 1
			// Si quedan menos de 3 intentos, se muestra el número de intentos restantes
			const mensaje =
				res.error +
				(nuevosIntentosRestantes < 3
					? `. Intentos restantes: ${nuevosIntentosRestantes}`
					: '')
			// Si quedan intentos, se muestra el toast con el mensaje de error
			nuevosIntentosRestantes > 0 && toast.error(mensaje, { toastId: mensaje })
			setIntentosRestantes(nuevosIntentosRestantes)
		}
		// Si el inicio de sesión es exitoso, se redirecciona a la página de inicio
		else {
			router.push('/inicio')
		}
	})

	return (
		<>
			<ToastContainer />
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-4 bg-gray-300 p-8 rounded-md"
			>
				<div className="flex flex-col max-w-82 min-w-72">
					<Label
						htmlFor="nombre"
						label="Usuario"
						error={Boolean(errors.nombre?.type === 'required')}
					/>
					<InputLogin
						type="text"
						id="nombre"
						placeholder="Usuario"
						error={errors.nombre}
						iconFile="user.png"
						register={register('nombre', {
							required: {
								value: true,
								message: 'El nombre de usuario es requerido.'
							},
							minLength: {
								value: 6,
								message: 'Nombre de usuario debe tener mínimo 6 caracteres.'
							},
							disabled: intentoBloqueado
						})}
					/>
				</div>
				<div className="flex flex-col max-w-82 min-w-72">
					<Label
						htmlFor="contrasena"
						label="Contraseña"
						error={Boolean(errors.contrasena?.type === 'required')}
					/>
					<InputLogin
						type="password"
						id="contrasena"
						placeholder="Contraseña"
						error={errors.contrasena}
						iconFile="key.png"
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
							},
							disabled: intentoBloqueado
						})}
					/>
				</div>
				<button
					disabled={intentoBloqueado}
					className="rounded-md bg-pink-accent px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-300 disabled:opacity-50 disabled:pointer-events-none disabled:select-none"
				>
					Acceder
				</button>
			</form>
			{tiempoRestante && (
				<p className="text-center mb-2">
					Intenta de nuevo en {convertirAMinutosYSegundos(tiempoRestante)}
				</p>
			)}
		</>
	)
}
