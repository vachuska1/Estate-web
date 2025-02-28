import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// API route pro odeslání emailu
export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Přijatá data:", data);

    // Nastavení transporteru pro nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // Zkontroluj, zda používáš správný port
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false }, // Pokud používáš TLS
    });

    console.log("Odesílám email...");
    await transporter.sendMail({
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      to: "cilovy-email@domena.cz", // Zadej cíl emailu
      subject: `Nová poptávka od ${data.name}`,
      text: `Jméno: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone}\nAdresa: ${data.address}\nDůvod: ${data.reason}\nZpráva: ${data.message}`,
    });

    console.log("Email úspěšně odeslán!");
    return NextResponse.json({ message: "Email úspěšně odeslán" }, { status: 200 });
  } catch (error) {
    console.error("Chyba při odesílání emailu:", error);
    return NextResponse.json({ error: "Nepodařilo se odeslat email." }, { status: 500 });
  }
}
