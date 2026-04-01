"use client";

import { IconLoader } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/onboarding",
      },
      {
        onSuccess: () => {
          toast.success("Account created successfully");
          router.push("/onboarding");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to create account");
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
          <CardTitle className="text-3xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription className="text-base mt-2">
            Get started today with a free 7-day trial
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                autoComplete="name"
                disabled={isLoading}
                id="name"
                className="h-11 bg-muted/50 border-muted-foreground/10"
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                type="text"
                value={name}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                autoComplete="email"
                disabled={isLoading}
                id="email"
                className="h-11 bg-muted/50 border-muted-foreground/10"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                type="email"
                value={email}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                autoComplete="new-password"
                disabled={isLoading}
                id="password"
                className="h-11 bg-muted/50 border-muted-foreground/10"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
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
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t border-muted/50 py-6 bg-muted/5">
          <p className="text-muted-foreground text-sm font-medium">
            Already have an account?{" "}
            <Link
              className="font-bold underline-offset-4 hover:underline"
              style={{ color: "var(--landing-accent)" }}
              href="/sign-in"
            >
              Sign in here
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      {/* Footer Support */}
      <p className="text-center text-xs text-muted-foreground">
        By continuing, you agree to our <Link href="/terms" className="underline">Terms of Service</Link>
      </p>
    </div>
  );
}
