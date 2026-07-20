"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  year: string;
  make: string;
  model: string;
  concern: string;
  mobileService: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  serviceType: "Automotive Repair",
  year: "",
  make: "",
  model: "",
  concern: "",
  mobileService: "No",
};

export default function ServiceRequestForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Service Request - ${form.name || "Website Customer"}`,
    );

    const body = encodeURIComponent(
      [
        "Poteau Valley Repair Service Request",
        "",
        `Customer Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Service Type: ${form.serviceType}`,
        `Mobile Service Requested: ${form.mobileService}`,
        "",
        `Vehicle / Equipment Year: ${form.year}`,
        `Make: ${form.make}`,
        `Model: ${form.model}`,
        "",
        "Customer Concern:",
        form.concern,
      ].join("\n"),
    );

    window.location.href =
      `mailto:poteauvalleyrepair@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20";

  return (
    <form
      onSubmit={submitRequest}
      className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-9"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="font-semibold">
          Name *
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClasses}
            placeholder="Your full name"
          />
        </label>

        <label className="font-semibold">
          Phone Number *
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClasses}
            placeholder="(918) 555-0000"
          />
        </label>

        <label className="font-semibold sm:col-span-2">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClasses}
            placeholder="customer@example.com"
          />
        </label>

        <label className="font-semibold">
          Service Needed *
          <select
            required
            value={form.serviceType}
            onChange={(event) =>
              updateField("serviceType", event.target.value)
            }
            className={inputClasses}
          >
            <option>Automotive Repair</option>
            <option>Vehicle Diagnostics</option>
            <option>Electrical Diagnostics</option>
            <option>Mobile Repair</option>
            <option>Emergency Roadside Assistance</option>
            <option>Lawn Mower Repair</option>
            <option>Small Engine Repair</option>
            <option>Detailing</option>
            <option>Other</option>
          </select>
        </label>

        <label className="font-semibold">
          Mobile Service Requested?
          <select
            value={form.mobileService}
            onChange={(event) =>
              updateField("mobileService", event.target.value)
            }
            className={inputClasses}
          >
            <option>No</option>
            <option>Yes</option>
            <option>Not sure</option>
          </select>
        </label>

        <label className="font-semibold">
          Year
          <input
            value={form.year}
            onChange={(event) => updateField("year", event.target.value)}
            className={inputClasses}
            placeholder="2014"
          />
        </label>

        <label className="font-semibold">
          Make
          <input
            value={form.make}
            onChange={(event) => updateField("make", event.target.value)}
            className={inputClasses}
            placeholder="Ford"
          />
        </label>

        <label className="font-semibold sm:col-span-2">
          Model
          <input
            value={form.model}
            onChange={(event) => updateField("model", event.target.value)}
            className={inputClasses}
            placeholder="Escape"
          />
        </label>

        <label className="font-semibold sm:col-span-2">
          Describe the concern *
          <textarea
            required
            rows={7}
            value={form.concern}
            onChange={(event) => updateField("concern", event.target.value)}
            className={inputClasses}
            placeholder="Describe the symptoms, noises, warning lights, or repair you are requesting."
          />
        </label>
      </div>

      <div className="mt-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm leading-6 text-zinc-400">
        This form currently opens your email application with the request
        information filled in. It does not schedule a confirmed appointment.
        Poteau Valley Repair will contact you regarding availability.
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-black transition duration-200 hover:-translate-y-0.5 hover:bg-red-500"
      >
        <Send size={20} aria-hidden="true" />
        Prepare Service Request Email
      </button>

      <a
        href="mailto:poteauvalleyrepair@gmail.com"
        className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-zinc-400 hover:text-red-500"
      >
        <Mail size={17} aria-hidden="true" />
        Or email poteauvalleyrepair@gmail.com
      </a>
    </form>
  );
}