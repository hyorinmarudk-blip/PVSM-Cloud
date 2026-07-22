"use client";

import {
  CheckCircle2,
  Home,
  Phone,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ServiceRequestSuccess() {
  const searchParams = useSearchParams();

  const requestNumber =
    searchParams.get("requestNumber") ||
    "Not available";

  return (
    <section className="relative isolate flex min-h-[700px] items-center overflow-hidden py-20">
      <div className="absolute right-[-10rem] top-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-red-700/20 blur-[130px]" />

      <div className="mx-auto w-full max-w-4xl px-5 text-center lg:px-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-green-400">
          <CheckCircle2
            size={42}
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 font-bold uppercase tracking-[0.2em] text-red-500">
          Request Received
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Thank you for contacting Poteau Valley Repair
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Your service request has been delivered. We
          will review the information and contact you
          using your preferred contact method.
        </p>

        <div className="mx-auto mt-9 max-w-xl rounded-2xl border border-red-500/30 bg-red-950/20 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Service Request Number
          </p>

          <p className="mt-3 break-all text-2xl font-black text-white sm:text-3xl">
            {requestNumber}
          </p>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Save this number for reference when
            contacting the shop.
          </p>
        </div>

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

        <p className="mx-auto mt-9 max-w-2xl text-sm leading-6 text-zinc-500">
          This confirmation acknowledges receipt of
          your request. It is not an appointment
          confirmation, repair authorization, diagnosis,
          or estimate.
        </p>
      </div>
    </section>
  );
}