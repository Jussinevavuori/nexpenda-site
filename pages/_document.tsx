import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const siteDescription = "Nexpenda - Get your spending under control.\n" +
	"Free, easy and fast expense tracking, automated " +
	"analytics, budgets and more! Experience a new way of " +
	"tracking your expenses."

const siteKeywords = [
	"Nexpenda",
	"Budgets",
	"Budget",
	"Expense",
	"Tracking",
	"Analytics",
	"Income",
	"Penno",
	"Personal finance",
	"Finance",
	"Money",
	"Saving"
]
export default class MyDocument extends Document {

	render() {
		return <Html>
			<Head>
				{/* Gtag */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-7G22WEXNSB" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-7G22WEXNSB');
						`
					}}
				/>
				<link rel="canonical" href="https://nexpenda.com" />
				<meta name="description" content={siteDescription} />
				<meta name="keywords" content={siteKeywords.join(", ")} />
				<meta name="author" content="Jussi Nevavuori" />
				<meta property="og:description" content={siteDescription} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://nexpenda.com/og-image.png" />
				<meta property="og:image:alt" content="Nexpenda logo" />
				<meta property="og:url" content="https://nexpenda.com" />
				<meta property="og:site_name" content="Nexpenda" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	}
}