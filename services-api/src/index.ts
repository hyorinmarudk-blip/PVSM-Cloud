interface Env {
  TURNSTILE_SECRET_KEY: string;
}

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
  action?: string;
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
    "Access-Control-Allow-Headers": "Content-Type",
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
      let body: unknown;

      try {
        body = await request.json();
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

      if (!body || typeof body !== "object") {
        return jsonResponse(
          {
            success: false,
            error: "Invalid request.",
          },
          400,
          origin,
        );
      }

      const turnstileToken = Reflect.get(body, "turnstileToken");

      if (
        typeof turnstileToken !== "string" ||
        turnstileToken.length < 10
      ) {
        return jsonResponse(
          {
            success: false,
            error: "Please complete the security verification.",
          },
          400,
          origin,
        );
      }

      const remoteIp = request.headers.get("CF-Connecting-IP");

      try {
        const verification = await verifyTurnstile(
          turnstileToken,
          env.TURNSTILE_SECRET_KEY,
          remoteIp,
        );

        if (!verification.success) {
          return jsonResponse(
            {
              success: false,
              error: "Security verification failed. Please try again.",
            },
            403,
            origin,
          );
        }
      } catch (error) {
        console.error("Turnstile verification error:", error);

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

      return jsonResponse(
        {
          success: true,
          message: "Turnstile verification succeeded.",
        },
        200,
        origin,
      );
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