import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
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
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
