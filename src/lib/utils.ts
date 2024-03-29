import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export default function toTitleCase(text: string) {
	const capitalizeWord = (word: string) =>
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

	return text.includes(' ')
		? text.split(' ').map(capitalizeWord).join(' ')
		: capitalizeWord(text)
}
