import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn
} from 'react-hook-form'
import { Id, toast } from 'react-toastify'

const Input = ({
	type,
	id,
	placeholder,
	error,
	register,
	className
}: {
	type: string
	id: string
	placeholder: string
	error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
	className?: string
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

	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			className={cn(
				'p-1',
				'text-gray-800 rounded-lg w-full border-2 border-transparent',
				className,
				{ 'border-red-600 outline-red-600': error }
			)}
			{...register}
		/>
	)
}

export default Input
