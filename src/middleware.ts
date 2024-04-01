export { default } from 'next-auth/middleware'

export const config = {
	/**
	 * Las rutas protegidas por la sesión de usuario serán
	 * todas las que no sean registro o login
	 **/
	matcher: ['/((?!registro|login).*)']
}
