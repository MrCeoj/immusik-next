import { ComponentPropsWithoutRef, useEffect, useRef } from "react"
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn,
} from "react-hook-form"
import { Id, toast } from "react-toastify"
import { cn } from "@/lib/utils"

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
	className?: string
}

const TextArea = ({ error, register, className, ...rest }: TextAreaProps) => {
	const toastId = useRef(null as Id | null)

	useEffect(() => {
		if (error?.message) {
			toastId.current = toast.error(error?.message?.toString(), {
				toastId: error?.message?.toString(),
				autoClose: false,
			})
		}

		return () => toast.dismiss(toastId.current as Id)
	}, [error?.message])

	return (
		<textarea
			className={cn(
				className,
				"border text-black font-bold px-2 py-1 rounded",
				{
					"border-red-600 outline-red-600": error,
				}
			)}
			{...register}
			{...rest}
		/>
	)
}

export default TextArea
