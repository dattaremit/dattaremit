"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Flag } from "@/components/ui/flag";
import { CURRENCIES, getCurrency, type CurrencyCode } from "@/lib/currencies";

interface CurrencySelectorProps {
  value: CurrencyCode;
  onChange: (code: CurrencyCode) => void;
  /** Visual size of the trigger; defaults to the compact chip used in cards. */
  size?: "sm" | "md";
  className?: string;
}

export function CurrencySelector({
  value,
  onChange,
  size = "sm",
  className = "",
}: CurrencySelectorProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = getCurrency(value);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const triggerPad = size === "md" ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Recipient currency: ${selected.code}. Change currency.`}
        className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/60 font-medium transition-colors hover:bg-background ${triggerPad}`}
      >
        <Flag code={selected.country} />
        {selected.code}
        <ChevronDown
          className={`size-3.5 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select recipient currency"
          className="absolute right-0 z-30 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-lg"
        >
          {CURRENCIES.map((c) => {
            const isSelected = c.code === value;
            return (
              <li key={c.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(c.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm transition-colors hover:bg-background/70 ${
                    isSelected ? "bg-background/50" : ""
                  }`}
                >
                  <Flag code={c.country} />
                  <span className="font-medium">{c.code}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {c.destination}
                  </span>
                  {isSelected && <Check className="ml-auto size-4 text-brand shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
