import NextAuth from 'next-auth/next'
import { authOptions } from '@/authConfig'

export default NextAuth(authOptions)
