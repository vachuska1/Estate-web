import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, address, reason, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vyplňte povinná pole (jméno, email, zpráva)" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true pro 465, false pro ostatní porty
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          ciphers: 'SSLv3', // Přidejte tuto řádku
        }
      });

    const mailOptions = {
      from: `"Kontaktní formulář" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nový požadavek: ${reason || 'Ocenění nemovitosti'}`,
      html: `
        <h3>Nový kontaktní formulář</h3>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Adresa:</strong> ${address}</p>` : ''}
        ${reason ? `<p><strong>Důvod:</strong> ${reason}</p>` : ''}
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: "E-mail byl úspěšně odeslán" },
      { status: 200 }
    );

  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : 'Neznámá chyba';
    console.error("Chyba při odesílání:", err);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat e-mail", details: err },
      { status: 500 }
    );
  }
}