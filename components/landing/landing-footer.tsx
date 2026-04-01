import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative px-6 py-10 sm:py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTop: "1px solid var(--landing-border)",
      }}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: "var(--landing-bg-alt)", 
          opacity: 0.15
        }} 
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              className="font-semibold tracking-tight text-lg"
              href="/"
              style={{ color: "var(--landing-text)" }}
            >
              Proppi
            </Link>
            <p
              className="mt-2 sm:mt-4 max-w-xs text-xs sm:text-sm leading-relaxed"
              style={{ color: "var(--landing-text-muted)" }}
            >
              Transform your real estate photos with AI-powered enhancements.
              Professional results in seconds.
            </p>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6 flex gap-3">
              <a
                aria-label="Follow us on X (Twitter)"
                className="flex size-8 sm:size-10 items-center justify-center rounded-full transition-colors hover:opacity-70"
                href="https://twitter.com"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--landing-bg)",
                  border: "1px solid var(--landing-border)",
                }}
                target="_blank"
              >
                <IconBrandX
                  className="size-3.5 sm:size-4"
                  style={{ color: "var(--landing-text)" }}
                />
              </a>
              <a
                aria-label="Follow us on LinkedIn"
                className="flex size-8 sm:size-10 items-center justify-center rounded-full transition-colors hover:opacity-70"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--landing-bg)",
                  border: "1px solid var(--landing-border)",
                }}
                target="_blank"
              >
                <IconBrandLinkedin
                  className="size-3.5 sm:size-4"
                  style={{ color: "var(--landing-text)" }}
                />
              </a>
            </div>
          </div>

          {/* Links Sections - Shared Grid on small screens */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:col-span-2 lg:col-span-3 lg:grid-cols-3">
            {/* Product Links */}
            <div>
              <h3
                className="font-semibold text-xs sm:text-sm"
                style={{ color: "var(--landing-text)" }}
              >
                Product
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="text-xs sm:text-sm transition-colors hover:opacity-70"
                      href={link.href}
                      style={{ color: "var(--landing-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3
                className="font-semibold text-xs sm:text-sm"
                style={{ color: "var(--landing-text)" }}
              >
                Company
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="text-xs sm:text-sm transition-colors hover:opacity-70"
                      href={link.href}
                      style={{ color: "var(--landing-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-span-2 sm:col-span-1">
              <h3
                className="font-semibold text-xs sm:text-sm"
                style={{ color: "var(--landing-text)" }}
              >
                Legal
              </h3>
              <ul className="mt-2 ml-0 flex gap-4 sm:ml-0 sm:mt-4 sm:flex-col sm:gap-0 sm:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="text-xs sm:text-sm transition-colors hover:opacity-70"
                      href={link.href}
                      style={{ color: "var(--landing-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-2 sm:gap-4 border-t pt-6 sm:pt-8 sm:flex-row text-center sm:text-left"
          style={{ borderColor: "var(--landing-border)" }}
        >
          <p className="text-[10px] sm:text-sm" style={{ color: "var(--landing-text-muted)" }}>
            &copy; {currentYear} Proppi. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-sm" style={{ color: "var(--landing-text-muted)" }}>
            Made with care in Norway
          </p>
        </div>
      </div>
    </footer>
  );
}
