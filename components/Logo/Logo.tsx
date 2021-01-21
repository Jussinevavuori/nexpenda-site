import styles from "./Logo.module.scss";
import React from "react"
import cx from "classnames"
import { Type, TypeProps } from "../Type/Type";

export type LogoProps = {
	size?: TypeProps["size"];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export function Logo(props: LogoProps) {

	const { className, size, ...spanProps } = props

	return <span
		className={cx(styles.Logo, className)}
		{...spanProps}
	>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">N</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">e</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="blue-500">x</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">p</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">e</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">n</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">d</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">a</Type>
		<Type component="span" variant="bold" size={size ?? "xl"} color="black">.</Type>
	</span>
}