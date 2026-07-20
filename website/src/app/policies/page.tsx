import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CreditCard,
  FileText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { policies } from "@/data/policies";

const icons = {
  "payment-billing": CreditCard,
  "shop-terms": FileText,
  warranty: ShieldCheck,
  privacy: UserRoundCheck,
  "photo-documentation": Camera,
};

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Business Policies
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            Clear information before work begins
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Review our payment, repair, warranty, privacy, and documentation
            policies. These policies help maintain clear communication and fair
            expectations throughout the repair process.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {policies.map((policy) => {
            const Icon =
              icons[policy.slug as keyof typeof icons] ?? FileText;

            return (
              <Link
                key={policy.slug}
                href={`/policies/${policy.slug}`}
                className="group rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/50"
              >
                <Icon size={32} className="text-red-500" aria-hidden="true" />

                <h2 className="mt-5 text-2xl font-black">{policy.title}</h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  {policy.introduction}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-bold text-red-500">
                  Read full policy
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}