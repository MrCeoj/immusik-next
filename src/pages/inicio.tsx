import Image from 'next/image'
import imgFondo from '@/img/immusik-inicio.png'
import logoImmusik from '@/img/immusik.png'
import Link from 'next/link'
import { useSucursales } from '@/hooks/sucursal'
import toTitleCase from '@/lib/toTitleCase'
import BarraNavegacionAdmin from '@/components/barraNavegacionAdmin'

export default function Inicio() {
	const [sucursales] = useSucursales()
	return (
		<div className="bg-black min-h-screen flex flex-col items-center px-2 py-4 md:flex-row md:justify-evenly md:px-4">
			<Image
				src={imgFondo}
				aria-hidden="true"
				alt="Salón de clases de IMMUSIK"
				className="absolute h-screen w-screen top-0 right-0 object-cover opacity-20"
			/>
			<BarraNavegacionAdmin />
			<div className="w-full md:w-1/4 z-10">
				<Image
					src={logoImmusik}
					width={280}
					height={100}
					alt="Logo de IMMUSIK"
					className="mx-auto"
				/>
				<h1 className="text-center text-4xl font-bold text-white">
					¡Bienvenido!
				</h1>
			</div>
			<div className="flex flex-col gap-4 z-10 mt-8 md:mt-0 w-3/4 md:w-1/3">
				{sucursales?.map((sucursal, index) => (
					<Link
						key={index}
						href={`/sucursal/${sucursal.id}`}
						className="gradient-border bg-gradient-to-r from-primary/60 to-primary/20 text-white text-2xl text-center font-bold py-5 rounded-xl shadow-xl backdrop-blur-md"
					>
						{toTitleCase(sucursal.nombre)}
					</Link>
				))}
			</div>
		</div>
	)
}
