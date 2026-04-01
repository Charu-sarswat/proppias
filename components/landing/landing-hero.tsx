"use client";

import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

function HeroAuthButton() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div
        className="h-12 w-36 animate-pulse rounded-full"
        style={{ backgroundColor: "var(--landing-border)" }}
      />
    );
  }

  const href = session ? "/dashboard" : "/sign-in";
  const text = session ? "Go to Dashboard" : "Start for Free";

  return (
    <Link
      className="inline-flex h-12 items-center gap-2 rounded-full px-7 font-medium text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
      href={href}
      style={{
        backgroundColor: "var(--landing-accent)",
        color: "var(--landing-accent-foreground)",
      }}
    >
      {text}
      <IconArrowRight className="size-5" />
    </Link>
  );
}

function StatCounter({ target, suffix = "", duration = 1500, start = false }: { target: number, suffix?: string, duration?: number, start?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, start]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

import { useRef } from "react";

export function LandingHero() {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const fullText = "Create Stunning Property Photos Instantly with AI";
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation timing
  const typingSpeed = 50; 
  
  useEffect(() => {
    const handleScroll = () => {
      if (!isFinished || !heroRef.current) return;
      
      const scrollY = window.scrollY;
      const threshold = 100;
      const range = 500;
      const progress = Math.min(Math.max((scrollY - threshold) / range, 0), 1);
      
      // Use requestAnimationFrame for smoother performance
      window.requestAnimationFrame(() => {
        heroRef.current?.style.setProperty('--scroll-progress', progress.toString());
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFinished]);

  useEffect(() => {
    let currentIdx = 0;
    const timer = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(timer);
        setTimeout(() => setIsFinished(true), 300);
      }
    }, typingSpeed);
    
    return () => clearInterval(timer);
  }, []);

  // Map text to components with correct styling
  const renderTypedHeading = () => {
    const firstPart = "Create Stunning ";
    const accentPart = "Property Photos ";
    const lastPart = "Instantly with AI";

    return (
      <>
        {/* First Part */}
        <span>{displayText.slice(0, firstPart.length)}</span>
        
        {/* Accent Part */}
        {displayText.length > firstPart.length && (
          <span style={{ color: "var(--landing-accent)" }}>
            {displayText.slice(firstPart.length, firstPart.length + accentPart.length)}
          </span>
        )}
        
        {/* Last Part */}
        {displayText.length > firstPart.length + accentPart.length && (
          <span>{displayText.slice(firstPart.length + accentPart.length)}</span>
        )}

        {/* Minimal Blinking Cursor */}
        {!isFinished && (
          <span className="inline-block w-[3px] h-[1em] ml-1 bg-current animate-pulse align-middle" 
                style={{ backgroundColor: "var(--landing-accent)" }} />
        )}
      </>
    );
  };

  return (
    <section ref={heroRef} className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-36 md:pb-32" style={{ "--scroll-progress": "0" } as any}>
      {/* Subtle gradient accent - Fades in */}
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-1/2 -z-10 h-[700px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-1000",
          displayText.length > 0 ? "opacity-40" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(circle, var(--landing-accent) 0%, transparent 70%)",
        }}
      />

      {/* Fading Edges for smooth transitions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 -z-10" style={{ background: "linear-gradient(to bottom, var(--landing-bg), transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 -z-10" style={{ background: "linear-gradient(to top, var(--landing-bg), transparent)" }} />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge - Fades in after typing */}
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-semibold text-xs uppercase tracking-wider transition-all duration-700 ease-out",
            isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{
            backgroundColor: "var(--landing-bg-alt)",
            color: "var(--landing-text-muted)",
            border: "1px solid var(--landing-border)",
          }}
        >
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: "var(--landing-accent)" }}
          />
          #1 AI Photo Editor for Real Estate
        </div>

        {/* Main Headline - Typewriter */}
        <h1
          className="font-bold text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl min-h-[2.2em] md:min-h-[auto]"
          style={{ color: "var(--landing-text)" }}
        >
          {renderTypedHeading()}
        </h1>

        {/* Subheadline - Fades in after typing */}
        <p
          className={cn(
            "mx-auto mt-6 max-w-xl text-lg leading-relaxed md:text-xl transition-all duration-700 delay-100 ease-out",
            isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ color: "var(--landing-text-muted)" }}
        >
          Transform photos 10x faster. No design skills needed.
        </p>

        {/* CTA Buttons - Fades in after typing */}
        <div className={cn(
          "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-200 ease-out",
          isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Suspense
            fallback={
              <div
                className="h-12 w-36 animate-pulse rounded-full"
                style={{ backgroundColor: "var(--landing-border)" }}
              />
            }
          >
            <HeroAuthButton />
          </Suspense>

          <button
            className="inline-flex h-12 items-center gap-2 rounded-full px-6 font-medium text-base transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--landing-card)",
              color: "var(--landing-text)",
              border: "1px solid var(--landing-border-strong)",
            }}
            type="button"
          >
            <IconPlayerPlay className="size-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats Row - Fades in after typing */}
        <div className={cn(
          "mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-700 delay-300 ease-out",
          isFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="text-center">
            <p
              className="font-bold text-2xl tabular-nums md:text-3xl"
              style={{ color: "var(--landing-text)" }}
            >
              <StatCounter target={50000} suffix="+" start={isFinished} />
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--landing-text-muted)" }}
            >
              Photos enhanced
            </p>
          </div>
          <div
            className="hidden h-10 w-px md:block"
            style={{ backgroundColor: "var(--landing-border)" }}
          />
          <div className="text-center">
            <p
              className="font-bold text-2xl tabular-nums md:text-3xl"
              style={{ color: "var(--landing-text)" }}
            >
              <StatCounter target={30} suffix=" sec" start={isFinished} />
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--landing-text-muted)" }}
            >
              Average time
            </p>
          </div>
          <div
            className="hidden h-10 w-px md:block"
            style={{ backgroundColor: "var(--landing-border)" }}
          />
          <div className="text-center">
            <p
              className="font-bold text-2xl tabular-nums md:text-3xl"
              style={{ color: "var(--landing-accent)" }}
            >
              +<StatCounter target={85} suffix="%" start={isFinished} />
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--landing-text-muted)" }}
            >
              Listing engagement
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image Preview - Scroll Triggered Expansion */}
      <div 
        className="flex justify-center"
        style={{ marginTop: "4rem" }}
      >
        <div 
          className={cn(
            "relative overflow-hidden",
            isFinished ? "opacity-100" : "opacity-0 transition-opacity duration-300"
          )}
          style={{
            width: "calc(60vw + (40vw * var(--scroll-progress)))",
            maxWidth: "100svw",
            opacity: "calc(0.2 + (0.8 * var(--scroll-progress)))",
            transform: "scale(calc(0.9 + (0.1 * var(--scroll-progress))))",
            borderRadius: "calc(2rem * (1 - var(--scroll-progress)))",
            backgroundColor: "var(--landing-card)",
            border: "1px solid var(--landing-border)",
            willChange: "transform, width, opacity, border-radius"
          }}
        >
          {/* Browser Chrome - Rapid fade out */}
          <div
            className="flex h-10 items-center gap-2 px-4 md:h-12 border-b border-white/5"
            style={{ 
              backgroundColor: "var(--landing-bg-alt)",
              opacity: "calc(1 - (var(--scroll-progress) * 2.5))",
              height: "calc(48px * (1 - var(--scroll-progress) * 2))",
              minHeight: "0",
              overflow: "hidden"
            }}
          >
            <div className="flex gap-1.5 opacity-30">
              <div className="size-2 rounded-full bg-zinc-500" />
              <div className="size-2 rounded-full bg-zinc-500" />
              <div className="size-2 rounded-full bg-zinc-500" />
            </div>
          </div>
 
          {/* Preview Content */}
          <div
            className="relative overflow-hidden w-full"
            style={{ 
              aspectRatio: "21/9",
              backgroundColor: "black" 
            }}
          >
            <video
              autoPlay
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/propp-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
