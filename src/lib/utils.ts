import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function toTitleCase(text: string) {
	const capitalizeWord = (word: string) =>
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

	return text.includes(' ')
		? text.split(' ').map(capitalizeWord).join(' ')
		: capitalizeWord(text)
}

export function toArrayDiasClase(dias: string) {
	const diasArray = dias.split(',')
	return diasArray.map((dia) => dia.toLowerCase())
}

export function toStringDiasClase(dias: string[]) {
	if(typeof dias === 'string') {
		dias = toArrayDiasClase(dias)
	}
	return dias.join(',').toUpperCase()
}

export function convertirAMinutosYSegundos(milisegundos: number) {
	// Convertir milisegundos a segundos
	var segundosTotales = Math.floor(milisegundos / 1000)

	// Calcular los minutos y segundos
	var minutos = Math.floor(segundosTotales / 60)
	var segundos = segundosTotales % 60

	// Formatear los minutos y segundos
	var formatoMinutos = minutos < 10 ? '0' + minutos : minutos
	var formatoSegundos = segundos < 10 ? '0' + segundos : segundos

	// Devolver la cadena en formato minutos:segundos
	return formatoMinutos + ':' + formatoSegundos
}
