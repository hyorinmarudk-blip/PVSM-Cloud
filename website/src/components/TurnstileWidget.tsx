"use client";

import { Turnstile } from "@marsidev/react-turnstile";

type Props = {
  onSuccess: (token: string) => void;
};

export default function TurnstileWidget({ onSuccess }: Props) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={onSuccess}
      options={{
        theme: "light",
        size: "normal",
      }}
    />
  );
}