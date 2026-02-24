import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, message } = req.body || {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const emailHtml = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || 'N/A'}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${String(message).replace(/\n/g, '<br />')}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: emailHtml,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch {
    return res.status(500).json({ message: 'Email sending failed. Please try again later.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`);
});