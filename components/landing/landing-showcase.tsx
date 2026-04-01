"use client";

import { IconDownload, IconUpload, IconWand } from "@tabler/icons-react";

export function LandingShowcase() {
  return (
    <section className="px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Centered Header Layout - Styled after 'How It Works' */}
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-24">
          <p
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: "var(--landing-accent)" }}
          >
            Neural Enhancement
          </p>
          <h2
            className="mt-3 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--landing-text)" }}
          >
             High-fidelity 
             <br />
             transformations.
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--landing-text-muted)" }}
          >
            Our AI analyzes lighting patterns to reconstruct missing details, 
            delivering a level of clarity that was previously only possible with hours of manual retouching.
          </p>
        </div>

        {/* Actionable Columns Layout Below Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Video Content (Left) */}
          <div 
            className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/20 aspect-video shadow-2xl"
            style={{ 
              boxShadow: "0 40px 100px -40px var(--landing-shadow)",
              borderColor: "var(--landing-border)"
            }}
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="size-full object-cover"
            >
              <source src="/enhancement.mp4" type="video/mp4" />
            </video>
            
            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 z-10">
               <div className="size-1 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">Active Processing</span>
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="flex flex-col items-start text-left space-y-8">
            {[
              { 
                title: "Neural Lighting Reconstruction", 
                description: "Reconstructs lighting patterns to provide natural, balanced illumination even in challenging environments.",
                icon: IconWand 
              },
              { 
                title: "Automated Perspective Alignment", 
                description: "Surgically corrects camera angles and lens distortion to deliver mathematically perfect property lines.",
                icon: IconUpload 
              },
              { 
                title: "Professional Color Balancing", 
                description: "Deep-learned color models that handle mixed-light and vibrant surfaces with surgical accuracy.",
                icon: IconDownload 
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 group transition-all hover:translate-x-1">
                 <div className="size-12 mt-1 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/10" style={{ backgroundColor: "var(--landing-bg-alt)", border: "1px solid var(--landing-border)" }}>
                    <item.icon className="size-6" style={{ color: "var(--landing-accent)" }} />
                 </div>
                 <div className="flex-1">
                   <h4 className="font-bold text-lg mb-1 transition-colors group-hover:text-landing-accent" style={{ color: "var(--landing-text)" }}>{item.title}</h4>
                   <p className="text-sm opacity-60 leading-relaxed" style={{ color: "var(--landing-text-muted)" }}>{item.description}</p>
                 </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
