import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onUpdate = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onUpdate);
    onUpdate();
    return () => window.removeEventListener("scroll", onUpdate);
  }, [setScrollPosition]);

  return scrollPosition;
}
