import React, { useEffect, useRef, useState } from "react"
import Link from 'next/link'
import styles from "./HeroSection.module.scss";
import cx from "classnames"
import Image from "next/image"
import NexpendaLogoIconWhiteSvg from "../../public/logos/logo_icon_white.svg"
import { FakeTransaction } from "../FakeTransaction/FakeTransaction";
import { FakeTransactionGenerator } from "../FakeTransaction/FakeTransactionGenerator";
import { Type } from '../Type/Type';
import { GtagService } from '../../services/GtagService';
import { Button, SvgIcon } from "@material-ui/core";
import { useOnScroll } from "../../hooks/useOnScroll";

export type HeroSectionProps = {}

export function HeroSection(props: HeroSectionProps) {

	const backgroundLayer = useRef<HTMLDivElement | null>(null)
	const transactionsLayer = useRef<HTMLDivElement | null>(null)
	const contentLayerContent = useRef<HTMLDivElement | null>(null)
	const contentLayer = useRef<HTMLDivElement | null>(null)

	useOnScroll(scroll => {
		if (transactionsLayer.current) {
			transactionsLayer.current.style.transform = `translateY(${scroll * -0.3}px)`
		}
	})

	const [fakeTransactions, setFakeTransactions] = useState<{
		data: ReturnType<FakeTransactionGenerator["generate"]>,
		id: string,
		y: number,
		x: number,
		z: number,
		timestamp: number,
	}[]>([])

	useEffect(() => {
		const interval = window.setInterval(() => {
			setFakeTransactions(_ => _
				.filter(__ => __.timestamp > new Date().getTime() - 6000)
				.concat((() => ({
					data: FakeTransactionGenerator.Instance.generate(),
					id: Math.random().toString(),
					y: Math.random(),
					x: Math.random(),
					z: Math.random(),
					timestamp: new Date().getTime()
				}))()))
		}, 700)
		return () => {
			window.clearInterval(interval)
		}
	}, [setFakeTransactions])


	return <section className={cx(styles.HeroSection)}>

		<div ref={backgroundLayer} className={cx(styles.backgroundLayer)}>
			{/* <Image
				// src="/images/hero-forest-foreground.png"
				src="/images/background-blue.jpg"
				// src="/images/laptop.png"
				layout="fill"
				objectFit="cover"
			/> */}
		</div>

		<div className={cx(styles.mockupImageContainer)}>
			<div className={cx(styles.mockupImagePositioner)}>
				<div className={cx(styles.mockupImage)}>
					<Image
						className={cx(styles.foregroundImage)}
						src="/images/mobile-mockup.png"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>

		<div ref={transactionsLayer} className={cx(styles.transactionsLayer)}>
			{
				fakeTransactions.map(item => (
					<div
						key={item.id}
						className={styles.transaction}
						style={{
							position: "absolute",
							left: `${(50 + 40 * item.x)}%`,
							top: `${(15 + 80 * item.y)}%`,
							filter: `blur(${(0.5 + 4.5 * item.z)}px)`,
							transform: `translate(-50%,-50%) scale(${0.8 - item.z * 0.4})`,
							opacity: `${80 - item.z * 15}%`
						}}
					>
						<div className={styles.transactionInner}>
							<FakeTransaction />
						</div>
					</div>
				))
			}
		</div>

		<div ref={contentLayer} className={styles.contentLayer}>
			<div ref={contentLayerContent} className={styles.content}>
				<Type
					component="h1"
					size="xxxl"
					color="gray-800"
					variant="bold"
				>
					{"Get your spending under control."}
				</Type>
				<Type
					component="h2"
					size="lg"
					color="gray-700"
				// variant="bold"
				>
					{"Experience a new way of tracking your expenses."}
				</Type>
				<div className={styles.callToActionContainer}>
					<a
						href="https://app.nexpenda.com/register"
						target="blank"
						rel="noreferrer noopener"
						onClick={() => GtagService.events.goto_signup()}
						tabIndex={-1}
					>
						<Button
							className={styles.primaryCallToAction}
							variant="contained"
							color="primary"
							size="large"
							startIcon={
								<SvgIcon>
									<NexpendaLogoIconWhiteSvg />
								</SvgIcon>
							}
						>
							{`Get started for free`}
						</Button>
					</a>

					<a href="#spreadsheets">
						<Button
							className={styles.secondaryCallToAction}
							variant="text"
							size="large"
						>
							{`Read more`}
						</Button>
					</a>
				</div>

			</div>
		</div>

	</section>
}