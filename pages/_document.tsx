import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

	render() {
		return <Html>
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-SW3M4TBE5D" />
				<script dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-SW3M4TBE5D', {
						page_path: window.location.pathname,
					});
					console.log("GTag running")
				`.replace(/\s+/g, " ").trim()
				}} />

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	}
}