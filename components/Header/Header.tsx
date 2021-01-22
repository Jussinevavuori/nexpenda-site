import styles from "./Header.module.scss"
import React from "react";
import { Logo } from "../Logo/Logo";
import { Button } from "@material-ui/core";

export function Header() {
	return <header className={styles.Header}>
		<div className={styles.content}>
			<div className={styles.left}>
				<Logo />
			</div>
			<div className={styles.right}>
				<a target="blank" rel="noopener noreferrer" href={`https://app.nexpenda.com/`}>
					<Button variant="text" color="primary">
						{"Sign in"}
					</Button>
				</a>
				<a target="blank" rel="noopener noreferrer" href={`https://app.nexpenda.com/register`}>
					<Button variant="contained" color="primary">
						{"Create a free account"}
					</Button>
				</a>
			</div>
		</div>
	</header>
}