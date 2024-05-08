import { ComponentPropsWithoutRef, useEffect, useRef } from 'react'
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn
} from 'react-hook-form'
import { Id, toast } from 'react-toastify'
import { cn } from '@/lib/utils'

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
}

const Input = ({ error, register, ...rest }: InputProps) => {
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
			className={cn('border text-black font-bold px-2 py-1 rounded', rest.className, {
				'border-red-600 outline-red-600': error
			})}
			{...register}
      {...rest}
		/>
	)
}

export default Input
