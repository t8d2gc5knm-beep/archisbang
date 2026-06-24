import Lenis from 'lenis';

/**
 * Initialise Lenis smooth scrolling.
 * Returns `null` when the user prefers reduced motion, leaving native scroll
 * untouched. Safe to call once per page load.
 */
export function initLenis(): Lenis | null {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}
