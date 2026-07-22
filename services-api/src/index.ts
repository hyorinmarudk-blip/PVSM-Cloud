import { sendTemplateEmail } from "./email/sendEmail";
import {
  buildServiceRequestEmail,
  type ServiceRequestEmailData,
} from "./email/templates/serviceRequest";
import { buildTestEmail } from "./email/templates/testEmail";
import type { EmailBinding } from "./email/types";

interface Env {
  TURNSTILE_SECRET_KEY: string;
  EMAIL_TEST_KEY: string;
  EMAIL: EmailBinding;
}

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

type IncomingServiceRequest = {
  turnstileToken?: unknown;

  // Hidden honeypot field. Real users should leave this blank.
  companyWebsite?: unknown;

  customer?: {
    firstName?: unknown;
    lastName?: unknown;
    phone?: unknown;
    email?: unknown;
    preferredContact?: unknown;
  };

  vehicle?: {
    type?: unknown;
    year?: unknown;
    make?: unknown;
    model?: unknown;
    engine?: unknown;
    vin?: unknown;
  };

  service?: {
    type?: unknown;
    mobileRequested?: unknown;
    roadsideEmergency?: unknown;
    concern?: unknown;
  };

  agreementAccepted?: unknown;
};

const allowedOrigins = new Set([
  "https://poteauvalleyrepair.com",
  "https://www.poteauvalleyrepair.com",
  "http://localhost:3000",
]);

function corsHeaders(origin: string | null): HeadersInit {
  const allowedOrigin =
    origin && allowedOrigins.has(origin)
      ? origin
      : "https://poteauvalleyrepair.com";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Test-Key",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(
  data: unknown,
  status: number,
  origin: string | null,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(origin),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function cleanString(
  value: unknown,
  maximumLength: number,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maximumLength);
}

function cleanMultilineString(
  value: unknown,
  maximumLength: number,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\r\n/g, "\n")
    .slice(0, maximumLength);
}

function isValidEmail(value: string): boolean {
  if (!value) {
    return true;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function createRequestNumber(): string {
  const now = new Date();

  const date = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
  ].join("");

  const random = crypto.randomUUID()
    .replaceAll("-", "")
    .slice(0, 6)
    .toUpperCase();

  return `PVR-${date}-${random}`;
}

async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp: string | null,
): Promise<TurnstileResponse> {
  const formData = new FormData();

  formData.append("secret", secret);
  formData.append("response", token);

  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error("Turnstile verification request failed.");
  }

  return response.json<TurnstileResponse>();
}

