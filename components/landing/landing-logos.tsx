"use client";

import { 
  IconBuildingSkyscraper, 
  IconHome, 
  IconBuildingCommunity, 
  IconLayoutGrid, 
  IconSmartHome, 
  IconBuildingArch, 
  IconHome2,
  IconBuildingFactory,
  IconBuildingFortress,
  IconBuildingCastle,
  IconBuildingBridge,
  IconBuildingChurch,
  IconBuilding
} from "@tabler/icons-react";

const brandIcons = [
  IconBuildingSkyscraper, IconHome, IconBuildingCommunity, IconLayoutGrid, 
  IconSmartHome, IconBuildingArch, IconHome2, IconBuildingFactory,
  IconBuildingFortress, IconBuildingCastle, IconBuildingBridge, IconBuildingChurch, IconBuilding
];

export function LandingLogos() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-white border-y border-zinc-100">
      <div className="relative flex flex-col items-center">
        {/* Unified Pill Design */}
        <div
          className="mb-20 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-semibold text-xs uppercase tracking-wider"
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
          Partner Ecosystem
        </div>

        {/* Sharp Turn Marquee Wrapper */}
        <div className="relative flex overflow-hidden w-full py-16 md:py-32">
          <div className="flex animate-marquee gap-x-8 md:gap-x-12 whitespace-nowrap min-w-full items-center will-change-transform transform-gpu">
            {brandIcons.map((Icon, i) => (
              <div 
                key={i} 
                className="size-16 md:size-24 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 animate-snake shadow-sm"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <Icon className="size-8 md:size-12" style={{ color: "var(--landing-text)" }} />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {brandIcons.map((Icon, i) => (
              <div 
                key={`dup-${i}`} 
                className="size-16 md:size-24 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 animate-snake shadow-sm"
                style={{ 
                  animationDelay: `${(i + brandIcons.length) * 0.2}s`,
                }}
              >
                <Icon className="size-8 md:size-12" style={{ color: "var(--landing-text)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes snake {
          0% { transform: translateY(-30px); }
          50% { transform: translateY(30px); }
          100% { transform: translateY(-30px); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        .animate-snake {
          animation: snake 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }
      `}</style>
    </section>

  );
}
