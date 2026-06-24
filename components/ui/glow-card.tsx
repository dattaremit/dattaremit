"use client";

import BorderGlow from "@/components/BorderGlow";

// BorderGlow ships as untyped JSX; describe just the props we use.
const Glow = BorderGlow as React.FC<{
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowColor?: string;
  glowRadius?: number;
  glowIntensity?: number;
  colors?: string[];
}>;

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Brand-themed wrapper around React Bits BorderGlow: a card whose border lights
 * up and follows the cursor on hover. Uses the theme's card background so it
 * works in light and dark mode, and brand-aligned glow/mesh colors.
 */
export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <Glow
      backgroundColor="var(--card)"
      borderRadius={24}
      glowColor="255 70 65"
      glowIntensity={0.9}
      glowRadius={28}
      colors={["#6366f1", "#60a5fa", "#2dd4bf"]}
      className={className}
    >
      {children}
    </Glow>
  );
}
