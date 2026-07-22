import { renderEmailLayout } from "../layout";
import type { RenderedEmail } from "../types";

export function buildTestEmail(): RenderedEmail {
  const sentAt = new Date().toISOString();

  const text = [
    "PVSM Cloud Email Test",
    "",
    "The Cloudflare Worker email binding is working.",
    "",
    "Worker: services-api",
    `Sent: ${sentAt}`,
  ].join("\n");

  const html = renderEmailLayout({
    preheader: "The PVSM Cloud email system is working.",
    heading: "PVSM Cloud Email Test",
    contentHtml: `
      <p style="margin:0 0 22px;font-size:17px;line-height:1.7;">
        The Cloudflare Worker email binding is working.
      </p>

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e4e4e7;"><strong>Worker</strong></td>
          <td style="padding:12px 0;border-bottom:1px solid #e4e4e7;text-align:right;">services-api</td>
        </tr>
        <tr>
          <td style="padding:12px 0;"><strong>Sent</strong></td>
          <td style="padding:12px 0;text-align:right;">${sentAt}</td>
        </tr>
      </table>
    `,
    footerNote: "This message confirms that the reusable PVSM email template system is operational.",
  });

  return {
    subject: "PVSM Cloud Worker Email Test",
    text,
    html,
  };
}