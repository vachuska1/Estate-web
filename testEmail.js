import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testMail() {
  try {
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.SMTP_USER}>`,
      to: "cilovy-email@domena.cz",
      subject: "Testovací email",
      text: "Pokud tohle dorazí, SMTP funguje správně!",
    });

    console.log("Email odeslán: ", info.messageId);
  } catch (error) {
    console.error("Chyba při odesílání emailu:", error);
  }
}

testMail();
