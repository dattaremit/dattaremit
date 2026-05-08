import { CSSProperties, ReactNode } from "react";

export interface LogoItem {
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
  node?: ReactNode;
}

export interface LogoLoopProps<T = LogoItem> {
  logos: ReadonlyArray<T>;
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: T, key: string) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

declare function LogoLoop<T = LogoItem>(props: LogoLoopProps<T>): ReactNode;

export { LogoLoop };
export default LogoLoop;
