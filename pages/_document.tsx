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
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	}
}