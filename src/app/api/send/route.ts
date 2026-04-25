import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import EmailTemplate from "@/emails/EmailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,  
    pass: process.env.GMAIL_APP_PASS,  
  },
});

export async function POST(req: Request) {
  try {
    const { to, subject, message, theme, name, isAnonymous } = await req.json();

    const html = await render(
      EmailTemplate({ message, subject, theme, name, isAnonymous })
    );

    await transporter.sendMail({
      from: `"LoveNote 💌" <${process.env.GMAIL_USER}>`,
      to,
      subject: `💌 ${subject}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 });
  }
}