import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, subject, message } = await req.json()

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    )
  }

  try {
    await resend.emails.send({
      from: 'Pressly Design Studio <hello@presslydesignstudio.com>', 
      to: 'hello@presslydesignstudio.com',                         
      replyTo: email,                                        // Replies go directly back to the client
      subject: `New Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}