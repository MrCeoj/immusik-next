const Label = ({
	htmlFor,
	label,
	error
}: {
	htmlFor: string
	label: string
	error: boolean
}) => {
	return (
		<label htmlFor={htmlFor} className="">
			{label} {error && <span className="text-red-600">*</span>}
		</label>
	)
}

export default Label
