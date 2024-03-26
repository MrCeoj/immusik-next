import { signOut } from 'next-auth/react'

export default function BotonLogout() {
	return (
		<button
			onClick={() => signOut()}
			className="bg-blue-500 text-white px-4 py-2 rounded-md"
		>
			Cerrar sesión
		</button>
	)
}
