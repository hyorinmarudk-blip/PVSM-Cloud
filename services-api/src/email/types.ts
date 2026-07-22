export type EmailAddress = {
  email: string;
  name?: string;
};

export type RenderedEmail = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string | EmailAddress;
};

export type EmailSendResult = {
  messageId: string;
};

export interface EmailBinding {
  send(message: {
    to: string | EmailAddress | Array<string | EmailAddress>;
    from: string | EmailAddress;
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string | EmailAddress;
    headers?: Record<string, string>;
  }): Promise<EmailSendResult>;
}