import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getPolicy, policies } from "@/lib/policies";

type PolicyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return policies.map((policy) => ({
    slug: policy.slug,
  }));
}

export async function generateMetadata({
  params,
}: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);

  if (!policy) {
    return {
      title: "Policy Not Found",
    };
  }

  return {
    title: policy.title,
    description: policy.introduction,
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getPolicy(slug);

  if (!policy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="border-b border-white/10 bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-400"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            All policies
          </Link>

          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl">
            {policy.title}
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Effective date: {policy.effectiveDate}
          </p>

          <p className="mt-7 text-lg leading-8 text-zinc-300">
            {policy.introduction}
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-5 lg:px-8">
          {policy.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-7 sm:p-9"
            >
              <h2 className="text-2xl font-black">{section.heading}</h2>

              {section.paragraphs && (
                <div className="mt-5 space-y-4 leading-7 text-zinc-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-zinc-300">
                      <Check
                        size={19}
                        className="mt-1 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="leading-7">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="rounded-2xl border border-red-500/30 bg-red-950/20 p-7">
            <h2 className="text-2xl font-black">Questions about this policy?</h2>

            <p className="mt-4 leading-7 text-zinc-300">
              Contact Poteau Valley Repair before authorizing service if you need
              clarification regarding any policy term.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+19184429692"
                className="rounded-xl bg-red-600 px-6 py-3 text-center font-bold transition hover:bg-red-500"
              >
                Call (918) 442-9692
              </a>

              <a
                href="mailto:poteauvalleyrepair@gmail.com"
                className="rounded-xl border border-white/20 px-6 py-3 text-center font-bold transition hover:bg-white/5"
              >
                Email the Shop
              </a>
            </div>
          </section>

          <p className="text-sm leading-6 text-zinc-500">
            These website pages summarize and present Poteau Valley Repair&apos;s
            written business policies. The signed repair authorization, work
            order, invoice, or most recently issued written policy controls when
            a conflict exists.
          </p>
        </div>
      </article>
    </main>
  );
}