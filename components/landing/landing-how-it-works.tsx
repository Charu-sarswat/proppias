"use client";

import { IconDownload, IconUpload, IconWand } from "@tabler/icons-react";

const steps = [
  {
    step: "01",
    icon: IconUpload,
    title: "Upload Your Photos",
    description:
      "Drag and drop your property photos or select them from your device. We support all common image formats.",
  },
  {
    step: "02",
    icon: IconWand,
    title: "Choose a Style",
    description:
      "Select from our collection of professional style templates designed for different property types and aesthetics.",
  },
  {
    step: "03",
    icon: IconDownload,
    title: "Download & Share",
    description:
      "Get your enhanced photos instantly. Download in high resolution, ready for your listings and marketing.",
  },
];

export function LandingHowItWorks() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      id="how-it-works"
      style={{ backgroundColor: "var(--landing-bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "var(--landing-accent)" }}
          >
            How It Works
          </p>
          <h2
            className="mt-3 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--landing-text)" }}
          >
            Three simple steps to
            <br />
            perfect photos
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--landing-text-muted)" }}
          >
            No complicated software or design experience required. Just upload,
            select, and download.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center px-2 sm:px-4">
          {/* Steps (Left Column) */}
          <div className="relative">
            {/* Vertical Connecting line */}
            <div
              className="absolute left-[2.25rem] sm:left-[3.5rem] top-0 bottom-0 w-0.5"
              style={{ 
                backgroundColor: "var(--landing-accent)",
                opacity: 0.2,
              }}
            />

            <div className="flex flex-col gap-8 sm:gap-12 relative z-10">
              {steps.map((step) => (
                <div 
                  className="flex items-start gap-4 sm:gap-6" 
                  key={step.step}
                >
                  {/* Step Number Circle */}
                  <div className="relative shrink-0">
                    <div className="relative group">
                      <div
                        className="relative z-10 flex size-18 sm:size-28 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: "var(--landing-card)",
                          border: "1px solid var(--landing-accent)",
                        }}
                      >
                        <step.icon
                          className="size-6 sm:size-10"
                          style={{ color: "var(--landing-accent)" }}
                        />
                      </div>

                      {/* Step number badge */}
                      <div
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-30 flex size-7 sm:size-10 items-center justify-center rounded-full font-bold text-[10px] sm:text-sm"
                        style={{
                          backgroundColor: "var(--landing-accent)",
                          color: "var(--landing-accent-foreground)",
                        }}
                      >
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 sm:pt-6">
                    <h3
                      className="font-bold text-lg sm:text-xl tracking-tight"
                      style={{ color: "var(--landing-text)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed"
                      style={{ color: "var(--landing-text-muted)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video (Right Column) */}
          <div className="relative lg:mt-0 mt-8">
             <div 
              className="relative overflow-hidden rounded-[2.5rem] p-1.5 shadow-[0_32px_64px_-16px_var(--landing-shadow)]"
              style={{ 
                backgroundColor: "var(--landing-card)",
                border: "1px solid var(--landing-border)"
              }}
             >
                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-black">
                  <video
                    autoPlay
                    className="absolute inset-0 size-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/proppi.mp4" type="video/mp4" />
                  </video>
                </div>
             </div>

             {/* Decorative elements */}
             <div 
               className="absolute -right-6 -bottom-6 -z-10 size-32 rounded-full blur-2xl"
               style={{ 
                 backgroundColor: "var(--landing-accent)",
                 opacity: 0.1 
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
