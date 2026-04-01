"use client";

import { IconArrowRight, IconBook } from "@tabler/icons-react";
import Link from "next/link";

export function LandingCta() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div
        className="mx-auto max-w-5xl rounded-[2.5rem] px-8 py-16 text-center md:px-16 relative overflow-hidden"
        style={{
          backgroundColor: "var(--landing-card)",
          border: "1px solid var(--landing-border)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <h2
            className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl leading-tight mb-8"
            style={{ color: "var(--landing-text)" }}
          >
            Ready to <span style={{ color: "var(--landing-accent)" }}>transform</span>
            <br />
            your property listings?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="inline-flex h-14 items-center gap-2 rounded-full px-10 font-bold text-base transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
              href="/sign-in"
              style={{
                backgroundColor: "var(--landing-accent)",
                color: "white",
              }}
            >
              Start for Free
              <IconArrowRight className="size-5" />
            </Link>
            
            <Link
              className="inline-flex h-14 items-center gap-2 rounded-full px-8 font-medium text-base transition-all duration-200 hover:scale-[1.02]"
              href="/pricing"
              style={{
                backgroundColor: "var(--landing-card)",
                color: "var(--landing-text)",
                border: "1px solid var(--landing-border-strong)",
              }}
            >
              <IconBook className="size-5" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
