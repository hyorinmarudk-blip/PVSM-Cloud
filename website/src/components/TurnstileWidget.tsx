"use client";

import { Turnstile } from "@marsidev/react-turnstile";

type TurnstileWidgetProps = {
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  resetKey: number;
};

export default function TurnstileWidget({
  onSuccess,
  onExpire,
  onError,
  resetKey,
}: TurnstileWidgetProps) {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="rounded-xl border border-red-500/40 bg-red-950/30 p-4 text-sm text-red-200">
        Security verification is not configured.
      </div>
    );
  }

  return (
    <Turnstile
      key={resetKey}
      siteKey={siteKey}
      onSuccess={onSuccess}
      onExpire={onExpire}
      onError={onError}
      options={{
        theme: "dark",
        size: "flexible",
        appearance: "always",
      }}
    />
  );
}