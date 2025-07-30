import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PSWD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Mail from msam24: ${subject}`,
      html: `<h3>Sender name: ${name}</h3> <br>
      <h3>Sender address: ${email}</h3> <br>
      <h2>Message: <br>
      ${message}</h2>`,
    });
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send("something wrong");
  }
}
