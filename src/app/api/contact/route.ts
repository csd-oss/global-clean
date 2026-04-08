import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { from_name, from_email, from_phone, address, preferred_date, message } = body;

  const to = process.env.RESEND_TO_EMAIL!;

  try {
    await resend.emails.send({
      from: 'Global Clean <onboarding@resend.dev>',
      to,
      replyTo: from_email,
      subject: `New booking request from ${from_name}`,
      text: [
        `Name: ${from_name}`,
        `Phone: ${from_phone}`,
        `Email: ${from_email}`,
        `Address: ${address}`,
        `Preferred date: ${preferred_date}`,
        '',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Resend] error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
