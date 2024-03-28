import NextAuth, { DefaultSession } from 'next-auth'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
	/** Es retornado por el callback `jwt` y `getToken`, cuando se usan sesiones JWT */
	// Permite que el usuario del token JWT se asigne al usuario de la sesión
	interface JWT {
		user: User
	}
}
