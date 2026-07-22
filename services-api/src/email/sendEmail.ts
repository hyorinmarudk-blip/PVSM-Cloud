import {
  SERVICE_SENDER,
  SHOP_EMAIL,
} from "./constants";
import type {
  EmailBinding,
  EmailSendResult,
  RenderedEmail,
} from "./types";

type SendTemplateEmailOptions = {
  binding: EmailBinding;
  email: RenderedEmail;
  to?: string;
};

export async function sendTemplateEmail({
  binding,
  email,
  to = SHOP_EMAIL,
}: SendTemplateEmailOptions): Promise<EmailSendResult> {
  return binding.send({
    to,
    from: SERVICE_SENDER,
    subject: email.subject,
    text: email.text,
    html: email.html,
    replyTo: email.replyTo,
    headers: {
      "X-PVSM-Message-Type": "transactional",
    },
  });
}