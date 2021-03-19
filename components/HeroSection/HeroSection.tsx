import React, { useEffect, useRef, useState } from "react"
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

	const backgroundImageLayer = useRef<HTMLDivElement | null>(null)
	const foregroundImageLayer = useRef<HTMLDivElement | null>(null)
	const backgroundTransactionsLayer = useRef<HTMLDivElement | null>(null)
	const foregroundTransactionsLayer = useRef<HTMLDivElement | null>(null)
	const contentLayerContent = useRef<HTMLDivElement | null>(null)
	const contentLayer = useRef<HTMLDivElement | null>(null)

	useOnScroll(scroll => {

		if (backgroundImageLayer.current) {
			backgroundImageLayer.current.style.transform = `translateY(${scroll * 0.7}px) scale(${1 + scroll * 0.0001})`
			backgroundImageLayer.current.style.filter = `blur(${scroll * 0.02}px) brightness(${1 - scroll * 0.001})`
		}

		if (backgroundTransactionsLayer.current) {
			backgroundTransactionsLayer.current.style.transform = `translateY(${scroll * 0.5}px)`
			backgroundTransactionsLayer.current.style.filter = `blur(${scroll * 0.02}px)`
			backgroundTransactionsLayer.current.style.opacity = `${1 - scroll * 0.002}`
		}

		if (foregroundImageLayer.current) {
			foregroundImageLayer.current.style.transform = `translateY(${scroll * 0.27}px)`
			foregroundImageLayer.current.style.filter = `blur(${scroll * 0.02}px)`
		}

		if (foregroundTransactionsLayer.current) {
			foregroundTransactionsLayer.current.style.transform = `translateY(${scroll * 0.18}px)`
			foregroundTransactionsLayer.current.style.filter = `blur(${scroll * 0.02}px)`
			foregroundTransactionsLayer.current.style.opacity = `${1 - scroll * 0.002}`
		}

		if (contentLayerContent.current) {
			contentLayerContent.current.style.transform = `translateY(${scroll * -0.5}px)`
			contentLayerContent.current.style.filter = `blur(${scroll * 0.02}px)`
			contentLayerContent.current.style.opacity = `${1 - scroll * 0.002}`
		}


	}, 500)

	const [fakeTransactions, setFakeTransactions] = useState<{
		data: ReturnType<FakeTransactionGenerator["generate"]>,
		id: string,
		y: number,
		x: number,
		z: number,
		layer: string,
		timestamp: number,
	}[]>([])

	useEffect(() => {
		const interval = window.setInterval(() => {
			setFakeTransactions(_ => _
				.filter(__ => __.timestamp > new Date().getTime() - 10000)
				.concat((() => ({
					data: FakeTransactionGenerator.Instance.generate(),
					id: Math.random().toString(),
					y: Math.random(),
					x: Math.random(),
					z: Math.random(),
					layer: Math.random() < 0.5 ? "foreground" : "background",
					timestamp: new Date().getTime()
				}))()))
		}, 1800)
		return () => {
			window.clearInterval(interval)
		}
	}, [setFakeTransactions])


	return <section className={cx(styles.HeroSection)}>

		<div ref={backgroundImageLayer} className={cx(styles.backgroundImageLayer)}>
			<Image
				className={cx(styles.backgroundImage)}
				src="/images/mountains-background.png"
				layout="fill"
				objectFit="cover"
			/>
		</div>

		<div ref={backgroundTransactionsLayer} className={cx(styles.backgroundTransactionsLayer)}>
			{
				fakeTransactions.filter(_ => _.layer === "background").map(item => (
					<div
						key={item.id}
						className={styles.transaction}
						style={{
							position: "absolute",
							left: `${(9 + 82 * item.x)}%`,
							top: `${(5 + 80 * item.y)}%`,
							filter: `blur(${(2 + 1 * item.z)}px)`,
							transform: `translate(-50%,-50%) scale(${1 - item.z * 0.5})`,
							opacity: `${30 + item.z * 30}%`
						}}
					>
						<div className={styles.transactionInner}>
							<FakeTransaction />
						</div>
					</div>
				))
			}
		</div>

		<div ref={foregroundImageLayer} className={cx(styles.foregroundImageLayer)}>
			<Image
				className={cx(styles.foregroundImage)}
				src="/images/mountains-foreground.png"
				layout="fill"
				objectFit="cover"
			/>
		</div>

		<div ref={foregroundTransactionsLayer} className={cx(styles.foregroundTransactionsLayer)}>
			{
				fakeTransactions.filter(_ => _.layer === "foreground").map(item => (
					<div
						key={item.id}
						className={styles.transaction}
						style={{
							position: "absolute",
							left: `${(20 + 70 * item.x)}%`,
							top: `${(10 + 60 * item.y)}%`,
							filter: `blur(${(0 + 0.5 * item.z)}px)`,
							transform: `translate(-50%,-50%) scale(${1 - item.z * 0.2})`,
							opacity: `${50 + item.z * 40}%`
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
					color="white"
					variant="bold"
				>
					{"Get your money under control."}
				</Type>
				<a
					href="https://app.nexpenda.com/register"
					target="blank"
					rel="noreferrer noopener"
					onClick={() => GtagService.events.goto_signup()}
					tabIndex={-1}
				>
					<Button
						className={styles.callToAction}
						variant="contained"
						color="primary"
						size="large"
						startIcon={
							<SvgIcon>
								<NexpendaLogoIconWhiteSvg />
							</SvgIcon>
						}
					>
						{`Create a free account`}
					</Button>
				</a>

			</div>
		</div>

	</section>
}