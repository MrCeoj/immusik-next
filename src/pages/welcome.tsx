import BotonLogout from '@/components/boton-logout'

export default function Welcome() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div className="bg-white/85 p-8 rounded-lg">
				<h1 className="text-center text-4xl font-bold mb-4 text-black">
					Bienvenido
				</h1>
				<p className="text-center text-lg text-gray-600">
					Esta es la página de bienvenida
				</p>
			</div>
			<BotonLogout />
		</div>
	)
}
