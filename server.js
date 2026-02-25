import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const debugResponseEnabled = String(process.env.CONTACT_DEBUG_RESPONSE || '').toLowerCase() === 'true';

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

const parseEmailList = (value) =>
  String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const uniqueEmails = (items) =>
  Array.from(
    new Set(
      items
        .filter(Boolean)
        .map((item) => String(item).trim().toLowerCase())
        .filter(Boolean),
    ),
  );

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body || {};

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const serviceLabels = {
    web: 'Web Development',
    ai: 'AI & Machine Learning',
    design: 'UI/UX Design',
    mobile: 'Mobile Development',
    consulting: 'Technical Consulting',
    other: 'Other',
  };
  const serviceLabel = serviceLabels[service] || service;

  const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0e0e1a;border-radius:16px;overflow:hidden;border:1px solid rgba(167,139,250,0.2);">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1a0a2e,#0e0e1a);padding:32px 40px;border-bottom:2px solid rgba(167,139,250,0.3);">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#a78bfa;font-weight:800;">New Inquiry</p>
          <h1 style="margin:0;font-size:24px;color:#ffffff;font-weight:800;">Contact Form Submission</h1>
          <p style="margin:8px 0 0;font-size:13px;color:#6b7280;">via neexzen.com</p>
        </td></tr>
        <!-- Service badge -->
        <tr><td style="padding:28px 40px 0;">
          <span style="display:inline-block;background:rgba(167,139,250,0.12);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);border-radius:100px;padding:4px 14px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">${serviceLabel}</span>
        </td></tr>
        <!-- Fields -->
        <tr><td style="padding:24px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
      ['Name', name, '#a78bfa'],
      ['Email', email, '#38bdf8'],
      ['Phone', phone, '#34d399'],
      ['Company', company || 'N/A', '#fb923c'],
    ].map(([label, val, color]) => `
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${color};font-weight:800;">${label}</p>
              <p style="margin:0;font-size:15px;color:#e5e7eb;font-weight:500;">${val}</p>
            </td></tr>`).join('')}
            <!-- Message -->
            <tr><td style="padding:20px 0 0;">
              <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#f472b6;font-weight:800;">Message</p>
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;">
                <p style="margin:0;font-size:14px;color:#d1d5db;line-height:1.7;">${String(message).replace(/\n/g, '<br />')}</p>
              </div>
            </td></tr>
          </table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 40px 32px;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="margin:0;font-size:12px;color:#4b5563;">This message was sent from the contact form at <a href="https://neexzen.com" style="color:#a78bfa;text-decoration:none;">neexzen.com</a>. Reply directly to this email to respond to ${name}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;


  try {
    const toRecipients = parseEmailList(process.env.CONTACT_RECEIVER);
    const ccRecipients = parseEmailList(process.env.CONTACT_CC);
    const bccRecipients = parseEmailList(process.env.CONTACT_BCC);

    const allRecipients = uniqueEmails([
      ...(toRecipients.length > 0 ? toRecipients : [process.env.SMTP_USER]),
      ...ccRecipients,
      ...bccRecipients,
    ]);

    const results = await Promise.allSettled(
      allRecipients.map((recipient) =>
        transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: recipient,
          replyTo: email,
          subject: `New Contact Form Submission - ${service}`,
          html: emailHtml,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\nService: ${service}\n\nMessage:\n${message}`,
        }),
      ),
    );

    const sentRecipients = [];
    const failedRecipients = [];

    results.forEach((result, index) => {
      const recipient = allRecipients[index];

      if (result.status === 'fulfilled') {
        sentRecipients.push(recipient);
      } else {
        failedRecipients.push(recipient);
      }
    });

    console.log('Contact email dispatch result:', { sentRecipients, failedRecipients });

    if (sentRecipients.length === 0) {
      return res.status(500).json({ message: 'Email sending failed. Please try again later.' });
    }

    const responsePayload = {
      message:
        failedRecipients.length > 0
          ? 'Message sent, but forwarding failed for some recipients.'
          : 'Email sent successfully.',
    };

    if (debugResponseEnabled) {
      responsePayload.sentRecipients = sentRecipients;
      responsePayload.failedRecipients = failedRecipients;
    }

    return res.status(200).json(responsePayload);
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