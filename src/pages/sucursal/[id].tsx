import { useSucursal } from '@/hooks/sucursal'
import toTitleCase from '@/lib/utils'
import { useRouter } from 'next/router'
import BarraNavegacionAdmin from '@/components/barraNavegacionAdmin'
import Tarjeta from '@/components/sucursal/Tarjeta'

export function getServerSideProps() {
	return {
		props: { title: 'Sucursal' }
	}
}

export default function Inicio() {
	const router = useRouter()
	const id = router.query.id as string
	const [sucursal] = useSucursal(id)

	return (
		<>
			<BarraNavegacionAdmin />
			<div className="bg-[url('../img/fondo.svg')] bg-cover object-cover bg-no-repeat h-screen">
				<div className="pt-32 pb-10">
					<h1 className="text-center font-bold text-5xl">ImMusik</h1>
					<h2 className="text-center text-xl mt-2">
						Sucursal {sucursal?.nombre && toTitleCase(sucursal?.nombre)}
					</h2>
				</div>
				{sucursal && (
					<div className="flex justify-center px-2">
						<Tarjeta sucursal={sucursal} />
					</div>
				)}
			</div>
		</>
	)
}
