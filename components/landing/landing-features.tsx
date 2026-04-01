"use client";

import {
  IconClockHour4,
  IconDeviceDesktop,
  IconPalette,
  IconPhoto,
  IconShieldCheck,
  IconWand,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconWand,
    title: "AI-Powered Enhancement",
    description:
      "Our advanced AI transforms ordinary photos into stunning, professional-quality images automatically.",
  },
  {
    icon: IconPalette,
    title: "Multiple Style Templates",
    description:
      "Choose from a variety of professionally designed styles to match your brand and property type.",
  },
  {
    icon: IconClockHour4,
    title: "Results in Seconds",
    description:
      "No waiting around. Get your enhanced photos back in seconds, not hours or days.",
  },
  {
    icon: IconPhoto,
    title: "Batch Processing",
    description:
      "Upload multiple photos at once and process entire property shoots in one go.",
  },
  {
    icon: IconDeviceDesktop,
    title: "No Software Required",
    description:
      "Everything runs in your browser. No downloads, no installations, no technical skills needed.",
  },
  {
    icon: IconShieldCheck,
    title: "Secure & Private",
    description:
      "Your photos are encrypted and automatically deleted after processing. Your data stays yours.",
  },
];

export function LandingFeatures() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-36"
      id="features"
      style={{ backgroundColor: "var(--landing-bg)" }}
    >
      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-1/4 -left-20 -z-10 size-[600px] rounded-full blur-[150px] opacity-10 animate-pulse"
        style={{ backgroundColor: "var(--landing-accent)" }}
      />
      <div 
        className="absolute bottom-1/4 -right-20 -z-10 size-[600px] rounded-full blur-[150px] opacity-5 animate-pulse"
        style={{ backgroundColor: "var(--landing-accent)", animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-24">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-bold text-[10px] uppercase tracking-widest"
            style={{
              backgroundColor: "var(--landing-bg-alt)",
              color: "var(--landing-accent)",
              border: "1px solid var(--landing-border)",
            }}
          >
            Capabilities
          </div>
          <h2
            className="mt-3 font-bold text-4xl tracking-tight sm:text-5xl lg:text-7xl"
            style={{ color: "var(--landing-text)" }}
          >
            Powerful AI features,
            <br />
            <span style={{ color: "var(--landing-accent)" }}>
              delivered instantly
            </span>
          </h2>
        </div>

        {/* Asymmetric Bento Grid - Refined Responsiveness with Minimal Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 sm:px-0">
          
          {/* 1. The Main Showcase */}
          <div 
            className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[2rem] flex flex-col transition-all duration-500 p-6 md:p-8 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-inner aspect-[16/10] bg-zinc-100/50">
               <img src="/image2.png" className="absolute inset-0 size-full object-cover transition-all duration-700 group-hover:scale-105" alt="Before" />
               <img src="/image4.png" className="absolute inset-0 size-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105" alt="After" />
               <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider z-20">
                  <span className="group-hover:hidden">Original</span>
                  <span className="hidden group-hover:inline">AI Enhanced</span>
               </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--landing-text)" }}>AI Photo Master</h3>
              <p className="text-sm md:text-base leading-relaxed opacity-60" style={{ color: "var(--landing-text-muted)" }}>
                Our flagship model processes lighting and composition to deliver stunning property photos that convert.
              </p>
            </div>
          </div>
          
          {/* 2. Speed */}
          <div 
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col justify-center transition-all duration-500 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
            <div className="flex items-center gap-6">
              <div className="size-14 md:size-20 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--landing-bg-alt)" }}>
                <IconClockHour4 className="size-8 md:size-10" style={{ color: "var(--landing-accent)" }} />
              </div>
              <div className="flex-1">
                 <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: "var(--landing-text)" }}>30 Second Polish</h3>
                 <p className="text-sm opacity-60" style={{ color: "var(--landing-text-muted)" }}>Get your enhanced photos back instantly.</p>
              </div>
            </div>
          </div>

          {/* 3. Style Templates */}
          <div 
             className="group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col transition-all duration-500 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
             style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
             <div className="flex items-center gap-4 mb-4">
                <IconPalette className="size-8" style={{ color: "var(--landing-accent)" }} />
                <h3 className="text-xl font-bold" style={{ color: "var(--landing-text)" }}>Creative Styles</h3>
             </div>
             <p className="text-xs md:text-sm leading-relaxed opacity-60" style={{ color: "var(--landing-text-muted)" }}>Professionally curated templates for any aesthetic.</p>
          </div>

          {/* 4. Batch Processing */}
          <div 
             className="group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col transition-all duration-500 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
             style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
             <div className="flex items-center gap-4 mb-4">
                <IconPhoto className="size-8" style={{ color: "var(--landing-accent)" }} />
                <h3 className="text-xl font-bold" style={{ color: "var(--landing-text)" }}>Batch Upload</h3>
             </div>
             <p className="text-xs md:text-sm leading-relaxed opacity-60" style={{ color: "var(--landing-text-muted)" }}>Process entire shoots in a single operation.</p>
          </div>

          {/* 5. Device Native */}
          <div 
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col justify-center transition-all duration-500 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
            <div className="flex items-center gap-6">
               <IconDeviceDesktop className="size-12 md:size-16 shrink-0 order-2 sm:order-2" style={{ color: "var(--landing-accent)" }} />
               <div className="flex-1 order-1 sm:order-1 text-left">
                 <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--landing-text)" }}>Zero Installation</h3>
                 <p className="text-sm opacity-60" style={{ color: "var(--landing-text-muted)" }}>Runs in your browser. Fast, secure, and always updated.</p>
               </div>
            </div>
          </div>

          {/* 6. Security & Privacy */}
          <div 
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem] p-6 md:p-8 flex flex-col justify-center transition-all duration-500 border hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            style={{ 
              backgroundColor: "var(--landing-card)",
              borderColor: "var(--landing-accent)"
            }}
          >
            <div className="flex items-center gap-6">
              <IconShieldCheck className="size-12 md:size-16 shrink-0" style={{ color: "var(--landing-accent)" }} />
              <div className="flex-1 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--landing-text)" }}>Secure by Design</h3>
                <p className="text-sm opacity-60" style={{ color: "var(--landing-text-muted)" }}>Your data is encrypted and wiped after 24h.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
