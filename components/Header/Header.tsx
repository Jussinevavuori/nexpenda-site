import styles from "./Header.module.scss"
import React from "react";
import cx from "classnames"
import Logo from "../../public/logos/logo_full_colored.svg"
import { Button } from "@material-ui/core";
import { GtagService } from "../../services/GtagService";

export type HeaderProps = {
	unscrolledVariant?: "invisible";
}

export function Header(props: HeaderProps) {

	return <header className={cx(styles.Header)} >
		<div className={styles.content}>
			<div className={styles.left}>
				<Logo />
			</div>
			<div className={styles.right}>
				<a
					target="blank"
					rel="noopener noreferrer"
					href={`https://app.nexpenda.com/`}
					onClick={() => GtagService.events.goto_login()}
					tabIndex={-1}
				>
					<Button
						className={styles.MuiTextButton}
						variant="text"
						color="primary"
					>
						{"Sign in"}
					</Button>
				</a>
				<a
					target="blank"
					rel="noopener noreferrer"
					href={`https://app.nexpenda.com/register`}
					onClick={() => GtagService.events.goto_signup()}
					tabIndex={-1}
				>
					<Button
						variant="contained"
						color="primary"
					>
						{"Create a free account"}
					</Button>
				</a>
			</div>
		</div>
	</header>
}