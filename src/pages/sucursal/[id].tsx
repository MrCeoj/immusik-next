import { useSucursal } from '@/hooks/sucursal'
import toTitleCase from '@/lib/utils'
import { useRouter } from 'next/router'
import BarraNavegacionAdmin from '@/components/barraNavegacionAdmin'
import Tarjeta from '@/components/sucursal/Tarjeta'
import { fetchSucursal } from '@/business/SucursalDelegate'
import { Sucursal } from '@prisma/client'

/**
 * Función que ayuda a establecer el título de la página con el nombre de la sucursal.
 * Se ejecuta en el servidor por lo que en lugar de hacer una petición a la API,
 * se hace una petición a la base de datos directamente.
 *
 * @param context Contexto de la página
 * @returns Props de la página con el título de la sucursal
 **/

export async function getServerSideProps(context: any) {
	const id = context.params.id
	const result = (await fetchSucursal(Number(id))) as Sucursal

	if (!result) {
		return {
			props: { titleNotFound: true }
		}
	}

	return {
		props: { title: toTitleCase(result.nombre) }
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
