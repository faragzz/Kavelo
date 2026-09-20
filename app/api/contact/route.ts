import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, projectType, budgetRange, message } = parsed.data;

    const projectTypeLabels: Record<string, string> = {
      website: "Websites & Landing Pages",
      "custom-software": "Custom Platforms & Portals",
      "mobile-app": "Mobile Applications",
      both: "Both / Multiple Services",
    };

    // Configure transporter
    // Requires environment variables:
    //   SMTP_HOST     (default: smtp.gmail.com)
    //   SMTP_PORT     (default: 587)
    //   SMTP_USER     your Gmail address
    //   SMTP_PASS     Gmail App Password (not your account password)
    //   CONTACT_EMAIL destination email (default: kavelo.hq@gmail.com)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_EMAIL || "kavelo.hq@gmail.com";

    await transporter.sendMail({
      from: `"Kavelo Contact Form" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New project enquiry — ${projectTypeLabels[projectType] || projectType} from ${name}`,
      text: `
New project enquiry via kavelo.dev

Name: ${name}
Email: ${email}
Project Type: ${projectTypeLabels[projectType] || projectType}
Budget Range: ${budgetRange || "Not specified"}

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f8f8; color: #333;">
  <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #e0e0e0;">
    <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e0e0e0;">
      <h1 style="margin: 0; font-size: 20px; color: #0D0D12;">New project enquiry</h1>
      <p style="margin: 4px 0 0; font-size: 14px; color: #666;">via kavelo.dev contact form</p>
    </div>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr>
        <td style="padding: 8px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Name</td>
        <td style="padding: 8px 0; font-size: 14px; color: #333;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
        <td style="padding: 8px 0; font-size: 14px; color: #333;"><a href="mailto:${email}" style="color: #5B4CFF;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Type</td>
        <td style="padding: 8px 0; font-size: 14px; color: #333;">${projectTypeLabels[projectType] || projectType}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Budget</td>
        <td style="padding: 8px 0; font-size: 14px; color: #333;">${budgetRange || "Not specified"}</td>
      </tr>
    </table>

    <div style="background: #f8f8f8; border-radius: 8px; padding: 20px;">
      <p style="margin: 0 0 8px; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #333; white-space: pre-wrap;">${message}</p>
    </div>

    <p style="margin-top: 24px; font-size: 12px; color: #999;">
      Reply directly to this email to respond to ${name}.
    </p>
  </div>
</body>
</html>
      `.trim(),
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("[/api/contact] Error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
