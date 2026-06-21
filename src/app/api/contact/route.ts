import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // ✅ Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — email not sent");

      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 },
      );
    }

    const toEmail = process.env.RESEND_TO_EMAIL || email;

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width:600px;margin:auto;background:#09090B;color:#fff;border-radius:12px;overflow:hidden;border:1px solid #1e293b;">
          
          <div style="padding:24px;background:linear-gradient(135deg,#6366F1,#06B6D4);">
            <h1 style="margin:0;">&lt;Dev/&gt; Portfolio</h1>
            <p style="opacity:0.8;margin-top:6px;">New contact message</p>
          </div>

          <div style="padding:24px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr style="border-color:#1e293b;margin:16px 0"/>

            <p style="white-space:pre-wrap;">${message}</p>

            <a href="mailto:${email}"
               style="display:inline-block;margin-top:20px;padding:10px 18px;background:#6366F1;color:white;border-radius:6px;text-decoration:none;">
              Reply
            </a>
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Email error:", err);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
