import { Sucursal } from '@prisma/client'
import { useEffect, useState } from 'react'

export function useSucursales() {
	const [sucursales, setSucursales] = useState<Sucursal[]>([])
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch('/api/Sucursal')
			.then((response) => {
				// Solo si la respuesta es exitosa
				if (response.ok) {
					return response.json()
				}
			})
			.then((data: Sucursal[]) => setSucursales(data))
			.catch((error) => setError(error.message))
	}, [])

	return [sucursales, error]
}

export function useSucursal(id: string) {
	const [sucursal, setSucursal] = useState<Sucursal>({
		id: 0,
		nombre: '',
		direccion: ''
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(`/api/sucursal/${id}`)
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
			})
			.then((data) => setSucursal(data))
			.catch((error) => setError(error.message))
	}, [id])

	return [sucursal, error]
}
