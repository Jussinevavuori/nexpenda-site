import { useEffect, useState, useCallback, useMemo } from "react";

export function useMedia(query: string, defaultValue: boolean = false) {
  /**
   * Current value
   */
  const [value, setValue] = useState<boolean>(defaultValue);

  /**
   * Listening to changes and cleanup
   */
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const changeHandler = () => setValue(mediaQueryList.matches);
    changeHandler();
    mediaQueryList.addEventListener("change", changeHandler);
    return () => {
      mediaQueryList.removeEventListener("change", changeHandler);
    };
  }, [query]);

  /**
   * Returning value
   */
  return value;
}

/**
 * (min-width: $px) media query hook wrapper
 */
export function useMinWidthMedia(minWidth: number) {
  const query = `(min-width: ${minWidth}px)`;
  return useMedia(query);
}

/**
 * (max-width: $px) media query hook wrapper
 */
export function useMaxWidthMedia(maxWidth: number) {
  const query = `(max-width: ${maxWidth}px)`;
  return useMedia(query);
}

/**
 * Responsive media queries for app breakpoints
 *
 * SM breakpoint at 600px
 */
export function useSmMedia() {
  const query = `(min-width: 600px)`;
  return useMedia(query);
}

/**
 * Responsive media queries for app breakpoints
 *
 * MD breakpoint at 900px
 */
export function useMdMedia() {
  const query = `(min-width: 900px)`;
  return useMedia(query);
}

/**
 * Responsive media queries for app breakpoints
 *
 * LG breakpoint at 1200px
 */
export function useLgMedia() {
  const query = `(min-width: 1200px)`;
  return useMedia(query);
}
