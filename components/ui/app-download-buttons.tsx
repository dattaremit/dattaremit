import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppDownloadButtonsProps {
  className?: string;
  direction?: "row" | "column";
}

export function AppDownloadButtons({
  className,
  direction = "row",
}: AppDownloadButtonsProps) {
  return (
    <div
      className={cn(
        "flex gap-2",
        direction === "column" ? "flex-col" : "flex-row flex-wrap",
        className,
      )}
    >
      <Link
        href="/coming-soon"
        className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-2 backdrop-blur-sm transition-all duration-200 hover:border-foreground/30 hover:bg-card"
      >
        <AppleIcon className="size-5 text-foreground" />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Download on the
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-foreground">
            App Store
          </span>
        </div>
      </Link>
      <Link
        href="/coming-soon"
        className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-2 backdrop-blur-sm transition-all duration-200 hover:border-foreground/30 hover:bg-card"
      >
        <Image
          src="/google-play.png"
          alt="Google Play"
          width={20}
          height={20}
          className="size-5"
        />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Get it on
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-foreground">
            Google Play
          </span>
        </div>
      </Link>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
