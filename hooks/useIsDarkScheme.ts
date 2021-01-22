import { useEffect, useState } from "react";

export function useIsDarkScheme() {
  const [isDarkScheme, setIsDarkScheme] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");

    const onUpdate = () => setIsDarkScheme(matcher.matches);

    matcher.addEventListener("change", onUpdate);

    onUpdate();
  }, []);

  return isDarkScheme;
}
