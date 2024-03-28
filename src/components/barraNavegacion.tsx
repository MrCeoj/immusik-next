import Image from 'next/image'
import Link from 'next/link'

export default function BarraNavegacion({ titulo }: { titulo: string }) {
	return (
		<div className="w-screen flex items-center bg-primary fixed top-0 z-50 rounded-lg mt-1 px-1">
			<Image
				src={require('@/img/immusik.png')}
				alt={'Logo de IMMUSIK'}
				className="w-20 m-1"
			/>
			<h1 className="font-bold text-white text-2xl ml-3">{titulo}</h1>
			<Link
				onClick={() => window.history.back()}
				href={''}
				className="ml-auto pr-1"
			>
				<Image src={require('@/img/back.png')} alt={'Icono para regresar'} />
			</Link>
		</div>
	)
}
