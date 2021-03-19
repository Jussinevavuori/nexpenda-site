import styles from "./FakeTransaction.module.scss"
import React from "react";
import cx from "classnames";
import { FakeTransactionGenerator } from "./FakeTransactionGenerator";

export type FakeTransactionProps = {}

export function FakeTransaction(props: FakeTransactionProps) {
	const data = FakeTransactionGenerator.useFakeTransaction()

	return <div
		className={cx(
			styles.FakeTransaction,
			{
				[styles.isPositive]: data.isPositive,
				[styles.isNegative]: data.isNegative,
			}
		)}
	>

		<div className={cx(
			styles.icon,
			{
				[styles.isPositive]: data.isPositive,
				[styles.isNegative]: data.isNegative,
			}
		)}>
			{data.icon}
		</div>

		<div className={cx(
			styles.amount,
			{
				[styles.isPositive]: data.isPositive,
				[styles.isNegative]: data.isNegative,
			}
		)}>
			{data.amount.toFixed(2) + " €"}
		</div>

		<div className={cx(
			styles.category,
			{
				[styles.isPositive]: data.isPositive,
				[styles.isNegative]: data.isNegative,
			}
		)}>
			{data.category}
		</div>

	</div>

}

