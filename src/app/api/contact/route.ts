import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _honey } = body;

    // Spam honeypot check
    if (_honey) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Optional: Resend or SMTP integration if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Giri Portfolio <onboarding@resend.dev>",
            to: [process.env.CONTACT_RECEIVER_EMAIL || siteConfig.email],
            subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
            text: `From: ${name} (${email})\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json();
          console.warn("Resend API notice:", errData);
        }
      } catch (err) {
        console.warn("Email service transmission notice:", err);
      }
    }

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or reach out via email." },
      { status: 500 }
    );
  }
}
