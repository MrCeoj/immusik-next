import Credentials from 'next-auth/providers/credentials'
import { autenticarUsuario } from './business/UsuarioDelegate'
import { JWT } from 'next-auth/jwt'
import { NextAuthOptions, User } from 'next-auth'

/**
 * Configuración de la autorización
 *
 * @param {Object} credentials - Credenciales del usuario
 * @returns {Promise} Retorna un objeto con la información del usuario
 * @thows Error si no se encuentra el usuario o la contraseña es incorrecta
 */
export const authOptions: NextAuthOptions = {
	// Página de inicio de sesión
	// Se accederá a esta página si la sesión no está iniciada o se ha cerrado sesión
	pages: {
		signIn: '/login'
	},
	callbacks: {
		// Se ejecuta cuando se crea un token JWT
		async jwt(params: { token: JWT; user: User }) {
			const { token, user } = params

			if (user) {
				token.user = user
			}

			return token
		},
		// Se ejecuta cuando se crea una sesión
		async session(params) {
			const { session, token } = params

			// Se agrega el usuario a la sesión
			if (session) {
				session.user = token.user
			}

			return session
		}
	},
	// Configuración de la autorización con credenciales
	providers: [
		Credentials({
			name: 'Credentials',
			// Se definen los campos de las credenciales
			credentials: {
				nombre: {},
				contrasena: {}
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
