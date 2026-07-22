import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getService, services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-400"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            All services
          </Link>

          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
            <Icon size={34} aria-hidden="true" />
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
            {service.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-service"
              className="rounded-xl bg-red-600 px-7 py-4 text-center font-black transition hover:bg-red-500"
            >
              Request Service
            </Link>

            <a
              href="tel:+19189620233"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/5"
            >
              <Phone size={19} aria-hidden="true" />
              Call for an Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900 p-4"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-red-500"
                  aria-hidden="true"
                />
                <span className="font-semibold text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-7">
            {service.sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-3xl border border-white/10 bg-zinc-900 p-7 sm:p-9"
              >
                <h2 className="text-2xl font-black">{section.heading}</h2>

                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="mt-1 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="leading-7 text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-3xl border border-red-500/30 bg-red-950/20 p-7 sm:p-9">
            <ShieldCheck
              size={30}
              className="text-red-500"
              aria-hidden="true"
            />

            <h2 className="mt-5 text-2xl font-black">
              Clear estimates and authorization
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
              Pricing depends on inspection results, diagnostic requirements,
              parts, labor, and location. Repairs are not performed without the
              required customer authorization.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-service"
                className="rounded-xl bg-red-600 px-6 py-3 text-center font-bold transition hover:bg-red-500"
              >
                Request Service
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}