import { useEffect } from "react";

export default function useThemeFavicon() {
	useEffect(() => {
		function onColorSchemeMatcherUpdate() {
			const faviconDarkTheme = document.getElementById("favicon-dark-theme");
			const faviconLightTheme = document.getElementById("favicon-light-theme");
			if (colorSchemeMatcher.matches) {
				faviconLightTheme.remove();
				document.head.append(faviconDarkTheme);
			} else {
				faviconDarkTheme.remove();
				document.head.append(faviconLightTheme);
			}
		}

		var colorSchemeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
		colorSchemeMatcher.addEventListener("change", onColorSchemeMatcherUpdate);
		onColorSchemeMatcherUpdate();
	}, [])
}