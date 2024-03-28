'use client'

import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/scrollbar.css'
import '@/styles/sucursal.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="IMMUSIK es una plataforma que permite administrar sucursales, clases, con sus docentes y alumnos, y pagos realizados."
				/>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<title>{`${
					pageProps.title ? pageProps.title + ' | ' : ''
				}IMMUSIK`}</title>
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default MyApp
