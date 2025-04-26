// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Důležité: Odstraňte 'edge' runtime!
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { name, email, phone, address, reason, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vyplňte povinná pole" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontaktní formulář" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: reason ? `${reason} (${name})` : `Zpráva od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Adresa:</strong> ${address}</p>` : ''}
        ${reason ? `<p><strong>Důvod:</strong> ${reason}</p>` : ''}
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Chyba při odesílání:', error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat e-mail" },
      { status: 500 }
    );
  }
}