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
	register
}: {
	type: string
	id: string
	placeholder: string
	error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
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
			className={`text-gray-800 px-2 py-1 pr-6 rounded-md border-2 ${
				error ? 'border-red-600 outline-red-600' : 'border-transparent'
			}`}
			{...register}
		/>
	)
}

export default Input
