import { useEffect } from "react";

export function useThemeFavicon() {
  useEffect(() => {
    function onColorSchemeMatcherUpdate() {
      const faviconDarkTheme = document.getElementById("favicon-dark-theme");
      const faviconLightTheme = document.getElementById("favicon-light-theme");
      if (colorSchemeMatcher.matches) {
        if (faviconLightTheme) {
          faviconLightTheme.remove();
        }
        if (faviconDarkTheme) {
          document.head.append(faviconDarkTheme);
        }
      } else {
        if (faviconDarkTheme) {
          faviconDarkTheme.remove();
        }
        if (faviconLightTheme) {
          document.head.append(faviconLightTheme);
        }
      }
    }

    var colorSchemeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
    colorSchemeMatcher.addEventListener("change", onColorSchemeMatcherUpdate);
    onColorSchemeMatcherUpdate();
  }, []);
}
