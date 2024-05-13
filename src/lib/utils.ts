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

export function toSentenceCase(text: string) {
  const sentences = text.split('.').map((sentence) => sentence.trim())
  return sentences.map((sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
  }).join('. ')
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

const ordenFecha = {
  "dd/mm/aaaa": (fecha: number[]) => [fecha[0], fecha[1], fecha[2]],
  "aaaa/mm/dd": (fecha: number[]) => [fecha[2], fecha[1], fecha[0]]
}

export const convertirAFecha = (str: string, separador: string, orden: "dd/mm/aaaa"|"aaaa/mm/dd") => {
  const fecha = str.split(separador).map(Number)
  
  const [dia, mes, ano] = ordenFecha[orden](fecha)
  const fechaCompleta = new Date(ano, mes-1 ,dia)
  return fechaCompleta
}

export const convertirAStringFecha = (fecha: Date, lang: string) => {
	const fechaFormateada = new Intl.DateTimeFormat(lang, {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(fecha)

	return fechaFormateada
}
