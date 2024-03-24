import { Metadata } from 'next'
import RegisterForm from '@/components/register-form'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Registrarse'
}

// Página de registro de usuario
export default function Login() {
	return (
		<>
			<div className="w-screen flex items-center bg-primary h-1/8 fixed top-0 z-50 rounded-lg mt-1 ">
				<Image src={require('@/img/immusik.png')} alt={'hola'} className="w-20 m-1"/>
				<h1 className="font-bold text-white text-2xl ml-3">Registro de Usuarios</h1>
				<Link onClick={() => window.history.back()} href={''} className="ml-auto pr-1">
					<Image src={require('@/img/back.png')} alt={'foto'}/>
				</Link>
			</div>
			<div className="login h-screen flex items-center justify-evenly">
				<div className="bg-white/85 p-8 rounded-lg">
					<h1 className="text-center text-4xl font-bold mb-4 text-black">
						Registrarse
					</h1>
					<RegisterForm />
				</div>
			</div>
		</>
	)
}
