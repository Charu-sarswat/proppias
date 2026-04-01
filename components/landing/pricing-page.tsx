"use client";

import {
  IconArrowRight,
  IconCheck,
  IconMinus,
  IconMovie,
  IconPhoto,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { LandingFooter } from "./landing-footer";
import { LandingNav } from "./landing-nav";
import { cn } from "@/lib/utils";

const photoFeatures = [
  "Up to 20 images per property",
  "AI-powered enhancement",
  "Multiple style templates",
  "High-resolution downloads",
  "Ready in under 30 seconds",
];

const videoFeatures = [
  "Professional property video",
  "AI-powered editing",
  "Music and transitions included",
  "Portrait or landscape format",
  "Ready in minutes",
];

const faqs = [
  {
    question: "How does the pricing work?",
    answer:
      "We charge per project, not per month. For photo enhancement, you pay 1000 NOK per property (up to 20 images). For video creation, you pay 1000 NOK per video. No subscriptions, no hidden fees.",
  },
  {
    question: "What image formats do you support?",
    answer:
      "We support all common image formats including JPG, PNG, and WEBP. Maximum file size is 10MB per image. Enhanced images are delivered in high-resolution JPG format.",
  },
  {
    question: "How long does processing take?",
    answer:
      "Photo enhancement typically takes under 30 seconds per image. Video creation usually takes 5-10 minutes depending on the number of images and selected options.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes! New users get free credits to try out the platform. You can enhance a few images to see the quality before committing to a full property project.",
  },
  {
    question: "What if I have more than 20 images?",
    answer:
      "If your property has more than 20 images, you can create multiple projects or contact us for custom pricing on larger shoots.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If you're not satisfied with the results, contact us within 24 hours of processing and we'll work with you to make it right or provide a refund.",
  },
];

function PricingCard({
  icon: Icon,
  title,
  price,
  per,
  features,
  popular,
}: {
  icon: typeof IconPhoto;
  title: string;
  price: string;
  per: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[2rem] p-8 transition-all duration-500 group",
        popular ? "z-10 bg-card border-[2px]" : "bg-card border"
      )}
      style={{
        backgroundColor: "var(--landing-card)",
        borderColor: popular 
          ? "var(--landing-accent)" 
          : "color-mix(in oklch, var(--landing-accent) 15%, transparent)",
      }}
    >
      <style jsx>{`
        .group:hover {
          border-color: color-mix(in oklch, var(--landing-accent) 40%, transparent) !important;
        }
      `}</style>
      {popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-1.5 font-bold text-[10px] uppercase tracking-[0.2em]"
          style={{
            backgroundColor: "var(--landing-accent)",
            color: "white",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Title & Icon Header */}
      <div className="mb-8 flex items-center justify-between">
        <div
          className="relative inline-flex size-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundColor: popular
              ? "var(--landing-accent)"
              : "var(--landing-bg-alt)",
          }}
        >
          <Icon
            className="size-7"
            style={{
              color: popular
                ? "white"
                : "var(--landing-accent)",
            }}
          />
        </div>
        <div className="text-right">
           <h3
            className="font-bold text-xl"
            style={{ color: "var(--landing-text)" }}
          >
            {title}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Property Tier</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span
            className="font-bold text-5xl tracking-tight tabular-nums"
            style={{ color: "var(--landing-text)" }}
          >
            {price.split(' ')[0]}
          </span>
          <div className="flex flex-col">
            <span
              className="font-bold text-lg leading-none"
              style={{ color: "var(--landing-text)" }}
            >
              {price.split(' ')[1]}
            </span>
            <span
              className="text-xs font-medium uppercase tracking-wider opacity-60 mt-1"
              style={{ color: "var(--landing-text-muted)" }}
            >
              {per}
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 space-y-4 pt-4 border-t border-muted/20">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-40">What's included</p>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li className="flex items-start gap-3" key={feature}>
              <div 
                className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--landing-accent)", opacity: 0.1 }}
              >
                <IconCheck
                  className="size-3"
                  style={{ color: "var(--landing-accent)" }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--landing-text-muted)" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        className={cn(
          "mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full font-bold text-base transition-all duration-300 active:scale-[0.98]",
          !popular && "border border-zinc-200 dark:border-zinc-800"
        )}
        href="/sign-in"
        style={{
          backgroundColor: popular
            ? "var(--landing-accent)"
            : "transparent",
          color: popular
            ? "white"
            : "var(--landing-text)",
        }}
      >
        Get Started Now
        <IconArrowRight className="size-5" />
      </Link>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-xl transition-colors"
      style={{
        backgroundColor: isOpen ? "var(--landing-card)" : "transparent",
        border: "1px solid var(--landing-border)",
      }}
    >
      <button
        className="flex w-full items-center justify-between p-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="font-medium" style={{ color: "var(--landing-text)" }}>
          {question}
        </span>
        {isOpen ? (
          <IconMinus
            className="size-5 shrink-0"
            style={{ color: "var(--landing-text-muted)" }}
          />
        ) : (
          <IconPlus
            className="size-5 shrink-0"
            style={{ color: "var(--landing-text-muted)" }}
          />
        )}
      </button>
      {isOpen && (
        <div
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: "var(--landing-text-muted)" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export function PricingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--landing-bg)" }}
    >
      <LandingNav />

      <main className="relative">
        {/* Background Gradients */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--landing-accent) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute top-[400px] left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl opacity-10"
          style={{
            background: "var(--landing-accent)",
          }}
        />

        {/* Hero Section */}
        <section className="px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-semibold text-xs uppercase tracking-wider"
              style={{
                backgroundColor: "var(--landing-bg-alt)",
                color: "var(--landing-accent)",
                border: "1px solid var(--landing-border)",
              }}
            >
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: "var(--landing-accent)" }}
              />
              Pricing
            </div>
            <h1
              className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "var(--landing-text)" }}
            >
              Simple, transparent
              <br />
              <span style={{ color: "var(--landing-accent)" }}>pricing</span>
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--landing-text-muted)" }}
            >
              Pay per project. No subscriptions, no hidden fees,
              <br />
              just professional results in seconds.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <PricingCard
              features={photoFeatures}
              icon={IconPhoto}
              per="per property"
              popular
              price="1000 NOK"
              title="Photo Enhancement"
            />
            <PricingCard
              features={videoFeatures}
              icon={IconMovie}
              per="per video"
              price="1000 NOK"
              title="Video Creation"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="px-6 py-24"
          style={{ backgroundColor: "var(--landing-bg-alt)" }}
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p
                className="font-semibold text-sm uppercase tracking-wider"
                style={{ color: "var(--landing-accent)" }}
              >
                FAQ
              </p>
              <h2
                className="mt-3 font-bold text-3xl tracking-tight sm:text-4xl"
                style={{ color: "var(--landing-text)" }}
              >
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <FaqItem
                  answer={faq.answer}
                  key={faq.question}
                  question={faq.question}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-32">
          <div
            className="mx-auto max-w-5xl rounded-[3rem] px-8 py-20 text-center md:px-20 relative overflow-hidden"
            style={{
              backgroundColor: "var(--landing-card)",
              border: "1px solid var(--landing-border)",
            }}
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 size-64 bg-accent/20 blur-[100px] pointer-events-none" style={{ backgroundColor: "var(--landing-accent)", opacity: 0.05 }} />
            <div className="absolute bottom-0 left-0 size-64 bg-accent/20 blur-[100px] pointer-events-none" style={{ backgroundColor: "var(--landing-accent)", opacity: 0.05 }} />

            <div className="relative z-10">
              <h2
                className="font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--landing-text)" }}
              >
                Ready to transform your
                <br />
                <span style={{ color: "var(--landing-accent)" }}>property listings?</span>
              </h2>
              <p
                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-80"
                style={{ color: "var(--landing-text-muted)" }}
              >
                Join hundreds of top real estate professional who are already saving hours 
                on every listing. No credit card required to try your first project.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  className="inline-flex h-14 items-center gap-2 rounded-full px-10 font-bold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  href="/sign-in"
                  style={{
                    backgroundColor: "var(--landing-accent)",
                    color: "white",
                  }}
                >
                  Start for Free Today
                  <IconArrowRight className="size-5" />
                </Link>
                <Link
                  className="font-bold text-sm underline-offset-8 hover:underline"
                  href="/pricing"
                  style={{ color: "var(--landing-text)" }}
                >
                  View Custom Enterprise Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
