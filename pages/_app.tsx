import '../styles/index.scss'
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
	return <ThemeProvider theme={theme}>
		<Component {...pageProps} />
	</ThemeProvider>
}