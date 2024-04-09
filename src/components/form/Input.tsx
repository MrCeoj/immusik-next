import { useEffect, useRef } from 'react'
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn
} from 'react-hook-form'
import { Id, toast } from 'react-toastify'
import { cn } from '@/lib/utils'

const Input = ({
	type,
	id,
	defaultValue,
	defaultChecked,
	placeholder,
	error,
	register,
	className
}: {
	type: string
	id: string
	defaultValue?: string
	defaultChecked?: boolean
	placeholder?: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
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
			defaultValue={defaultValue}
			defaultChecked={defaultChecked}
			placeholder={placeholder}
			className={cn('border text-gray-800 px-1 py-1 rounded', className, {
				'border-red-600 outline-red-600': error
			})}
			{...register}
		/>
	)
}

export default Input
