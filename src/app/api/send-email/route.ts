import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address, reason, message } = await req.json();

    // Validace vstupů
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        error: "Vyplňte povinná pole (jméno, email, zpráva)" 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nový požadavek: ${reason || 'Ocenění nemovitosti'}`,
      html: `...` // zachovejte původní HTML šablonu
    };

    await transporter.sendMail(mailOptions);
    
    // Vždy vracet JSON odpověď
    return new Response(JSON.stringify({ 
      success: true,
      message: "E-mail byl úspěšně odeslán" 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : 'Neznámá chyba';
    console.error("Chyba při odesílání emailu:", err);
    
    // Důležité: Vracet JSON i při chybě
    return new Response(JSON.stringify({ 
      error: "Nepodařilo se odeslat e-mail",
      details: err 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}