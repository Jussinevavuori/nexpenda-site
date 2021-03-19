import React from 'react'
import styles from "../styles/pages/AltHome.module.scss";
import Head from 'next/head'
import { Header } from "../components/Header/Header"
import { HeroSection } from "../components/HeroSection/HeroSection"

export default function Test() {


	return <div>
		<Head>
			<title>{"Nexpenda | New Homepage"}</title>
		</Head>

		<main className={styles.Home}>


			<div className={styles.headerContainer}>
				<Header />
			</div>


			<section className={styles.heroContainer}>
				<HeroSection />
			</section>

			<section>
				<div className={styles.sectionContent}>

				</div>
			</section>
			<section>
				<div className={styles.sectionContent}>

				</div>
			</section>
			<section>
				<div className={styles.sectionContent}>

				</div>
			</section>
			<section>
				<div className={styles.sectionContent}>

				</div>
			</section>
		</main>
	</div>
}