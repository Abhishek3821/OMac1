const nodemailer = require('nodemailer');

const rateLimits = new Map();
const requiredSettings = ['SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'];

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const current = (rateLimits.get(ip) || []).filter((time) => now - time < windowMs);
  if (current.length >= 5) return true;
  current.push(now);
  rateLimits.set(ip, current);
  return false;
}

module.exports = async (request, response) => {
  if (request.method !== 'POST') return response.status(405).json({ message: 'Method not allowed.' });

  const missingSettings = requiredSettings.filter((setting) => !process.env[setting]);
  if (missingSettings.length) {
    console.error(`Contact form is not configured. Missing: ${missingSettings.join(', ')}`);
    return response.status(503).json({ message: 'The contact service is not configured yet.' });
  }
  if (isRateLimited(request.headers['x-forwarded-for'] || request.socket.remoteAddress || 'unknown')) {
    return response.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  const { name, phone, email, service, message, website } = request.body || {};
  if (website) return response.status(200).json({ message: 'Thank you for your enquiry.' });

  const values = { name, phone, email, service, message };
  if (Object.values(values).some((value) => typeof value !== 'string') || !name.trim() || !phone.trim() || !email.trim() || !service.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
    return response.status(400).json({ message: 'Please complete all fields with a valid email address.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    const safe = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, escapeHtml(value.trim())]));
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email.trim(),
      subject: `New website enquiry: ${name.trim()}`,
      text: `Name: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim()}\nService: ${service.trim()}\n\nMessage:\n${message.trim()}`,
      html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Message:</strong><br>${safe.message.replace(/\n/g, '<br>')}</p>`,
    });
    return response.status(200).json({ message: 'Thank you. Your confidential enquiry has been sent.' });
  } catch (error) {
    console.error('Unable to send contact email:', error);
    return response.status(500).json({ message: 'We could not send your enquiry. Please call us directly.' });
  }
};
