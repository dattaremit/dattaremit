"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How it works", type: "anchor" as const },
  { href: "#compare", label: "Compare", type: "anchor" as const },
  { href: "/security", label: "Security", type: "route" as const },
  { href: "/compliance", label: "Compliance", type: "route" as const },
  { href: "#faq", label: "FAQ", type: "anchor" as const },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        setMobileMenuOpen(false);
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    },
    [],
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-background/75 backdrop-blur-xl border-b border-border/70"
            : "bg-background/40 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo + wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="DattaRemit home"
          >
            <Image
              src="/logo.png"
              alt="DattaRemit"
              width={36}
              height={36}
              priority
              className="size-8 md:size-9 object-contain"
            />
            <span className="text-[17px] md:text-[19px] font-semibold tracking-[-0.02em] text-foreground">
              Datta<span className="font-light opacity-80">Remit</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm px-1.5 py-1.5">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="sm"
              variant="brand"
              className="hidden sm:inline-flex"
              asChild
            >
              <a
                href={
                  typeof window !== "undefined" &&
                  window.location.pathname === "/"
                    ? "#contact"
                    : "/#contact"
                }
              >
                Get started
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <button
              className="lg:hidden inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground transition-colors hover:bg-card"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-[18px]" />
              ) : (
                <Menu className="size-[18px]" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col">
            {navLinks.map((link, i) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-base font-medium text-foreground border-b border-border/50 last:border-b-0"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[10px] font-normal tabular-nums tracking-[0.15em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="flex items-center justify-between py-4 text-base font-medium text-foreground border-b border-border/50 last:border-b-0"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[10px] font-normal tabular-nums tracking-[0.15em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </a>
              ),
            )}
            <Button variant="brand" size="lg" className="mt-6 w-full" asChild>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
