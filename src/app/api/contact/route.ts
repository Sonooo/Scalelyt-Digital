import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, details, honeypot, source } = body;

    // Spam honeypot verification
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Processed" }, { status: 200 });
    }

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, email, phone)." },
        { status: 400 }
      );
    }

    // In production, this forwards to Resend/SendGrid and HubSpot/Zoho CRM/Google Sheets
    // For now we log and return success
    console.log("[Scalelyt Lead Capture]", {
      name,
      email,
      phone,
      service: service || "Not specified",
      budget: budget || "Not specified",
      details: details || "None provided",
      source: source || "Website Lead Form",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully. Our growth team will contact you within 4 business hours.",
    });
  } catch (error) {
    console.error("[Scalelyt Lead Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
