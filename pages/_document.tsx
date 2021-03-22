import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

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
				<meta
					name="description"
					content={
						"Nexpenda - Get your spending under control.\n" +
						"Free, easy and fast expense tracking, automated " +
						"analytics, budgets and more! Experience a new way of " +
						"tracking your expenses."
					}
				>
				</meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	}
}