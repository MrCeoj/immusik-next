export { default } from 'next-auth/middleware'

export const config = {
	// rutas protegidas por la sesión de usuario
	matcher: ['/inicio']
}
