import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "suratihpurwasih96@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD, // pakai App Password Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "taofikhidayat10@gmail.com",
      subject: `Pesan dari ${name}: ${subject}`,
      text: message,
    });
    res.status(200).json({ success: true, message: "Email terkirim!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
