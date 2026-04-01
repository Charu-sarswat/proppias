import { Toaster } from "@/components/ui/sonner";
import { constructMetadata } from "@/lib/constructMetadata";

export const metadata = constructMetadata({
  title: "Sign In | Proppi",
  description: "Sign in to your Proppi account",
  noIndex: true,
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left side: Image (Visible on large screens) */}
      <div className="relative hidden w-1/2 lg:block">
        <img 
          src="/image3.png" 
          alt="Authentication background" 
          className="h-full w-full object-cover"
        />
        {/* Subtle Overlay to match theme */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right side: Auth Form */}
      <div className="flex flex-1 items-center justify-center bg-background p-6 md:p-10 lg:w-1/2">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
