import React from 'react'
import cx from 'classnames'
import styles from "../styles/pages/index.module.scss";
import Image from "next/image"
import Logo from "../public/logos/logo_full_colored.svg"
import ConfusedComputerIllustration from "../public/images/undraw_confused_computer.svg"
import Head from 'next/head'
import { Header } from "../components/Header/Header"
import { HeroSection } from "../components/HeroSection/HeroSection"
import { Type } from '../components/Type/Type';
import { CheckCircleOutline as CheckIcon } from '@material-ui/icons';
import {
	Zap as ZapIcon,
	Lock as LockIcon,
	BarChart as AnalyticsIcon,
	Briefcase as BudgetsIcon,
	Cloud as CloudIcon,
	Upload as UploadIcon,
} from 'react-feather';
import { Button } from '@material-ui/core';
import { GtagService } from '../services/GtagService';

export default function Test() {

	return <div>
		<Head>
			<title>{"Nexpenda | Home"}</title>
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
								<CheckIcon />
								{"Faster data entry both for mobile and desktop users"}
							</Type>
							<Type component="li" variant="bold">
								<CheckIcon />
								{"Analytics, charts, budgets and more straight out of the box"}
							</Type>
							<Type component="li" variant="bold">
								<CheckIcon />
								{"Importing data from your existing spreadsheets"}
							</Type>
						</ul>
						<div className={styles.illustrationContainer}>
							<Image
								src="/images/undraw_confused_computer.png"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={cx(styles.section, styles.desktopMockupImageSection)}>
				<div className={styles.sectionContent}>
					<Image
						className={styles.desktopMockupImage}
						src="/images/laptop.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</section>

			<section className={cx(styles.section, styles.howDoesItWorkSection)}>
				<div className={styles.sectionContent}>
					<Type component="h2" size="xxl" variant="bold">
						{"How does it work?"}
					</Type>
					<div className={styles.instructionsContainer}>
						<ul className={styles.instructions}>
							<li>
								<Type className={styles.title} variant="bold">
									{"Log your incomes and expenses"}
								</Type>
								<CheckIcon />
								<Type className={styles.description} >
									{"Get into the habit of logging your incomes and expenses as "}
									{"they come, once a week or at the end of every month."}
								</Type>
							</li>
							<li>
								<Type className={styles.title} variant="bold">
									{"Set up your budgets"}
								</Type>
								<CheckIcon />
								<Type className={styles.description}  >
									{"Estimate your monthly incomes and expenses and set up "}
									{"limits for how much you want to be spending on different "}
									{"categories."}
								</Type>
							</li>
							<li>
								<Type className={styles.title} variant="bold">
									{"We provide the rest"}
								</Type>
								<CheckIcon />
								<Type className={styles.description}  >
									{"Once you start logging your transactions, we will "}
									{"automatically provide you with all the rest! "}
									{"See below for all features."}
								</Type>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className={cx(styles.section, styles.mobileMockupImageSection)}>
				<div className={styles.sectionContent}>
					<Image
						className={styles.mobileMockupImage}
						src="/images/mobile-mockup.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</section>


			<section className={cx(styles.section, styles.featuresSection)}>
				<div className={styles.sectionContent}>
					<Type component="h2" size="xxl" variant="bold">
						{"All these features, for free"}
					</Type>
					<ul>
						<li className={styles.yellow}>
							<Type
								className={styles.title}
								variant="bold"
								color="yellow-800"
							>
								{"Easy and fast"}
							</Type>
							<div className={styles.icon}>
								<ZapIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"No more frustrations or slow interfaces. "}
								{"Logging your transactions takes only seconds."}
							</Type>
						</li>
						<li className={styles.blue}>
							<Type
								className={styles.title}
								variant="bold"
								color="blue-800"
							>
								{"Analytics"}
							</Type>
							<div className={styles.icon}>
								<AnalyticsIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"Get insights, charts, detailed overviews and more "}
								{"to understand your spending habits."}
							</Type>
						</li>
						<li className={styles.green}>
							<Type
								className={styles.title}
								variant="bold"
								color="green-800"
							>
								{"Budgets"}
							</Type>
							<div className={styles.icon}>
								<BudgetsIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"Estimate your incomes, set up your spending limits "}
								{"and follow your progress."}
							</Type>
						</li>
						<li className={styles.pink}>
							<Type
								className={styles.title}
								variant="bold"
								color="pink-800"
							>
								{"Use on the go"}
							</Type>
							<div className={styles.icon}>
								<CloudIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"Use Nexpenda in your browser on your mobile or desktop "}
								{"and access your data from the cloud anywhere!"}
							</Type>
						</li>
						<li className={styles.red}>
							<Type
								className={styles.title}
								variant="bold"
								color="red-800"
							>
								{"Use your data"}
							</Type>
							<div className={styles.icon}>
								<UploadIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"Easily import and export data to and from "}
								{"your own spreadsheets."}
							</Type>
						</li>
						<li className={styles.purple}>
							<Type
								className={styles.title}
								variant="bold"
								color="purple-800"
							>
								{"Security"}
							</Type>
							<div className={styles.icon}>
								<LockIcon />
							</div>
							<Type
								className={styles.description}
								color="gray-700"
							>
								{"Your data is protected and secure with us."}
							</Type>
						</li>
					</ul>
				</div>
			</section>

			<section className={cx(styles.section, styles.getStartedSection)}>
				<div className={styles.sectionContent}>
					<Type component="h2" size="xxl" variant="bold" color="white">
						{"What are you waiting for?"}
					</Type>
					<Type color="white">
						{"Start taking better care of your spending already today - "}
						{"it's free!"}
					</Type>
					<a
						href="https://app.nexpenda.com/register"
						// target="blank"
						// rel="noreferrer noopener"
						onClick={() => GtagService.events.goto_signup()}
						tabIndex={-1}
					>
						<Button
							className={styles.callToAction}
							variant="contained"
							color="primary"
							size="large"
						>
							{`Get started for free`}
						</Button>
					</a>
				</div>

			</section>

			<footer className={styles.footer}>
				<div className={styles.footerContent}>
					<div className={styles.logoContainer}>
						<Logo />
					</div>
					<div className={styles.container}>
						<Type color="gray-800" variant="bold">
							{"Contact"}
						</Type>
						<Type color="gray-800">
							{"Jussi Nevavuori <"}
							<a href="mailto:jussi@nevavuori.fi">{"jussi@nevavuori.fi"}</a>
							{">"}
						</Type>
					</div>
					<div className={styles.container}>
						<Type color="gray-700">
							{"Powered by Next.js and Vercel"}
						</Type>
					</div>
				</div>
			</footer>
		</main>
	</div>
}