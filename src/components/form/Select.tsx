import { ComponentPropsWithoutRef, useEffect, useRef } from "react"
import {
	FieldError,
	FieldErrorsImpl,
	Merge,
	UseFormRegisterReturn,
} from "react-hook-form"
import { Id, toast } from "react-toastify"
import { cn } from "@/lib/utils"

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	register: UseFormRegisterReturn<string>
	items: string[]
  emptyValue?: string
	className?: string
}

const Select = ({
	error,
	register,
	items,
  emptyValue,
	className,
	...rest
}: SelectProps) => {
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
		<select
			className={cn(
				className,
				"border text-black font-bold px-2 py-1 rounded",
				{
					"border-red-600 outline-red-600": error,
				}
			)}
			{...register}
			{...rest}
		>
			{emptyValue && <option disabled value="">{emptyValue}</option>}
			{items.map((item, index) => (
				<option key={index} value={item.toUpperCase()}>
					{item}
				</option>
			))}
		</select>
	)
}

export default Select
