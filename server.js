const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Hosting providers set environment variables directly. This also supports a local .env file.
function loadLocalEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match || process.env[match[1]]) return;
    process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  });
}
loadLocalEnv();

const PORT = Number(process.env.PORT) || 5000;
const MAX_BODY_SIZE = 32 * 1024;
const rateLimits = new Map();
const requiredSettings = ['SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'];
const missingSettings = requiredSettings.filter((setting) => !process.env[setting]);
const transporter = missingSettings.length ? null : nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

function sendJson(response, status, payload) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(payload));
}

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

async function handleContact(request, response) {
  if (!transporter) {
    console.error(`Contact form is not configured. Missing: ${missingSettings.join(', ')}`);
    return sendJson(response, 503, { message: 'The contact service is not configured yet.' });
  }
  if (isRateLimited(request.socket.remoteAddress || 'unknown')) return sendJson(response, 429, { message: 'Too many requests. Please try again later.' });

  let body = '';
  request.on('data', (chunk) => { body += chunk; if (body.length > MAX_BODY_SIZE) request.destroy(); });
  request.on('end', async () => {
    try {
      const { name, phone, email, service, message, website } = JSON.parse(body);
      if (website) return sendJson(response, 200, { message: 'Thank you for your enquiry.' });
      const values = { name, phone, email, service, message };
      if (Object.values(values).some((value) => typeof value !== 'string') || !name.trim() || !phone.trim() || !email.trim() || !service.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
        return sendJson(response, 400, { message: 'Please complete all fields with a valid email address.' });
      }
      const safe = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, escapeHtml(value.trim())]));
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email.trim(),
        subject: `New website enquiry: ${name.trim()}`,
        text: `Name: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim()}\nService: ${service.trim()}\n\nMessage:\n${message.trim()}`,
        html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Message:</strong><br>${safe.message.replace(/\n/g, '<br>')}</p>`,
      });
      return sendJson(response, 200, { message: 'Thank you. Your confidential enquiry has been sent.' });
    } catch (error) {
      console.error('Unable to send contact email:', error);
      return sendJson(response, 500, { message: 'We could not send your enquiry. Please call us directly.' });
    }
  });
}

function serveStatic(request, response) {
  const buildDir = path.join(__dirname, 'build');
  const requestedPath = request.url.split('?')[0] === '/' ? '/index.html' : request.url.split('?')[0];
  const filePath = path.normalize(path.join(buildDir, requestedPath));
  if (!filePath.startsWith(buildDir)) return response.end('Not found');
  fs.readFile(filePath, (error, data) => {
    if (error) return fs.readFile(path.join(buildDir, 'index.html'), (indexError, index) => {
      if (indexError) return response.end('Build the React app first with npm run build.');
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); response.end(index);
    });
    response.end(data);
  });
}

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/api/contact') return handleContact(request, response);
  if (request.method === 'GET' || request.method === 'HEAD') return serveStatic(request, response);
  return sendJson(response, 405, { message: 'Method not allowed.' });
}).listen(PORT, () => console.log(`Contact server listening on port ${PORT}`));
