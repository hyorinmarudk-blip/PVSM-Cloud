"use client";

import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type FormEvent,
  useMemo,
  useState,
} from "react";
import TurnstileWidget from "./TurnstileWidget";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: string;

  vehicleType: string;
  year: string;
  make: string;
  model: string;
  engine: string;
  vin: string;

  serviceType: string;
  concern: string;
  mobileRequested: boolean;
  roadsideEmergency: boolean;

  agreementAccepted: boolean;

  // Honeypot. Real visitors should never fill this.
  companyWebsite: string;
};

type ApiSuccessResponse = {
  success: true;
  message: string;
  requestNumber: string;
};

type ApiErrorResponse = {
  success: false;
  error: string;
};

type ApiResponse =
  | ApiSuccessResponse
  | ApiErrorResponse;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  preferredContact: "Text",

  vehicleType: "",
  year: "",
  make: "",
  model: "",
  engine: "",
  vin: "",

  serviceType: "",
  concern: "",
  mobileRequested: false,
  roadsideEmergency: false,

  agreementAccepted: false,
  companyWebsite: "",
};

const inputClasses =
  "mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60";

const labelClasses =
  "block text-sm font-bold text-zinc-200";

export default function ServiceRequestForm() {
  const router = useRouter();

  const [form, setForm] =
    useState<FormState>(initialState);

  const [turnstileToken, setTurnstileToken] =
    useState("");

  const [turnstileResetKey, setTurnstileResetKey] =
    useState(0);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const apiUrl =
    process.env.NEXT_PUBLIC_SERVICE_API_URL;

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      form.phone.trim().length > 0 &&
      form.preferredContact.length > 0 &&
      form.vehicleType.length > 0 &&
      form.serviceType.length > 0 &&
      form.concern.trim().length >= 10 &&
      form.agreementAccepted &&
      turnstileToken.length > 0 &&
      !isSubmitting
    );
  }, [form, turnstileToken, isSubmitting]);

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  }

  function resetTurnstile() {
    setTurnstileToken("");
    setTurnstileResetKey((current) => current + 1);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setErrorMessage("");

    if (!apiUrl) {
      setErrorMessage(
        "The service request system is not configured. Please call (918) 962-0233.",
      );
      return;
    }

    if (!turnstileToken) {
      setErrorMessage(
        "Please complete the security verification.",
      );
      return;
    }

    if (!form.agreementAccepted) {
      setErrorMessage(
        "Please acknowledge that this is a request and not a confirmed appointment.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${apiUrl}/request-service`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            turnstileToken,
            companyWebsite: form.companyWebsite,

            customer: {
              firstName: form.firstName,
              lastName: form.lastName,
              phone: form.phone,
              email: form.email,
              preferredContact:
                form.preferredContact,
            },

            vehicle: {
              type: form.vehicleType,
              year: form.year,
              make: form.make,
              model: form.model,
              engine: form.engine,
              vin: form.vin,
            },

            service: {
              type: form.serviceType,
              concern: form.concern,
              mobileRequested:
                form.mobileRequested,
              roadsideEmergency:
                form.roadsideEmergency,
            },

            agreementAccepted:
              form.agreementAccepted,
          }),
        },
      );

      let result: ApiResponse;

      try {
        result =
          (await response.json()) as ApiResponse;
      } catch {
        throw new Error(
          "The server returned an unexpected response.",
        );
      }

      if (!response.ok || !result.success) {
        const message =
          !result.success && result.error
            ? result.error
            : "The request could not be submitted.";

        throw new Error(message);
      }

      const params = new URLSearchParams({
        requestNumber: result.requestNumber,
      });

      router.push(
        `/request-service/success?${params.toString()}`,
      );
    } catch (error) {
      console.error(
        "Service request submission failed:",
        error,
      );

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your request.";

      setErrorMessage(
        `${message} You may also call (918) 962-0233.`,
      );

      resetTurnstile();
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      noValidate
    >
      <fieldset
        disabled={isSubmitting}
        className="space-y-8"
      >
        <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Step 1
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Customer Information
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className={labelClasses}>
              First name
              <span className="text-red-500"> *</span>

              <input
                type="text"
                autoComplete="given-name"
                required
                maxLength={60}
                value={form.firstName}
                onChange={(event) =>
                  updateField(
                    "firstName",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Last name
              <span className="text-red-500"> *</span>

              <input
                type="text"
                autoComplete="family-name"
                required
                maxLength={60}
                value={form.lastName}
                onChange={(event) =>
                  updateField(
                    "lastName",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Phone number
              <span className="text-red-500"> *</span>

              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                maxLength={30}
                placeholder="(918) 555-1234"
                value={form.phone}
                onChange={(event) =>
                  updateField(
                    "phone",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Email address

              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={150}
                placeholder="name@example.com"
                value={form.email}
                onChange={(event) =>
                  updateField(
                    "email",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Preferred contact method
              <span className="text-red-500"> *</span>

              <select
                required
                value={form.preferredContact}
                onChange={(event) =>
                  updateField(
                    "preferredContact",
                    event.target.value,
                  )
                }
                className={inputClasses}
              >
                <option value="Text">
                  Text message
                </option>
                <option value="Phone">
                  Phone call
                </option>
                <option value="Email">
                  Email
                </option>
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Step 2
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vehicle or Equipment
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className={labelClasses}>
              Type
              <span className="text-red-500"> *</span>

              <select
                required
                value={form.vehicleType}
                onChange={(event) =>
                  updateField(
                    "vehicleType",
                    event.target.value,
                  )
                }
                className={inputClasses}
              >
                <option value="">
                  Select a type
                </option>
                <option>Automobile</option>
                <option>SUV</option>
                <option>Pickup Truck</option>
                <option>Van</option>
                <option>Motorcycle</option>
                <option>ATV / UTV</option>
                <option>Riding Mower</option>
                <option>Push Mower</option>
                <option>Small Engine</option>
                <option>Generator</option>
                <option>Trailer</option>
                <option>Other</option>
              </select>
            </label>

            <label className={labelClasses}>
              Year

              <input
                type="text"
                inputMode="numeric"
                maxLength={10}
                placeholder="2018"
                value={form.year}
                onChange={(event) =>
                  updateField(
                    "year",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Make

              <input
                type="text"
                maxLength={80}
                placeholder="Ford"
                value={form.make}
                onChange={(event) =>
                  updateField(
                    "make",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Model

              <input
                type="text"
                maxLength={80}
                placeholder="F-150"
                value={form.model}
                onChange={(event) =>
                  updateField(
                    "model",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              Engine

              <input
                type="text"
                maxLength={100}
                placeholder="5.0L V8"
                value={form.engine}
                onChange={(event) =>
                  updateField(
                    "engine",
                    event.target.value,
                  )
                }
                className={inputClasses}
              />
            </label>

            <label className={labelClasses}>
              VIN or serial number

              <input
                type="text"
                autoCapitalize="characters"
                maxLength={30}
                value={form.vin}
                onChange={(event) =>
                  updateField(
                    "vin",
                    event.target.value.toUpperCase(),
                  )
                }
                className={inputClasses}
              />
            </label>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Step 3
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Service Details
          </h2>

          <div className="mt-7">
            <label className={labelClasses}>
              Requested service
              <span className="text-red-500"> *</span>

              <select
                required
                value={form.serviceType}
                onChange={(event) =>
                  updateField(
                    "serviceType",
                    event.target.value,
                  )
                }
                className={inputClasses}
              >
                <option value="">
                  Select a service
                </option>
                <option>Diagnostic</option>
                <option>Electrical Diagnostic</option>
                <option>Repair</option>
                <option>Maintenance</option>
                <option>Mobile Service</option>
                <option>Lawn Mower Repair</option>
                <option>Small Engine Repair</option>
                <option>Detailing</option>
                <option>Other</option>
              </select>
            </label>

            <label className={`${labelClasses} mt-5`}>
              Describe the problem or requested work
              <span className="text-red-500"> *</span>

              <textarea
                required
                minLength={10}
                maxLength={5000}
                rows={8}
                placeholder="Describe the symptoms, when the problem started, warning lights, noises, recent repairs, or the work you need completed."
                value={form.concern}
                onChange={(event) =>
                  updateField(
                    "concern",
                    event.target.value,
                  )
                }
                className={`${inputClasses} resize-y`}
              />

              <span className="mt-2 block text-right text-xs font-normal text-zinc-500">
                {form.concern.length}/5000
              </span>
            </label>
          </div>

          <div className="mt-7 space-y-4">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-zinc-950 p-4">
              <input
                type="checkbox"
                checked={form.mobileRequested}
                onChange={(event) =>
                  updateField(
                    "mobileRequested",
                    event.target.checked,
                  )
                }
                className="mt-1 h-5 w-5 accent-red-600"
              />

              <span>
                <span className="block font-bold">
                  I would like mobile service if available
                </span>

                <span className="mt-1 block text-sm leading-6 text-zinc-400">
                  Mobile availability depends on location,
                  weather, safety, equipment, and the
                  repair required.
                </span>
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-zinc-950 p-4">
              <input
                type="checkbox"
                checked={
                  form.roadsideEmergency
                }
                onChange={(event) =>
                  updateField(
                    "roadsideEmergency",
                    event.target.checked,
                  )
                }
                className="mt-1 h-5 w-5 accent-red-600"
              />

              <span>
                <span className="block font-bold">
                  This is a roadside emergency
                </span>

                <span className="mt-1 block text-sm leading-6 text-zinc-400">
                  Website requests are not continuously
                  monitored.
                </span>
              </span>
            </label>

            {form.roadsideEmergency && (
              <div
                className="flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-950/40 p-5"
                role="alert"
              >
                <Phone
                  size={22}
                  className="mt-0.5 shrink-0 text-red-500"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-black text-red-200">
                    Call for immediate assistance
                  </p>

                  <p className="mt-1 text-sm leading-6 text-red-100/80">
                    {" "}
                    <a
                      href="tel:+19189620233"
                      className="font-black underline"
                    >
                      (918) 962-0233
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <p className="font-bold uppercase tracking-[0.2em] text-red-500">
            Step 4
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Agreement and Security
          </h2>

          <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-zinc-950 p-4">
            <input
              type="checkbox"
              required
              checked={form.agreementAccepted}
              onChange={(event) =>
                updateField(
                  "agreementAccepted",
                  event.target.checked,
                )
              }
              className="mt-1 h-5 w-5 accent-red-600"
            />

            <span className="text-sm leading-6 text-zinc-300">
              I understand that submitting this form
              creates a request for service and does not
              create a confirmed appointment or authorize
              repairs.
              <span className="text-red-500"> *</span>
            </span>
          </label>

          {/* Bot honeypot. Hidden from real visitors. */}
          <div
            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label>
              Company website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.companyWebsite}
                onChange={(event) =>
                  updateField(
                    "companyWebsite",
                    event.target.value,
                  )
                }
              />
            </label>
          </div>

          <div className="mt-7 rounded-xl border border-white/10 bg-zinc-950 p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-zinc-300">
              <ShieldCheck
                size={18}
                className="text-red-500"
                aria-hidden="true"
              />
              Security verification
            </div>

            <TurnstileWidget
              resetKey={turnstileResetKey}
              onSuccess={(token) => {
                setTurnstileToken(token);
                setErrorMessage("");
              }}
              onExpire={() => {
                setTurnstileToken("");
                setErrorMessage(
                  "The security verification expired. Please complete it again.",
                );
              }}
              onError={() => {
                setTurnstileToken("");
                setErrorMessage(
                  "The security verification could not load. Please refresh the page or call (918) 962-0233.",
                );
              }}
            />
          </div>
        </section>
      </fieldset>

      {errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-950/40 p-5 text-red-100"
        >
          <AlertCircle
            size={22}
            className="mt-0.5 shrink-0 text-red-500"
            aria-hidden="true"
          />

          <div>
            <p className="font-black">
              We could not submit your request
            </p>

            <p className="mt-1 text-sm leading-6">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-lg font-black text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              size={22}
              className="animate-spin"
              aria-hidden="true"
            />
            Sending Request…
          </>
        ) : (
          <>
            <CheckCircle2
              size={22}
              aria-hidden="true"
            />
            Submit Service Request
          </>
        )}
      </button>

      <p className="text-center text-sm leading-6 text-zinc-500">
        Requests are normally reviewed as soon as
        practical. For urgent assistance, call{" "}
        <a
          href="tel:+19189620233"
          className="font-bold text-red-500 hover:text-red-400"
        >
          (918) 962-0233
        </a>
        .
      </p>
    </form>
  );
}