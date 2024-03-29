import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn
} from 'react-hook-form'
import { Id, toast } from 'react-toastify'

const InputLogin = ({
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
			className={`text-gray-800 bg-transparent px-1 py-1 rounded-lg w-full ${
				error ? 'border-red-600 outline-red-600' : 'border-transparent'
			}`}
			{...register}
			/>
	)
}

export default InputLogin
