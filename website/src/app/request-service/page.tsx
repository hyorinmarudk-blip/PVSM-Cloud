import type { Metadata } from "next";
import {
  CircleAlert,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ServiceRequestForm from "@/components/ServiceRequestForm";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request automotive, mobile, lawn mower, small engine, diagnostic, or detailing service from Poteau Valley Repair.",
};

export default function RequestServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Request Service
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            Tell us how we can help
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Provide your contact information, vehicle or equipment details, and
            a description of the concern. We will follow up regarding the next
            available appointment or mobile-service option.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <Phone size={27} className="text-red-500" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-black">Prefer to call?</h2>
              <a
                href="tel:+19184429692"
                className="mt-3 block text-lg font-bold text-red-500"
              >
                (918) 442-9692
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <MapPin size={27} className="text-red-500" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-black">Service Area</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                LeFlore County and surrounding counties. Mobile-service
                availability and travel charges depend on location.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <Wrench size={27} className="text-red-500" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-black">Call for an Estimate</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                Pricing depends on the vehicle, equipment, diagnostic needs,
                parts, labor, and service location.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <ShieldCheck
                size={27}
                className="text-red-500"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-xl font-black">
                Clear Authorization
              </h2>
              <p className="mt-3 leading-7 text-zinc-400">
                A service request does not authorize repairs or guarantee an
                appointment. Work begins only after the required approval.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <CircleAlert
                size={27}
                className="text-amber-500"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-xl font-black">
                Roadside Emergencies
              </h2>
              <p className="mt-3 leading-7 text-zinc-400">
                For urgent roadside assistance, calling is faster than submitting
                the online request form.
              </p>
            </div>
          </aside>

          <ServiceRequestForm />
        </div>
      </section>
    </main>
  );
}