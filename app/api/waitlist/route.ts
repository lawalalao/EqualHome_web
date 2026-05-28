import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json().catch(() => ({})) as { email?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID ?? "2");

  // If no API key configured, log and return success (dev mode)
  if (!apiKey) {
    console.log("[waitlist] Email captured (no BREVO_API_KEY set):", email);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // 201 = created, 204 = already exists & updated — both are success
    if (!res.ok && res.status !== 204) {
      const body = await res.text();
      console.error("[waitlist] Brevo error:", res.status, body);
      return NextResponse.json({ error: "Brevo error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Network error:", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
