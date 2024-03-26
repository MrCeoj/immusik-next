import FormLogin from '@/components/form-login'

export function getServerSideProps() {
	return {
		props: { title: 'Login' }
	}
}

// Página de registro de usuario
export default function Login() {
	return (
		<div className="login h-screen flex items-center justify-center">
			<div className="bg-white/85 p-8 rounded-lg">
				<h1 className="text-center text-4xl font-bold mb-4 text-black">
					Iniciar Sesión
				</h1>
				<FormLogin />
			</div>
		</div>
	)
}
