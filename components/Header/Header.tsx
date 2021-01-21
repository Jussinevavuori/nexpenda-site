import styles from "./Header.module.scss"
import React from "react";
import { Logo } from "../Logo/Logo";

export function Header() {
	return <header className={styles.Header}>
		<Logo />
	</header>
}