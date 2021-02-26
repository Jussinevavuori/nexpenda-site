import '../styles/index.scss'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import { Favicon } from '../components/Favicon/Favicon'
import { useRouter } from 'next/dist/client/router'
import { GtagService } from '../services/GtagService'

export default function App({ Component, pageProps }: AppProps) {

	/**
	 * On route change, send pageview event to Google Analytics
	 */
	const router = useRouter()
	useEffect(() => {
		// if (process.env.NODE_ENV !== "production") return
		const handleRouteChange = (url: URL) => GtagService.pageview(url)
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => router.events.off("routeChangeComplete", handleRouteChange)
	}, [router.events])

	return <ThemeProvider theme={theme}>
		<Favicon />
		<Component {...pageProps} />
	</ThemeProvider>
}