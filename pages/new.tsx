import React from 'react'
import cx from 'classnames'
import styles from "../styles/pages/AltHome.module.scss";
import Head from 'next/head'
import { Header } from "../components/Header/Header"
import { HeroSection } from "../components/HeroSection/HeroSection"
import { Type } from '../components/Type/Type';
import { CheckCircleOutline, Edit, Work } from '@material-ui/icons';

export default function Test() {


	return <div>
		<Head>
			<title>{"Nexpenda | New Homepage"}</title>
		</Head>

		<main className={styles.Home}>


			<div className={styles.headerContainer}>
				<Header />
			</div>


			<section className={cx(styles.heroContainer)}>
				<HeroSection />
			</section>

			<section className={cx(styles.section, styles.spreadsheetsSection)}>
				<div className={styles.cardSection}>
					<div
						className={styles.sectionContent}
						id="spreadsheets"
					>
						<Type component="h2" size="xxl" variant="bold">
							{"Say goodbye to clunky spreadsheets"}
						</Type>
						<Type component="p">
							{"Stop fiddling with creating, updating and maintaining "}
							{"difficult and outdated Excel files! We provide you a "}
							{"better alternative to spreadsheets."}
						</Type>
						<ul>
							<Type component="li" variant="bold">
								<CheckCircleOutline />
								{"Faster data entry both for mobile and desktop users"}
							</Type>
							<Type component="li" variant="bold">
								<CheckCircleOutline />
								{"Analytics, charts, budgets and more straight out of the box"}
							</Type>
							<Type component="li" variant="bold">
								<CheckCircleOutline />
								{"Importing data from your existing spreadsheets"}
							</Type>
						</ul>
					</div>
				</div>
			</section>
			<section className={cx(styles.section, styles.howDoesItWorkSection)}>
				<div className={styles.sectionContent}>
					<Type component="h2" size="xxl" variant="bold">
						{"How does it work?"}
					</Type>
					<div className={styles.instructionsContainer}>
						<Type size="lg" variant="bold">
							{"You only need to"}
						</Type>
						<ul className={styles.instructions}>
							<li>
								<Type variant="bold">
									{"Log your incomes and expenses"}
								</Type>
								<CheckCircleOutline />
								<Type >
									{"Get into the habit of logging your incomes and expenses as "}
									{"they come, once a week or at the end of every month."}
								</Type>
							</li>
							<li>
								<Type variant="bold">
									{"Set up your budgets"}
								</Type>
								<CheckCircleOutline />
								<Type  >
									{"Estimate your monthly incomes and expenses and set up "}
									{"limits for how much you want to be spending on different "}
									{"categories."}
								</Type>
							</li>
						</ul>
					</div>
					<div className={styles.instructionsContainer}>
						<Type size="lg" variant="bold" >
							{"We provide the rest"}
						</Type>
						<ul className={styles.instructions}>
						</ul>
					</div>
				</div>
			</section>
			<section className={cx(styles.section)}>
				<div className={styles.sectionContent}>

				</div>
			</section>
			<section className={cx(styles.section)}>
				<div className={styles.sectionContent}>

				</div>
			</section>
		</main>
	</div>
}