import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to admin
    const adminEmailPromise = resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['shinobicoder1@gmail.com'],
      subject: `[Contact Form] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<br>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailPromise = resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['shinobicoder1@gmail.com'],
      subject: 'Thank you for contacting Roman Candy Rum',
      text: `
Hello ${name},

Thank you for contacting Roman Candy Rum. We've received your message and will get back to you as soon as possible.

${message}

Best regards,
The Roman Candy Rum Team
      `,
      html: `
<p>Hello ${name},</p>

<p>Thank you for contacting Roman Candy Rum. We've received your message and will get back to you as soon as possible.</p>

<blockquote style="border-left: 2px solid #ccc; padding-left: 10px; color: #666;">
  ${message.replace(/\n/g, '<br/>')}
</blockquote>

<p>Best regards,<br/>
The Roman Candy Rum Team</p>
      `,
    });

    // Wait for both emails to be sent
    const [adminResponse, userResponse] = await Promise.all([
      adminEmailPromise,
      userEmailPromise
    ]);

    // Check if either email had an error
    if (adminResponse.error || userResponse.error) {
      console.error('Error sending emails:', {
        adminError: adminResponse.error,
        userError: userResponse.error
      });
      return res.status(500).json({
        error: 'Failed to send email. Please try again later.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: adminResponse.data?.id
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Server error. Please try again later.'
    });
  }
} 