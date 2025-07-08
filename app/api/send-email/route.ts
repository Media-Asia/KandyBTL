import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables")
      return NextResponse.json(
        { message: "Email configuration is missing" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "mail.kandybtl.lk",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      replyTo: email,
      subject: `New Contact Inquiry - ${subject} | KandyBTL`,
      html: getEmailHTML(name, email, phone, subject, message),
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.messageId)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    )
  }
}

function getEmailHTML(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { margin: 10px !important; border-radius: 12px !important; }
      .header-padding, .content-padding, .footer-padding { padding: 25px 20px !important; }
      .header-title { font-size: 24px !important; }
      .section-title { font-size: 18px !important; }
      .info-card, .message-card { padding: 15px !important; margin-bottom: 15px !important; }
      .contact-item { padding: 10px !important; }
      .contact-icon { width: 35px !important; height: 35px !important; margin-right: 12px !important; }
      .message-content { padding: 15px !important; }
      .reply-button { padding: 12px 24px !important; font-size: 13px !important; }
      .decorative-circle { display: none !important; }
    }
    @media only screen and (max-width: 480px) {
      .container { margin: 5px !important; border-radius: 8px !important; }
      .header-padding, .content-padding, .footer-padding { padding: 20px 15px !important; }
      .header-title { font-size: 22px !important; }
      .contact-item { flex-direction: column !important; text-align: center !important; }
      .contact-icon { margin-right: 0 !important; margin-bottom: 8px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
  <div class="container" style="max-width: 650px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div class="header-padding" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 25px; text-align: center; position: relative;">
      <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border-radius: 12px; padding: 20px; display: inline-block; max-width: 90%;">
        <h1 class="header-title" style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">KandyBTL</h1>
        <p style="color: rgba(255, 255, 255, 0.9); margin: 5px 0 0;">New Contact Inquiry</p>
      </div>
    </div>

    <div class="content-padding" style="padding: 30px 25px;">
      <div class="info-card" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #667eea;">
        <h2 class="section-title" style="margin: 0 0 20px; color: #1e293b;">👤 Contact Information</h2>
        <div class="contact-item" style="display: flex; align-items: center; margin-bottom: 12px;">
          <div class="contact-icon" style="width: 40px; height: 40px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin-right: 15px; border-radius: 8px;">👋</div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b;">Full Name</p>
            <p style="margin: 0; font-size: 16px; color: #1e293b;">${name}</p>
          </div>
        </div>
        <div class="contact-item" style="display: flex; align-items: center; margin-bottom: 12px;">
          <div class="contact-icon" style="width: 40px; height: 40px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin-right: 15px; border-radius: 8px;">📧</div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b;">Email Address</p>
            <p style="margin: 0; font-size: 16px; color: #1e293b;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
          </div>
        </div>
        ${phone ? `
        <div class="contact-item" style="display: flex; align-items: center; margin-bottom: 12px;">
          <div class="contact-icon" style="width: 40px; height: 40px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin-right: 15px; border-radius: 8px;">📱</div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b;">Phone Number</p>
            <p style="margin: 0; font-size: 16px; color: #1e293b;"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></p>
          </div>
        </div>` : ``}
        <div class="contact-item" style="display: flex; align-items: center;">
          <div class="contact-icon" style="width: 40px; height: 40px; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center; margin-right: 15px; border-radius: 8px;">📋</div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b;">Subject</p>
            <p style="margin: 0; font-size: 16px; color: #1e293b;">${subject}</p>
          </div>
        </div>
      </div>

      <div class="message-card" style="background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%); border-radius: 12px; padding: 20px; border-left: 4px solid #764ba2;">
        <h2 class="section-title" style="margin: 0 0 20px; color: #1e293b;">💬 Message Details</h2>
        <div class="message-content" style="background-color: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      </div>

    
    </div>

    <div class="footer-padding" style="background-color: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0;">
      <div style="text-align: center;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 20px; font-weight: 700; margin-bottom: 8px;">
          KandyBTL
        </div>
        <p style="color: #64748b; margin: 0; font-size: 13px;">This inquiry was submitted through the KandyBTL contact form<br>
          <span style="color: #94a3b8;">Received on ${new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}</span>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`
}
