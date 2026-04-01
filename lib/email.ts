import { Resend } from "resend";
import { InviteEmail } from "../emails/invite-email";
import { ResetPasswordEmail } from "../emails/reset-password-email";
import { VerifyEmail } from "../emails/verify-email";
import { WelcomeEmail } from "../emails/welcome-email";
import { siteConfig } from "./siteconfig";

// Lazy initialization — avoids crashing at module load when RESEND_API_KEY is missing.
// Previously `new Resend(...)` was called at the top level which caused a fatal 500
// on ALL auth routes (including sign-up) even before sending any email.
function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to your .env file to enable email sending."
    );
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendWelcomeEmail(to: string, name: string) {
  const { data, error } = await getResend().emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Welcome to ${siteConfig.name}!`,
    react: WelcomeEmail({ name }),
  });

  if (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error(`Failed to send welcome email: ${error.message}`);
  }

  return data;
}

export async function sendInviteEmail(
  to: string,
  inviterName: string,
  workspaceName: string,
  inviteLink: string
) {
  const { data, error } = await getResend().emails.send({
    from: siteConfig.email.from,
    to,
    subject: `${inviterName} invited you to join ${workspaceName} on ${siteConfig.name}`,
    react: InviteEmail({ inviterName, workspaceName, inviteLink }),
  });

  if (error) {
    console.error("Failed to send invite email:", error);
    throw new Error(`Failed to send invite email: ${error.message}`);
  }

  return data;
}

export async function sendVerificationEmail(
  to: string,
  name: string,
  verifyLink: string
) {
  const { data, error } = await getResend().emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Verify your email for ${siteConfig.name}`,
    react: VerifyEmail({ name, verifyLink }),
  });

  if (error) {
    console.error("Failed to send verification email:", error);
    throw new Error(`Failed to send verification email: ${error.message}`);
  }

  return data;
}

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  resetLink: string
) {
  const { data, error } = await getResend().emails.send({
    from: siteConfig.email.from,
    to,
    subject: `Reset your password for ${siteConfig.name}`,
    react: ResetPasswordEmail({ name, resetLink }),
  });

  if (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }

  return data;
}
