import { NextResponse } from "next/server";
import {
  hasValidationErrors,
  sanitizeLeadInput,
  validateLeadInput
} from "@/app/lib/leadValidation";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM;
const toEmail = process.env.RESEND_TO;
const ccEmails = (process.env.RESEND_CC || "")
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

type ResendEmailPayload = {
  from: string;
  to: string[];
  cc?: string[];
  reply_to?: string;
  subject: string;
  text: string;
  html: string;
};

async function sendResendEmail(payload: ResendEmailPayload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(`Resend API error: ${response.status} ${errorBody}`);
  }
}

export async function POST(request: Request) {
  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Missing email configuration." },
      { status: 500 }
    );
  }

  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const lead = sanitizeLeadInput(payload as Record<string, string | undefined>);
  const errors = validateLeadInput(lead);

  if (hasValidationErrors(errors)) {
    return NextResponse.json(
      { error: "Please correct form errors and try again.", errors },
      { status: 400 }
    );
  }

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["City", lead.city || "-"],
    ["Desired Course", lead.desiredCourse || "-"],
    ["Preferred Country", lead.preferredCountry || "-"],
    ["Intake", lead.intake || "-"],
   
  ];

  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a;">
      <h2>New Counselling Enquiry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #eee; font-weight: 600;">${label}</td>
                <td style="padding: 8px 12px; border: 1px solid #eee;">${value}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    await sendResendEmail({
      from: fromEmail,
      to: [toEmail],
      cc: ccEmails.length ? ccEmails : undefined,
      reply_to: lead.email,
      subject: `New counselling enquiry from ${lead.name}`,
      text: textBody,
      html: htmlBody
    });

    await sendResendEmail({
      from: fromEmail,
      to: [lead.email],
      subject: "We received your request",
      text: `Hi ${lead.name},\n\nThank you for contacting Skolarrs Solutions. We have received your enquiry and our team will reach out shortly.\n\nRegards,\nSkolarrs Solutions`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
          <p>Hi ${lead.name},</p>
          <p>Thank you for contacting Skolarrs Solutions.</p>
          <p>We have received your enquiry and our team will reach out shortly.</p>
          <p>Regards,<br/>Skolarrs Solutions</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
