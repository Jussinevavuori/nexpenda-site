import Head from "next/head"
import { useIsDarkScheme } from "../../hooks/useIsDarkScheme"

export type FaviconProps = {}

export function Favicon(props: FaviconProps) {

	const isDarkScheme = useIsDarkScheme()

	return <Head>
		{
			isDarkScheme
				? <link rel="icon" href="/favicon-dark-theme.ico" />
				: <link rel="icon" href="/favicon-light-theme.ico" />
		}
	</Head>
}