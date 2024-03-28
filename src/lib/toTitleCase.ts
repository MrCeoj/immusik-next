export default function toTitleCase(text: string) {
	const capitalizeWord = (word: string) =>
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

	return text.includes(' ')
		? text.split(' ').map(capitalizeWord).join(' ')
		: capitalizeWord(text)
}
