import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address, reason, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false // PRO LOKÁLNÍ VÝVOJ - v produkci odstranit!
        }
      });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nový odhadový požadavek od ${name}`,
      text: `
        Jméno: ${name}
        Email: ${email}
        Telefon: ${phone || 'Nezadáno'}
        Adresa: ${address || 'Nezadáno'}
        Důvod ocenění: ${reason || 'Nezadáno'}
        
        Zpráva:
        ${message}
      `,
      html: `
        <h3>Nový odhadový požadavek</h3>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nezadáno'}</p>
        <p><strong>Adresa:</strong> ${address || 'Nezadáno'}</p>
        <p><strong>Důvod ocenění:</strong> ${reason || 'Nezadáno'}</p>
        <h4>Zpráva:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return new Response("Email byl úspěšně odeslán", { status: 200 });

  } catch (error: any) {
    console.error("Chyba při odesílání emailu:", error);
    return new Response("Nepodařilo se odeslat email: " + error.message, { status: 500 });
  }
}