"use client";

import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { type COBEOptions } from "cobe";

// Globe tuned for the dark default theme, with markers on the corridors we
// serve: the US (source) and each supported destination country. Shared by the
// hero and the security/compliance page headers so the motif stays consistent.
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 5,
  baseColor: [0.35, 0.37, 0.5],
  markerColor: [0.45, 0.52, 1],
  glowColor: [0.25, 0.28, 0.55],
  markers: [
    { location: [40.7128, -74.006], size: 0.1 }, // United States (source)
    { location: [19.076, 72.8777], size: 0.1 }, // India
    { location: [14.5995, 120.9842], size: 0.08 }, // Philippines
    { location: [21.0278, 105.8342], size: 0.07 }, // Vietnam
    { location: [-6.2088, 106.8456], size: 0.08 }, // Indonesia
    { location: [6.5244, 3.3792], size: 0.07 }, // Nigeria
  ],
};

/**
 * Decorative, auto-rotating globe placed behind hero content. Pass position and
 * size via `className`; the constant decoration styling (faint opacity, radial
 * fade, no pointer capture) lives here.
 */
export function HeroGlobe({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-0 opacity-30 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_65%)]",
        className,
      )}
    >
      <Globe config={GLOBE_CONFIG} />
    </div>
  );
}
