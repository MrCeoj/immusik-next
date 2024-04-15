import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn
} from 'react-hook-form'
import { Id, toast } from 'react-toastify'
import { cn } from '@/lib/utils'

const InputLogin = ({
	type,
	id,
	placeholder,
	error,
	register,
	iconFile
}: {
	type: string
	id: string
	placeholder: string
	error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
	iconFile: string
}) => {
	const toastId = useRef(null as Id | null)

	useEffect(() => {
		if (error?.message) {
			toastId.current = toast.error(error?.message?.toString(), {
				toastId: error?.message?.toString(),
				autoClose: false
			})
		}

		return () => toast.dismiss(toastId.current as Id)
	}, [error?.message])

	const handleClick = () => document.getElementById(id)?.focus()

	return (
		<div className="relative">
			<Image
				src={require('@/img/' + iconFile)}
				alt={''}
				width={30}
				onClick={handleClick}
				className="p-1 opacity-40 absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer"
			/>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={cn(
					'text-gray-800 bg-transparent pl-8 pr-1 py-1 rounded-lg w-full border-2 disabled:pointer-events-none disabled:select-none',
					error ? 'border-red-600 outline-red-600' : 'border-gray-500'
				)}
				{...register}
			/>
		</div>
	)
}

export default InputLogin
