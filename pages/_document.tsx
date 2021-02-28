import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

	render() {
		return <Html>
			<Head>

				{/* Google tag manager */}
				<script dangerouslySetInnerHTML={{
					__html: `
						(function(w,d,s,l,i){w[l] = w[l] || []{'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-T4B6NRC');
					`.replace(/\s+/g, " ").trim()
				}} />

				{/* Gtag */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-SW3M4TBE5D" />
				<script dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-SW3M4TBE5D', {
						page_path: window.location.pathname,
					});
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