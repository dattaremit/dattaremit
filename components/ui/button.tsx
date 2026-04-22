import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/60 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:bg-foreground/90 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_6px_20px_-8px_rgba(20,16,10,0.25)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_10px_24px_-8px_rgba(20,16,10,0.35)]",
        brand:
          "bg-gradient-to-br from-[var(--brand)] to-[var(--brand-deep)] text-[var(--primary-foreground)] hover:brightness-[1.08] active:brightness-95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_24px_-6px_color-mix(in_oklch,var(--brand-deep)_45%,transparent)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_14px_32px_-8px_color-mix(in_oklch,var(--brand-deep)_60%,transparent)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/30 dark:hover:bg-foreground/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-foreground/5 text-foreground dark:hover:bg-foreground/10",
        link: "text-foreground underline-offset-4 hover:underline decoration-[var(--brand-deep)] decoration-2",
      },
      size: {
        default: "h-10 px-5 has-[>svg]:px-4",
        xs: "h-6 gap-1 px-2.5 text-xs has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 px-7 text-[15px] has-[>svg]:px-5",
        xl: "h-14 px-8 text-base has-[>svg]:px-6 font-semibold",
        icon: "size-10",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
