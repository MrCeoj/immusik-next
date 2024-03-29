'use client'

import { signOut, useSession } from 'next-auth/react'
import {
	UserIcon,
	ArrowLeftStartOnRectangleIcon
} from '@heroicons/react/16/solid'

export default function BarraNavegacionAdmin() {
	const { data: session } = useSession()

	return (
		<div className="w-screen flex items-center bg-primary fixed top-0 z-50 rounded-lg mt-1 px-1 text-white">
			<UserIcon className="w-10 m-1" />
			{session?.user && (
				<h1 className="font-bold text-white text-2xl ml-3">
					{session?.user?.name}
				</h1>
			)}
			<ArrowLeftStartOnRectangleIcon
				onClick={() => signOut()}
				className="w-10 m-1 ml-auto cursor-pointer"
			/>
		</div>
	)
}
