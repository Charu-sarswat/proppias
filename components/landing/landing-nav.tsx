"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

function AuthButton() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div
        className="h-10 w-28 animate-pulse rounded-full"
        style={{ backgroundColor: "var(--landing-border)" }}
      />
    );
  }

  if (session) {
    return (
      <Link
        className="inline-flex h-10 items-center gap-2 rounded-full px-5 font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
        href="/dashboard"
        style={{
          backgroundColor: "var(--landing-accent)",
          color: "var(--landing-accent-foreground)",
        }}
      >
        Dashboard
        <IconArrowRight className="size-4" />
      </Link>
    );
  }

  return (
    <Link
      className="inline-flex h-10 items-center gap-2 rounded-full px-5 font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
      href="/sign-in"
      style={{
        backgroundColor: "var(--landing-accent)",
        color: "var(--landing-accent-foreground)",
      }}
    >
      Get Started
      <IconArrowRight className="size-4" />
    </Link>
  );
}

export function LandingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 will-change-transform px-6",
        isScrolled ? "pt-4" : "pt-6",
        isLoaded ? "opacity-100" : "opacity-0 -translate-y-4"
      )}
    >
      <nav 
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between px-6 rounded-full transition-all duration-500",
          isScrolled 
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20 dark:border-zinc-800/50" 
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <Link
          className="flex items-center gap-2 group tracking-tight transition-opacity hover:opacity-80"
          href="/"
        >
          <div 
            className="size-7 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm"
            style={{ backgroundColor: "var(--landing-accent)" }}
          >
            <div className="size-4 border-2 border-white rounded-[4px]" />
          </div>
          <span 
            className="font-bold text-lg"
            style={{ color: "var(--landing-text)" }}
          >
            Proppi
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <Link
            className="relative font-medium text-sm transition-opacity hover:opacity-70 group"
            href="#features"
            style={{ color: "var(--landing-text-muted)" }}
          >
            Features
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-hover:w-full opacity-60" 
                  style={{ backgroundColor: "var(--landing-accent)" }} />
          </Link>
          <Link
            className="relative font-medium text-sm transition-opacity hover:opacity-70 group"
            href="#how-it-works"
            style={{ color: "var(--landing-text-muted)" }}
          >
            How It Works
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-hover:w-full opacity-60"
                  style={{ backgroundColor: "var(--landing-accent)" }} />
          </Link>
          <Link
            className="relative font-medium text-sm transition-opacity hover:opacity-70 group"
            href="/pricing"
            style={{ color: "var(--landing-text-muted)" }}
          >
            Pricing
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-hover:w-full opacity-60"
                  style={{ backgroundColor: "var(--landing-accent)" }} />
          </Link>
        </div>

        {/* Auth Button (Right Side) */}
        <div className="flex-none">
          <Suspense
            fallback={
              <div
                className="h-9 w-24 animate-pulse rounded-full"
                style={{ backgroundColor: "var(--landing-border)" }}
              />
            }
          >
            <AuthButton />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
