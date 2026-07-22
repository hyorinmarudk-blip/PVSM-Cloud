import { escapeHtml } from "../escapeHtml";
import { renderEmailLayout } from "../layout";
import type { RenderedEmail } from "../types";

export type ServiceRequestEmailData = {
  requestNumber: string;
  submittedAt: string;
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    preferredContact: string;
  };
  vehicle: {
    type: string;
    year?: string;
    make?: string;
    model?: string;
    engine?: string;
    vin?: string;
  };
  service: {
    type: string;
    mobileRequested: boolean;
    roadsideEmergency: boolean;
    concern: string;
  };
};

function row(label: string, value: unknown): string {
  const rendered =
    value === undefined || value === null || value === ""
      ? "Not provided"
      : escapeHtml(value);

  return `
    <tr>
      <td style="width:38%;padding:11px 0;border-bottom:1px solid #e4e4e7;font-weight:700;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:11px 0;border-bottom:1px solid #e4e4e7;vertical-align:top;">
        ${rendered}
      </td>
    </tr>`;
}

export function buildServiceRequestEmail(
  data: ServiceRequestEmailData,
): RenderedEmail {
  const customerName = `${data.customer.firstName} ${data.customer.lastName}`.trim();

  const text = [
    "NEW SERVICE REQUEST",
    "",
    `Request Number: ${data.requestNumber}`,
    `Submitted: ${data.submittedAt}`,
    "",
    `Customer: ${customerName}`,
    `Phone: ${data.customer.phone}`,
    `Email: ${data.customer.email || "Not provided"}`,
    `Preferred Contact: ${data.customer.preferredContact}`,
    "",
    `Vehicle / Equipment Type: ${data.vehicle.type}`,
    `Year: ${data.vehicle.year || "Not provided"}`,
    `Make: ${data.vehicle.make || "Not provided"}`,
    `Model: ${data.vehicle.model || "Not provided"}`,
    `Engine: ${data.vehicle.engine || "Not provided"}`,
    `VIN: ${data.vehicle.vin || "Not provided"}`,
    "",
    `Service Type: ${data.service.type}`,
    `Mobile Service: ${data.service.mobileRequested ? "Yes" : "No"}`,
    `Roadside Emergency: ${data.service.roadsideEmergency ? "Yes" : "No"}`,
    "",
    "Customer Concern:",
    data.service.concern,
  ].join("\n");

  const html = renderEmailLayout({
    preheader: `New service request from ${customerName}`,
    heading: "New Service Request",
    contentHtml: `
      <div style="margin-bottom:24px;padding:18px;border-radius:10px;background:#fef2f2;border:1px solid #fecaca;">
        <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#991b1b;">
          Request Number
        </div>
        <div style="margin-top:6px;font-size:24px;font-weight:800;color:#7f1d1d;">
          ${escapeHtml(data.requestNumber)}
        </div>
      </div>

      <h2 style="margin:0 0 10px;font-size:20px;">Customer</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
        ${row("Name", customerName)}
        ${row("Phone", data.customer.phone)}
        ${row("Email", data.customer.email)}
        ${row("Preferred Contact", data.customer.preferredContact)}
      </table>

      <h2 style="margin:0 0 10px;font-size:20px;">Vehicle or Equipment</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
        ${row("Type", data.vehicle.type)}
        ${row("Year", data.vehicle.year)}
        ${row("Make", data.vehicle.make)}
        ${row("Model", data.vehicle.model)}
        ${row("Engine", data.vehicle.engine)}
        ${row("VIN", data.vehicle.vin)}
      </table>

      <h2 style="margin:0 0 10px;font-size:20px;">Service Details</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Service Type", data.service.type)}
        ${row("Mobile Service", data.service.mobileRequested ? "Yes" : "No")}
        ${row("Roadside Emergency", data.service.roadsideEmergency ? "Yes" : "No")}
        ${row("Submitted", data.submittedAt)}
      </table>

      <h2 style="margin:28px 0 10px;font-size:20px;">Customer Concern</h2>
      <div style="white-space:pre-wrap;padding:18px;border-radius:10px;background:#f4f4f5;line-height:1.7;">
        ${escapeHtml(data.service.concern)}
      </div>
    `,
    footerNote:
      "This request has passed the website security verification but has not yet been accepted as a confirmed appointment.",
  });

  return {
    subject: `New Service Request ${data.requestNumber} - ${customerName}`,
    text,
    html,
    replyTo: data.customer.email || undefined,
  };
}