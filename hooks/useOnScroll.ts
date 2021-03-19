import { useEffect } from "react";

export function useOnScroll(callback: (scrollPosition: number) => void) {
  useEffect(() => {
    const onUpdate = () => callback(window.scrollY);
    window.addEventListener("scroll", onUpdate);
    onUpdate();
    return () => {
      window.removeEventListener("scroll", onUpdate);
    };
  }, [callback]);
}
