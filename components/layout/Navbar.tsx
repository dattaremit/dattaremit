"use client";

import Link from "next/link";
import Image from "next/image";
import { AppDownloadButtons } from "@/components/ui/app-download-buttons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";

const navLinks = [
  { href: "#home", label: "Home", type: "anchor" as const },
  { href: "#how-it-works", label: "How it works", type: "anchor" as const },
  { href: "#compare", label: "Compare", type: "anchor" as const },
  { href: "/security", label: "Security", type: "route" as const },
  { href: "/compliance", label: "Compliance", type: "route" as const },
  { href: "#faq", label: "FAQ", type: "anchor" as const },
  { href: "#contact", label: "Contact", type: "anchor" as const },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        // Let the browser navigate to /#anchor from other routes.
        setMobileMenuOpen(false);
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    },
    [],
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="DattaRemit Logo"
            width={96}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-tight">
            Datta<span className="text-primary">Remit</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={`/${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <AppDownloadButtons />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="pt-4 border-t border-border">
              <AppDownloadButtons direction="column" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
