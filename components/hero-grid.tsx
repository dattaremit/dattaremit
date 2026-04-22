/**
 * Animated net/grid backdrop for the hero. Grid lines slowly pan across the
 * section; a handful of brand-coloured nodes at intersections pulse in a
 * staggered loop. Everything is masked with a soft radial vignette so the
 * pattern fades into the background at the edges.
 */

const nodes = [
  { top: "22%", left: "14%", delay: "0s" },
  { top: "36%", left: "72%", delay: "1.2s" },
  { top: "55%", left: "32%", delay: "2.4s" },
  { top: "18%", left: "86%", delay: "3.6s" },
  { top: "68%", left: "58%", delay: "0.6s" },
  { top: "48%", left: "8%", delay: "2s" },
  { top: "80%", left: "78%", delay: "1.8s" },
];

export function HeroGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid-lines absolute inset-0" />

      {nodes.map((n, i) => (
        <span
          key={i}
          className="hero-grid-node"
          style={{
            top: n.top,
            left: n.left,
            animationDelay: n.delay,
          }}
        />
      ))}
    </div>
  );
}
