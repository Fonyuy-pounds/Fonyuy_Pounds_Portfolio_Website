import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, projectType, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'fonyuypatrick929@gmail.com',
      replyTo: email,
      subject: `New project inquiry — ${projectType} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: 'Inter', sans-serif; background: #0A0A0A; color: #F0EDE6; margin: 0; padding: 40px; }
              .container { max-width: 600px; margin: 0 auto; }
              .label { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #888880; margin-bottom: 4px; }
              .value { font-size: 16px; color: #F0EDE6; margin-bottom: 24px; }
              .accent { color: #C9A96E; }
              .divider { height: 1px; background: #1E1E1E; margin: 32px 0; }
              .message-box { background: #111111; border: 1px solid #1E1E1E; padding: 24px; white-space: pre-wrap; line-height: 1.6; }
            </style>
          </head>
          <body>
            <div class="container">
              <p class="accent" style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:40px;">
                New Inquiry — Fonyuy Pounds Portfolio
              </p>
              
              <div class="label">From</div>
              <div class="value">${name}</div>
              
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color:#C9A96E;">${email}</a></div>
              
              <div class="label">Project Type</div>
              <div class="value">${projectType}</div>
              
              <div class="divider"></div>
              
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
              
              <div class="divider"></div>
              
              <p style="font-size:11px;color:#888880;letter-spacing:0.1em;">
                Received via fonyuypounds.com — reply directly to this email to respond.
              </p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
