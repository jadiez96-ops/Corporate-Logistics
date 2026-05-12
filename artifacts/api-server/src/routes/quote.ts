import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/quote", async (req, res) => {
  const { company, contact, email, phone, requirements } = req.body;

  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) {
    req.log.error("GMAIL_APP_PASSWORD not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "jadiez96@gmail.com",
      pass: appPassword,
    },
  });

  const mailOptions = {
    from: '"ECTSA Website" <jadiez96@gmail.com>',
    to: "jadiez96@gmail.com",
    replyTo: email,
    subject: `Nueva Solicitud de Cotización – ${company || "Sin empresa"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #0e1b2c; padding: 24px 32px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nueva Solicitud de Cotización</h2>
          <p style="color: #cc1e1e; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">ECTSA – Empresa Coclesana de Transporte, S.A.</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 160px;">Empresa</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #0e1b2c;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contacto</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0e1b2c;">${contact || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Correo</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0e1b2c;"><a href="mailto:${email}" style="color: #cc1e1e;">${email || "—"}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #0e1b2c;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Requerimientos</td>
              <td style="padding: 10px 0; color: #0e1b2c; white-space: pre-line;">${requirements || "—"}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f7f7f7; padding: 16px 32px; text-align: center;">
          <p style="color: #aaa; font-size: 12px; margin: 0;">Enviado desde el sitio web de ECTSA</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    req.log.info({ company, contact }, "Quote request email sent");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send quote email");
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
