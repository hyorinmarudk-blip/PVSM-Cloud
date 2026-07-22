import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ServiceRequestForm from "@/components/ServiceRequestForm";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request automotive, mobile, lawn mower, small-engine, roadside, or detailing service from Poteau Valley Repair.",
  alternates: {
    canonical: "/request-service",
  },
};

export default function RequestServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Request Service
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Tell us what you need help with
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Complete the form below with as much detail
            as possible. Submitting the form does not
            create a confirmed appointment or authorize
            repairs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <ServiceRequestForm />

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
              <h2 className="text-xl font-black">
                Contact the Shop
              </h2>

              <div className="mt-6 space-y-5">
                <a
                  href="tel:+19189620233"
                  className="flex items-start gap-3 text-zinc-300 transition hover:text-red-500"
                >
                  <Phone
                    size={20}
                    className="mt-0.5 shrink-0 text-red-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-sm text-zinc-500">
                      Phone
                    </span>
                    <span className="font-bold">
                      (918) 962-0233
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:poteauvalleyrepair@gmail.com"
                  className="flex items-start gap-3 break-all text-zinc-300 transition hover:text-red-500"
                >
                  <Mail
                    size={20}
                    className="mt-0.5 shrink-0 text-red-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-sm text-zinc-500">
                      Email
                    </span>
                    <span className="font-bold">
                      poteauvalleyrepair@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0 text-red-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-sm text-zinc-500">
                      Service area
                    </span>
                    <span className="font-bold">
                      LeFlore County and surrounding
                      counties
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-7">
              <ShieldCheck
                size={30}
                className="text-red-500"
                aria-hidden="true"
              />

              <h2 className="mt-5 text-xl font-black">
                Your information is protected
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                The form uses Cloudflare Turnstile and
                server-side verification to reduce spam
                and automated submissions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
              <h2 className="text-xl font-black">
                What happens next?
              </h2>

              <ol className="mt-5 space-y-4 text-sm leading-6 text-zinc-400">
                <li>
                  <strong className="text-white">
                    1.
                  </strong>{" "}
                  Your request is assigned a reference
                  number.
                </li>

                <li>
                  <strong className="text-white">
                    2.
                  </strong>{" "}
                  Poteau Valley Repair receives the
                  request by email.
                </li>

                <li>
                  <strong className="text-white">
                    3.
                  </strong>{" "}
                  We contact you using your preferred
                  contact method.
                </li>

                <li>
                  <strong className="text-white">
                    4.
                  </strong>{" "}
                  Service details and scheduling are
                  confirmed directly with you.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}