function validateAndNormalizeRequest(
  input: IncomingServiceRequest,
):
  | {
      success: true;
      data: ServiceRequestEmailData;
      turnstileToken: string;
    }
  | {
      success: false;
      error: string;
    } {
  const turnstileToken = cleanString(input.turnstileToken, 2048);

  if (!turnstileToken) {
    return {
      success: false,
      error: "Please complete the security verification.",
    };
  }

  // Spam bots often fill hidden fields.
  const honeypot = cleanString(input.companyWebsite, 200);

  if (honeypot) {
    return {
      success: false,
      error: "Unable to process this request.",
    };
  }

  const firstName = cleanString(
    input.customer?.firstName,
    60,
  );

  const lastName = cleanString(
    input.customer?.lastName,
    60,
  );

  const phone = cleanString(
    input.customer?.phone,
    30,
  );

  const email = cleanString(
    input.customer?.email,
    150,
  ).toLowerCase();

  const preferredContact = cleanString(
    input.customer?.preferredContact,
    30,
  );

  const vehicleType = cleanString(
    input.vehicle?.type,
    60,
  );

  const serviceType = cleanString(
    input.service?.type,
    80,
  );

  const concern = cleanMultilineString(
    input.service?.concern,
    5000,
  );

  if (!firstName || !lastName) {
    return {
      success: false,
      error: "Please enter your first and last name.",
    };
  }

  if (!phone || !isValidPhone(phone)) {
    return {
      success: false,
      error: "Please enter a valid phone number.",
    };
  }

  if (email && !isValidEmail(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  if (!preferredContact) {
    return {
      success: false,
      error: "Please select a preferred contact method.",
    };
  }

  if (!vehicleType) {
    return {
      success: false,
      error: "Please select a vehicle or equipment type.",
    };
  }

  if (!serviceType) {
    return {
      success: false,
      error: "Please select the requested service.",
    };
  }

  if (concern.length < 10) {
    return {
      success: false,
      error:
        "Please provide more detail about the problem or requested service.",
    };
  }

  if (input.agreementAccepted !== true) {
    return {
      success: false,
      error:
        "You must acknowledge that this is a service request and not a confirmed appointment.",
    };
  }

  return {
    success: true,
    turnstileToken,
    data: {
      requestNumber: createRequestNumber(),
      submittedAt: new Date().toISOString(),

      customer: {
        firstName,
        lastName,
        phone,
        email: email || undefined,
        preferredContact,
      },

      vehicle: {
        type: vehicleType,
        year: cleanString(input.vehicle?.year, 10) || undefined,
        make: cleanString(input.vehicle?.make, 80) || undefined,
        model: cleanString(input.vehicle?.model, 80) || undefined,
        engine:
          cleanString(input.vehicle?.engine, 100) || undefined,
        vin:
          cleanString(input.vehicle?.vin, 30).toUpperCase() ||
          undefined,
      },

      service: {
        type: serviceType,
        mobileRequested:
          input.service?.mobileRequested === true,
        roadsideEmergency:
          input.service?.roadsideEmergency === true,
        concern,
      },
    },
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    if (request.method === "GET" && url.pathname === "/") {
      return jsonResponse(
        {
          success: true,
          service: "Poteau Valley Repair Service API",
          status: "online",
        },
        200,
        origin,
      );
    }

    if (
      request.method === "POST" &&
      url.pathname === "/request-service"
    ) {
      let incoming: IncomingServiceRequest;

      try {
        incoming =
          (await request.json()) as IncomingServiceRequest;
      } catch {
        return jsonResponse(
          {
            success: false,
            error: "Invalid request body.",
          },
          400,
          origin,
        );
      }

      const validation =
        validateAndNormalizeRequest(incoming);

      if (!validation.success) {
        return jsonResponse(
          {
            success: false,
            error: validation.error,
          },
          400,
          origin,
        );
      }

      const remoteIp =
        request.headers.get("CF-Connecting-IP");

      try {
        const verification = await verifyTurnstile(
          validation.turnstileToken,
          env.TURNSTILE_SECRET_KEY,
          remoteIp,
        );

        if (!verification.success) {
          console.warn(
            "Turnstile rejected:",
            verification["error-codes"],
          );

          return jsonResponse(
            {
              success: false,
              error:
                "Security verification failed. Please refresh the form and try again.",
            },
            403,
            origin,
          );
        }

        const permittedHostnames = new Set([
          "poteauvalleyrepair.com",
          "www.poteauvalleyrepair.com",
          "localhost",
        ]);

        if (
          verification.hostname &&
          !permittedHostnames.has(verification.hostname)
        ) {
          console.warn(
            "Unexpected Turnstile hostname:",
            verification.hostname,
          );

          return jsonResponse(
            {
              success: false,
              error: "Security verification was not accepted.",
            },
            403,
            origin,
          );
        }
      } catch (error) {
        console.error(
          "Turnstile verification error:",
          error,
        );

        return jsonResponse(
          {
            success: false,
            error:
              "The security service is temporarily unavailable. Please try again.",
          },
          502,
          origin,
        );
      }

      try {
        const renderedEmail =
          buildServiceRequestEmail(validation.data);

        const emailResult = await sendTemplateEmail({
          binding: env.EMAIL,
          email: renderedEmail,
        });

        console.log("Service request accepted", {
          requestNumber:
            validation.data.requestNumber,
          messageId: emailResult.messageId,
        });

        return jsonResponse(
          {
            success: true,
            message:
              "Your service request has been received.",
            requestNumber:
              validation.data.requestNumber,
          },
          200,
          origin,
        );
      } catch (error) {
        console.error(
          "Service-request email failed:",
          error,
        );

        return jsonResponse(
          {
            success: false,
            error:
              "We could not deliver your request. Please call (918) 962-0233.",
          },
          500,
          origin,
        );
      }
    }

    if (
      request.method === "POST" &&
      url.pathname === "/test-email"
    ) {
      const suppliedKey =
        request.headers.get("X-Test-Key");

      if (
        !suppliedKey ||
        suppliedKey !== env.EMAIL_TEST_KEY
      ) {
        return jsonResponse(
          {
            success: false,
            error: "Unauthorized.",
          },
          401,
          origin,
        );
      }

      try {
        const result = await sendTemplateEmail({
          binding: env.EMAIL,
          email: buildTestEmail(),
        });

        return jsonResponse(
          {
            success: true,
            message: "Test email sent.",
            messageId: result.messageId,
          },
          200,
          origin,
        );
      } catch (error) {
        console.error("Email test failed:", error);

        return jsonResponse(
          {
            success: false,
            error: "Email delivery failed.",
          },
          500,
          origin,
        );
      }
    }

    return jsonResponse(
      {
        success: false,
        error: "Route not found.",
      },
      404,
      origin,
    );
  },
};