import { cn } from '@/lib/utils'

const Label = ({
	htmlFor,
	label,
	error,
	className
}: {
	htmlFor: string
	label: string
	error: boolean
	className?: string
}) => {
	return (
		<label htmlFor={htmlFor} className={cn(className)}>
			{label} {error && <span className="text-red-600">*</span>}
		</label>
	)
}

export default Label
