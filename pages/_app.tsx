import '../styles/index.scss'
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import { Favicon } from '../components/Favicon/Favicon'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return <ThemeProvider theme={theme}>
		<Head>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-SW3M4TBE5D" />
			<script dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-SW3M4TBE5D');
					console.log("GTag running")
				`.replace(/\s+/g, "").trim()
			}} />
		</Head>
		<Favicon />
		<Component {...pageProps} />
	</ThemeProvider>
}