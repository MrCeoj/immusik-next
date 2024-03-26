import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import { autenticarUsuario } from '@/business/UsuarioDelegate'

/**
 * Configuración de la autorización
 *
 * @param {Object} credentials - Credenciales del usuario
 * @returns {Promise} Retorna un objeto con la información del usuario
 * @thows Error si no se encuentra el usuario o la contraseña es incorrecta
 */

export const authOptions = {
	// Página de inicio de sesión
	// Se accederá a esta página si la sesión no está iniciada o se ha cerrado sesión
	pages: {
		signIn: '/login'
	},
	// Configuración de la autorización con credenciales
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				nombre: { label: 'Usuario', type: 'text' },
				contrasena: { label: 'Contraseña', type: 'password' }
			},
			async authorize(credentials) {
				// Si no se ingresan credenciales, se retorna null
				if (!credentials?.nombre || !credentials?.contrasena) {
					throw new Error('Credenciales no ingresadas')
				}

				// Autenticar al usuario
				try {
					// Si el usuario se autentica correctamente, se retorna el resultado
					return await autenticarUsuario(credentials)
				} catch (error: Error | any) {
					// Si hay un error, se lanzará una excepción
					throw error
				}
			}
		})
	]
}

export default NextAuth(authOptions)
