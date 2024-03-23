import { Metadata } from 'next'
import RegisterForm from '@/components/register-form'

export const metadata: Metadata = {
	title: 'Registrarse'
}

// Página de registro de usuario
export default function Login() {
	return (
		<div className="login h-screen flex items-center justify-evenly">
			<div className="bg-white/85 p-8 rounded-lg">
				<h1 className="text-center text-4xl font-bold mb-4 text-primary">
					Registrarse
				</h1>
				<RegisterForm />
			</div>
		</div>
	)
}
