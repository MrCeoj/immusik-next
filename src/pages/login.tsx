import FormLogin from '@/components/FormLogin'
import Image from 'next/image'

export function getServerSideProps() {
	return {
		props: { title: 'Login' }
	}
}

// Página de registro de usuario
export default function Login() {
	return (
		<div className="relative h-screen">
			<Image
				src={require('@/img/fondo-login.jpg')}
				alt={'foto fondo'}
				layout="fill"
				objectFit="cover"
				className="z-0"
			/>
			<div className="login h-screen flex items-center justify-center">
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
				<div className="p-8 rounded-lg z-50 flex">
					<div className="text-center mb-4 pr-20 flex justify-center items-center">
						<Image
							src={require('@/img/immusik.png')}
							alt={'foto logo'}
							width={400}
							height={400}
						/>
					</div>
					<div className="bg-gray-300 rounded-md pt-6">
						<h1 className="text-center text-primary text-4xl font-bold tracking-tight">
							Iniciar sesión
						</h1>
						<FormLogin />
					</div>
				</div>
			</div>
		</div>
	)
}
