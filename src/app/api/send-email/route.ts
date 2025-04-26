import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address, reason, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Vyplňte povinná pole" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
     // tls: { rejectUnauthorized: false } // Pouze pro vývoj!
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nový požadavek: ${reason || 'Ocenění nemovitosti'}`,
      html: `
        <h2>Nový požadavek na odhad</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>Adresa:</strong> ${address}</p>` : ''}
        ${reason ? `<p><strong>Důvod:</strong> ${reason}</p>` : ''}
        <h3>Zpráva:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

} catch (error: unknown) {
    const err = error instanceof Error ? error.message : 'Unknown error';
    console.error("Chyba při odesílání emailu:", err);
    return new Response("Nepodařilo se odeslat email: " + err, { status: 500 });
  }
}