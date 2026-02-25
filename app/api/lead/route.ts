import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM;
const toEmail = process.env.RESEND_TO;

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

  const {
    name,
    email,
    phone,
    city,
    desiredCourse,
    preferredCountry,
    intake,
    source
  } = payload as {
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    desiredCourse?: string;
    preferredCountry?: string;
    intake?: string;
    source?: string;
  };

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["City", city || "-"],
    ["Desired Course", desiredCourse || "-"],
    ["Preferred Country", preferredCountry || "-"],
    ["Intake", intake || "-"],
    ["Source", source || "Website"]
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
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New counselling enquiry from ${name}`,
      text: textBody,
      html: htmlBody
    });

    if (process.env.RESEND_SEND_CONFIRMATION === "true") {
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "We received your request",
        text: "Thanks for contacting Skolarrs Solutions. Our team will reach out shortly.",
        html: "<p>Thanks for contacting Skolarrs Solutions. Our team will reach out shortly.</p>"
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
