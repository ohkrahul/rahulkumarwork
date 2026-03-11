import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildHtml(name: string, email: string, phone: string, projectType: string, budget: string, message: string) {
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <style>
    @media (max-width:600px){ .container{ width:100% !important; } .px{ padding-left:16px !important; padding-right:16px !important; } }
  </style>
</head>
<body style="margin:0;background:#f4f6fb;color:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table class="container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
          style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;box-shadow:0 10px 40px rgba(99,102,241,0.15);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 20px 32px;background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%);">
              <div style="color:#fff;font-size:28px;font-weight:700;letter-spacing:-0.5px;">🚀 New Project Enquiry</div>
              <div style="color:#e9e9ff;font-size:15px;margin-top:8px;">Someone wants to work with you from your portfolio</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="px" style="padding:32px;">
              <p style="margin:0 0 24px 0;color:#374151;font-size:16px;line-height:1.6;">
                Hi <strong style="color:#111827;">Rahul</strong>, you have a new enquiry from <strong>${name}</strong>.
              </p>

              <table role="presentation" width="100%"
                style="border-collapse:separate;border:1px solid #e5e7eb;border-radius:12px;background:#fafbfc;margin-bottom:24px;">
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #e5e7eb;">
                    <div style="color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">From</div>
                    <div style="color:#111827;font-size:16px;font-weight:600;">${name}</div>
                    <div style="margin-top:2px;"><a href="mailto:${email}" style="color:#4f46e5;font-size:14px;text-decoration:none;">${email}</a></div>
                    ${phone && phone !== 'Not provided' ? `<div style="margin-top:2px;"><a href="tel:${phone}" style="color:#374151;font-size:14px;text-decoration:none;">📞 ${phone}</a></div>` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #e5e7eb;">
                    <div style="color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Project Type</div>
                    <div style="color:#111827;font-size:16px;font-weight:600;">${projectType || "Not specified"}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #e5e7eb;">
                    <div style="color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Budget Range</div>
                    <div style="color:#111827;font-size:16px;font-weight:600;">${budget || "Not specified"}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Message</div>
                    <div style="color:#374151;font-size:14px;line-height:1.7;white-space:pre-line;">${message}</div>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto 24px auto;">
                <tr>
                  <td style="border-radius:12px;background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);text-align:center;">
                    <a href="mailto:${email}" style="display:inline-block;padding:16px 40px;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;border-radius:12px;">
                      ✉️ Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;color:#6b7280;font-size:13px;text-align:center;">
                Sent from your portfolio contact form · rahulkumarsahu.in
              </p>
            </td>
          </tr>

          <!-- Footer bar -->
          <tr>
            <td style="padding:16px 32px;background:#111827;text-align:center;">
              <div style="color:#94a3b8;font-size:11px;">© ${new Date().getFullYear()} Rahul Sahu. All rights reserved.</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, project_type, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `🚀 New enquiry from ${name} — ${project_type || "Portfolio"}`,
      html: buildHtml(name, email, phone, project_type, budget, message),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
