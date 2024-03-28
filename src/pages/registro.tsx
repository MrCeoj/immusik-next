import FormRegistro from '@/components/FormRegistroUsuario'
import BarraNavegacion from '@/components/barraNavegacion'

// Función que establece el título de la página
export function getServerSideProps() {
	return {
		props: { title: 'Registro' }
	}
}

// Página de registro de usuario
export default function RegistroUsuario() {
	return (
		<>
			<BarraNavegacion titulo="Registro de Usuarios" />
			<div className="login h-screen flex justify-center pt-12">
				<div className="bg-white/85 p-8 rounded-lg">
					<h1 className="text-center text-4xl font-bold mb-4 text-black">
						Registrarse
					</h1>
					<FormRegistro />
				</div>
			</div>
		</>
	)
}
