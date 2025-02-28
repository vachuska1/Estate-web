import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Přijatá data:", data);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    console.log("Odesílám email...");
    await transporter.sendMail({
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      to: "odhadyvachuska@gmail.com",
      subject: `Nová poptávka od ${data.name}`,
      text: `Jméno: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone}\nAdresa: ${data.address}\nDůvod: ${data.reason}\nZpráva: ${data.message}`,
    });

    console.log("Email úspěšně odeslán!");

    // Vytvoření odpovědi s CORS hlavičkami
    const response = NextResponse.json({ message: "Email úspěšně odeslán" }, { status: 200 });
    
    // Přidání hlaviček pro CORS
    response.headers.set("Access-Control-Allow-Origin", "*"); // Povolit všechny domény (pro konkrétní doménu použij např. "https://tvuj-web.cz")
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;

  } catch (error) {
    console.error("Chyba při odesílání emailu:", error);

    const response = NextResponse.json({ error: "Nepodařilo se odeslat email." }, { status: 500 });

    // Přidání CORS hlaviček pro chybu
    response.headers.set("Access-Control-Allow-Origin", "*"); // Povolit všechny domény (pro konkrétní doménu použij např. "https://tvuj-web.cz")
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
  }
}
