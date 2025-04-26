import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic'; // Řeší problémy s cachingem na Vercelu

export async function POST(request: Request) {
  try {
    const { name, email, phone, address, reason, message } = await request.json();

    // Validace
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vyplňte povinná pole" },
        { status: 400 }
      );
    }

    // Odeslání emailu
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
      subject: `Nová zpráva od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Adresa:</strong> ${address}</p>` : ''}
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Chyba serveru" },
      { status: 500 }
    );
  }
}