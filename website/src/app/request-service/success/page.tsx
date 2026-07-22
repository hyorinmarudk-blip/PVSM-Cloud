import type { Metadata } from "next";
import { Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import ServiceRequestSuccess from "@/components/ServiceRequestSuccess";

export const metadata: Metadata = {
  title: "Service Request Received",
  description:
    "Your Poteau Valley Repair service request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ServiceRequestSuccessPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <Suspense
        fallback={
          <section className="flex min-h-[700px] items-center justify-center px-5">
            <p className="text-zinc-400">
              Loading request confirmation…
            </p>
          </section>
        }
      >
        <ServiceRequestSuccess />
      </Suspense>
    </main>
  );
}