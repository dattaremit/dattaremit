/**
 * Animated net/grid backdrop for the hero. Grid lines slowly pan across the
 * section and are masked with a soft radial vignette so the pattern fades
 * into the background at the edges.
 */

export function HeroGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid-lines absolute inset-0" />
    </div>
  );
}
