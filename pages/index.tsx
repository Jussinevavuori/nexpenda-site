import styles from "../styles/pages/Home.module.scss";
import Head from 'next/head'
import Image from "next/image"
import cx from "classnames"
import React, { useEffect } from 'react'
import Logo from "../public/logos/logo_full_colored.svg"
import NexpendaLogoIconWhiteSvg from "../public/logos/logo_icon_white.svg"
import NexpendaLogoIconColoredSvg from "../public/logos/logo_icon_colored.svg"
import { Header } from "../components/Header/Header"
import { Type } from '../components/Type/Type'
import { Button, SvgIcon } from "@material-ui/core";
import {
	AccountBalance as AccountBalanceIcon,
	Check as CheckmarkIcon,
	LocalAtm as MoneyIcon,
	Loop as LoopIcon,
	PieChart as PieChartIcon,
	PlaylistAdd as ListAddItemIcon
} from "@material-ui/icons";
import { GtagService } from "../services/GtagService";

export default function Home() {
	useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }) }, [])

	return (
		<div >
			<Head>
				<title>{"Nexpenda"}</title>
			</Head>

			<main className={styles.Home}>
				<Header />

				<div className={styles.content}>
					<section className={styles.hero}>
						<div className={styles.sectionContent}>
							<div className={styles.heroRight}>
								<div className={styles.heroImage}>
									<Image
										src="/images/mobile-mockup.png"
										alt="Mobile mockup"
										layout="fill"
									/>
								</div>
							</div>
							<div className={styles.heroLeft}>
								<Type component="h1" color="black" variant="bold" size="xxxl">
									{`We make saving money easy.`}
								</Type>
								<div className={styles.ctas}>
									<a
										href="https://app.nexpenda.com/register"
										target="blank"
										rel="noreferrer noopener"
										onClick={() => GtagService.events.goto_signup()}
									>
										<Button
											className={styles.ctaButton}
											variant="contained"
											color="primary"
											startIcon={
												<SvgIcon>
													<NexpendaLogoIconWhiteSvg />
												</SvgIcon>
											}
										>
											{`Create a free account`}
										</Button>
									</a>
									<a
										href="https://app.nexpenda.com"
										target="blank"
										rel="noreferrer noopener"
										onClick={() => GtagService.events.goto_login()}
									>
										<Button
											className={cx(styles.ctaButton, styles.secondary)}
											variant="outlined"
											color="primary"
											startIcon={
												<SvgIcon>
													<NexpendaLogoIconColoredSvg />
												</SvgIcon>
											}
										>
											{`Open Nexpenda`}
										</Button>
									</a>
								</div>
							</div>
						</div>
					</section>
					<section className={styles.features}>
						<div className={styles.sectionContent}>
							<div className={styles.content}>
								<Type color="white" component="h2" size="xxxl" variant="bold">
									{"All these superpowers, completely free."}
								</Type>
								<ul>
									<li>
										<i>
											<ListAddItemIcon />
										</i>
										<Type component="h3" color="gray-800" variant="bold" size="lg">
											{"Track your spending"}
										</Type>
										<Type color="gray-700" component="p">
											{`Logging your income and expenses takes only a few clicks.`}
										</Type>
									</li>
									<li>
										<i>
											<PieChartIcon />
										</i>
										<Type component="h3" color="gray-800" variant="bold" size="lg">
											{"Detailed analytics"}
										</Type>
										<Type color="gray-700" component="p">
											{`Track where your money is going and review your spending habits.`}
										</Type>
									</li>
									<li>
										<i>
											<AccountBalanceIcon />
										</i>
										<Type component="h3" color="gray-800" variant="bold" size="lg">
											{"Create and track budgets"}
										</Type>
										<Type color="gray-700" component="p">
											{`Define your targets, set your limits and let us help you save money.`}
										</Type>
									</li>
								</ul>
							</div>
							<div className={styles.background}>
								<div className={styles.backgroundImage}>
									<Image
										src="/images/background-1.png"
										layout="fill"
									/>
								</div>
							</div>
						</div>
					</section>
					<section className={styles.how}>
						<div className={styles.sectionContent}>
							<Type component="h2" color="black" size="xxxl" variant="bold">
								{"How does it work?"}
							</Type>
							<ul>
								<li>
									<div className={styles.stepTitle}>
										<i>
											<MoneyIcon />
										</i>
										<Type component="h3" size="xl" color="blue-500" variant="bold">
											{"Track your spending"}
										</Type>
									</div>
									<div className={styles.stepSummary}>
										<Type component="p">
											{`
												Whenever you spend or receive money, log it to the app.
												We’ve made this as easy as possible for you!
											`}
										</Type>
									</div>
								</li>
								<li>
									<div className={styles.stepTitle}>
										<i>
											<AccountBalanceIcon />
										</i>
										<Type component="h3" size="xl" color="blue-500" variant="bold">
											{"Create a budget"}
										</Type>
									</div>
									<div className={styles.stepSummary}>
										<Type component="p">
											{`
												How much should you be spending on money
												each month? Tell us, and we help you hit your
												targets. Or don’t, we can’t tell you what to do.
											`}
										</Type>
									</div>
								</li>
								<li>
									<div className={styles.stepTitle}>
										<i>
											<LoopIcon />
										</i>
										<Type component="h3" size="xl" color="blue-500" variant="bold">
											{"Make it a habit"}
										</Type>
									</div>
									<div className={styles.stepSummary}>
										<Type component="p">
											{`
												If you can make it a habit to log your incomes
												and expenses, we promise to do the rest and
												provide you with real and helpful tools and info!
											`}
										</Type>
									</div>
								</li>
								<li>
									<div className={styles.stepTitle}>
										<i>
											<CheckmarkIcon />
										</i>
										<Type component="h3" size="xl" color="blue-500" variant="bold">
											{"You're done!"}
										</Type>
									</div>
									<div className={styles.stepSummary}>
										<Type component="p">
											{`
												As you keep track of your spending, the app will
												automatically track your budgets for you and
												generate detailed analytics.
											`}
										</Type>
									</div>
								</li>
							</ul>
						</div>
					</section>
					<section className={styles.finalCta}>
						<div className={styles.sectionContent}>
							<div className={styles.left}>
								<Type color="white" component="p" variant="bold" size="xl">
									{"It all starts with a free account."}
								</Type>
								<Type color="white" component="p" variant="bold" size="xxxl">
									{"Start using now!"}
								</Type>
								<Type color="white" component="p" variant="bold" size="xl">
									{"Use it on the web, on your desktop or mobile, or install it as an app."}
								</Type>
							</div>
							<div className={styles.right}>
								<a
									href="https://app.nexpenda.com/register"
									target="blank"
									rel="noreferrer noopener"
									onClick={() => GtagService.events.goto_signup()}
								>
									<Button
										className={styles.ctaButton}
										variant="contained"
										color="primary"
										startIcon={
											<SvgIcon>
												<NexpendaLogoIconColoredSvg />
											</SvgIcon>
										}
									>
										{`Create a free account`}
									</Button>
								</a>
							</div>
						</div>
					</section>
					<footer>
						<div className={styles.footerContent}>
							<div className={styles.logoContainer}>
								<Logo />
							</div>
							<div className={styles.contact}>
								<Type color="gray-700" variant="bold">
									{"Contact me"}
								</Type>
								<Type color="gray-700">
									{"Jussi Nevavuori <"}
									<a href="mailto:jussi@nevavuori.fi">{"jussi@nevavuori.fi"}</a>
									{">"}
								</Type>
							</div>
							<div className={styles.poweredBy}>
								<Type color="gray-700">
									{"Powered by Next.js and Vercel"}
								</Type>
							</div>
							<div className={styles.links}>
								<a
									target="blank"
									rel="noopener noreferrer"
									href={`https://app.nexpenda.com/`}
									onClick={() => GtagService.events.goto_login()}
								>
									<Button variant="text" color="primary">
										{"Sign in"}
									</Button>
								</a>
								<a
									target="blank"
									rel="noopener noreferrer"
									href={`https://app.nexpenda.com/register`}
									onClick={() => GtagService.events.goto_signup()}
								>
									<Button variant="contained" color="primary">
										{"Create a free account"}
									</Button>
								</a>
							</div>
						</div>
					</footer>
				</div>
			</main>
		</div>
	)
}