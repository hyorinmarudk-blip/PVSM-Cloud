import { BUSINESS } from "./constants";
import { escapeHtml } from "./escapeHtml";

type EmailLayoutOptions = {
  preheader: string;
  heading: string;
  contentHtml: string;
  footerNote?: string;
};

export function renderEmailLayout({
  preheader,
  heading,
  contentHtml,
  footerNote,
}: EmailLayoutOptions): string {
  const safePreheader = escapeHtml(preheader);
  const safeHeading = escapeHtml(heading);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safeHeading}</title>
</head>
<body style="margin:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${safePreheader}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e4e4e7;">
          <tr>
            <td style="height:8px;background:#b91c1c;"></td>
          </tr>

          <tr>
            <td style="padding:30px 32px 18px;background:#18181b;color:#ffffff;">
              <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#f87171;">
                Veteran Owned &amp; Operated
              </div>

              <h1 style="margin:12px 0 0;font-size:30px;line-height:1.2;">
                ${safeHeading}
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:30px 32px;">
              ${contentHtml}
            </td>
          </tr>

          <tr>
            <td style="padding:22px 32px;background:#f4f4f5;border-top:1px solid #e4e4e7;font-size:13px;line-height:1.7;color:#52525b;">
              <strong>${BUSINESS.name}</strong><br>
              ${BUSINESS.phoneDisplay}<br>
              ${BUSINESS.email}<br>
              ${BUSINESS.serviceArea}

              ${
                footerNote
                  ? `<div style="margin-top:14px;color:#71717a;">${escapeHtml(footerNote)}</div>`
                  : ""
              }
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}