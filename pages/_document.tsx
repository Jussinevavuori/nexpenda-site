import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

	render() {
		return <Html>
			<Head>

				{/* Gtag */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y74KDL8GJ9"></script>
				<script dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-Y74KDL8GJ9');
					`.replace(/\s+/g, " ").trim()
				}} />

			</Head>
			<body>

				{/* Google tag manager */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-T4B6NRC"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	}
}