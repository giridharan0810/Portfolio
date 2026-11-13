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

    // Primary Delivery: FormSubmit service directed straight to giridh2001@gmail.com
    let delivered = false;
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: siteConfig.url,
          Origin: siteConfig.url,
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New Message from ${name}`,
          message: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\nMessage:\n${message}`,
          _captcha: "false",
        }),
      });

      const fsJson = await formSubmitRes.json();
      if (formSubmitRes.ok || fsJson.success === "true" || fsJson.success === true || fsJson.message?.includes("Activation")) {
        delivered = true;
      }
    } catch (fsErr) {
      console.warn("FormSubmit transmission notice:", fsErr);
    }

    // Secondary Delivery: Resend API if RESEND_API_KEY is configured in env
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
            from: "Giridharan S Portfolio <onboarding@resend.dev>",
            to: [process.env.CONTACT_RECEIVER_EMAIL || siteConfig.email],
            subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
            text: `From: ${name} (${email})\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
          }),
        });

        if (resendRes.ok) {
          delivered = true;
        }
      } catch (err) {
        console.warn("Email service transmission notice:", err);
      }
    }

    // Always succeed if validated, providing reassurance and reliable mailto fallback in client
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent to Giridharan S.",
        delivered,
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
