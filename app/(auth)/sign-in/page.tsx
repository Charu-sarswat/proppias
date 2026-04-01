"use client";

import { IconLoader } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    setIsLoading(true);

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success("Signed in successfully");
          router.push(redirectTo);
        },
        onError: (ctx) => {
          if (ctx.error.status === 403) {
            // Email not verified - verification email was resent automatically
            toast.error(
              "Please verify your email. We've sent a new verification link."
            );
            router.push("/verify-email");
          } else {
            toast.error(ctx.error.message || "Invalid email or password");
          }
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className="space-y-6">
      {/* Brand Header */}
      <div className="text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 group transition-opacity hover:opacity-80"
        >
          <div 
            className="size-10 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300"
            style={{ backgroundColor: "var(--landing-accent)" }}
          >
            <div className="size-6 border-2 border-white rounded-md" />
          </div>
          <span 
            className="text-2xl font-bold tracking-tight"
            style={{ color: "var(--landing-text)" }}
          >
            Proppi
          </span>
        </Link>
      </div>

      <Card className="border-none shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
        <CardHeader className="pt-8 pb-4 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-base mt-2">
            Enter your details below to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                autoComplete="email"
                disabled={isLoading}
                id="email"
                className="h-11 bg-muted/50 border-muted-foreground/10 focus:border-landing-accent" // Changed landing-accent to be used via style if needed but here I'll use standard classes if possible
                style={{ "--landing-accent": "oklch(0.62 0.14 50)" } as any}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                type="email"
                value={email}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--landing-accent)" }}
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                autoComplete="current-password"
                disabled={isLoading}
                id="password"
                className="h-11 bg-muted/50 border-muted-foreground/10"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                value={password}
              />
            </div>
            <Button 
                className="w-full h-11 text-base font-semibold shadow-md transition-all active:scale-[0.98]" 
                disabled={isLoading} 
                type="submit"
                style={{ 
                    backgroundColor: "var(--landing-accent)",
                    color: "white"
                }}
            >
              {isLoading ? (
                <>
                  <IconLoader className="mr-2 size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t border-muted/50 py-6 bg-muted/5">
          <p className="text-muted-foreground text-sm font-medium">
            Don&apos;t have an account?{" "}
            <Link
              className="font-bold underline-offset-4 hover:underline"
              style={{ color: "var(--landing-accent)" }}
              href="/sign-up"
            >
               Create an account
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      {/* Footer Support */}
      <p className="text-center text-xs text-muted-foreground">
        Need help? <Link href="/contact" className="underline">Contact support</Link>
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
