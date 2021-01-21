import styles from "../styles/pages/Home.module.scss";
import Head from 'next/head'
import React from 'react'
import { useThemeFavicon } from "../hooks/useThemeFavicon"
import { Header } from "../components/Header/Header"
import { Type } from '../components/Type/Type'
import { Button } from "@material-ui/core";

export default function Home() {

	useThemeFavicon()

	return (
		<div >
			<Head>
				<title>Create Next App</title>
				<link
					rel="icon"
					href="/favicon-light-theme.ico"
					id="favicon-light-theme"
				/>
				<link
					rel="icon"
					href="/favicon-dark-theme.ico"
					id="favicon-dark-theme"
				/>
			</Head>

			<main className={styles.Home}>
				<Header />

				<div>
					<Type color="black" variant="bold" size="xxxl">
						{`Coming soon.`}
					</Type>
					<a href="https://app.nexpenda.com" target="blank" rel="noreferrer noopener">
						<Button variant="contained" color="primary">
							{`Check out the App`}
						</Button>
					</a>
				</div>
			</main>
		</div>
	)
}
