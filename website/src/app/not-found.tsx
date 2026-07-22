import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Phone,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />

      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden py-20">
        <div className="absolute right-[-12rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-red-700/20 blur-[130px]" />

        <div className="mx-auto w-full max-w-5xl px-5 text-center lg:px-8">
          <p className="text-8xl font-black text-red-600 sm:text-9xl">
            404
          </p>

          <p className="mt-7 font-bold uppercase tracking-[0.2em] text-red-500">
            Page Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            This page may have moved or no longer exists
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Return to the homepage, review our repair services, or contact
            Poteau Valley Repair for assistance.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-black transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              <Home size={20} aria-hidden="true" />
              Return Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              <Wrench size={20} aria-hidden="true" />
              View Services
            </Link>

            <a
              href="tel:+19189620233"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              <Phone size={20} aria-hidden="true" />
              Call the Shop
            </a>
          </div>

          <Link
            href="/request-service"
            className="mt-8 inline-flex items-center gap-2 font-bold text-red-500 hover:text-red-400"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Start a service request
          </Link>
        </div>
      </section>
    </main>
  );
}