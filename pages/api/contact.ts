import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name and email are required.",
      });
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return res.status(500).json({
        error: "Missing email environment variables.",
      });
    }

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res.status(500).json({
        error: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("API contact error:", error);

    return res.status(500).json({
      error: "Something went wrong while sending the message.",
    });
  }
}
