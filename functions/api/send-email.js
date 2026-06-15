// functions/api/send-email.js

export async function onRequestPost({ request, env }) {
  try {
    // 1. Read values from environment variables
    const CLIENT_ID = env.MS_CLIENT_ID;
    const CLIENT_SECRET = env.MS_CLIENT_SECRET;
    const TENANT_ID = env.MS_TENANT_ID;
    const SENDER_EMAIL = env.MS_SENDER_EMAIL; // The email address of the mailbox sending the email
    const DEFAULT_RECIPIENT_EMAIL = env.MS_RECIPIENT_EMAIL; // Your internal recipient for contact forms

    // Basic check for required environment variables
    if (!CLIENT_ID || !CLIENT_SECRET || !TENANT_ID || !SENDER_EMAIL || !DEFAULT_RECIPIENT_EMAIL) {
      console.error('Missing one of MS_CLIENT_ID, MS_CLIENT_SECRET, MS_TENANT_ID, MS_SENDER_EMAIL, or MS_RECIPIENT_EMAIL in environment variables.');
      return new Response(JSON.stringify({ error: 'Email service not fully configured. Contact support.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Parse form data from the request
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'New Contact Form Submission';
    const message = formData.get('message');

    // 3. Basic form data validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required form fields (name, email, message).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 4. OAuth 2.0 Client Credentials Flow to get an Access Token
    const tokenUrl = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
    const scope = "https://graph.microsoft.com/.default"; // Request all consented application permissions

    const tokenRequestBody = new URLSearchParams();
    tokenRequestBody.append('client_id', CLIENT_ID);
    tokenRequestBody.append('scope', scope);
    tokenRequestBody.append('client_secret', CLIENT_SECRET);
    tokenRequestBody.append('grant_type', 'client_credentials');

    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenRequestBody.toString(),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Failed to get access token from Azure AD:', errorText);
      return new Response(JSON.stringify({ error: 'Authentication failed with Microsoft Graph. Check Azure AD app registration and secrets.', details: errorText }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 5. Construct the email payload for Microsoft Graph API
    const mailBody = {
      message: {
        subject: `TaxConsulto Contact: ${subject} from ${name} (${email})`,
        body: {
          contentType: 'Text',
          content: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        },
        toRecipients: [
          {
            emailAddress: {
              address: DEFAULT_RECIPIENT_EMAIL,
            },
          },
        ],
        // Optionally, you can add the sender's email as a reply-to address
        replyTo: [
          {
            emailAddress: {
              address: email,
              name: name
            }
          }
        ]
      },
      saveToSentItems: true, // Save a copy in the sender's sent items
    };

    // 6. Send the email using Microsoft Graph API
    const graphApiUrl = `https://graph.microsoft.com/v1.0/users/${SENDER_EMAIL}/sendMail`;

    const sendMailResponse = await fetch(graphApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailBody),
    });

    if (sendMailResponse.ok) {
      return new Response(JSON.stringify({ message: 'Email sent successfully via Microsoft Graph!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const errorBody = await sendMailResponse.json();
      console.error('Microsoft Graph API email sending error:', errorBody);
      return new Response(JSON.stringify({ error: 'Failed to send email via Microsoft Graph.', details: errorBody }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Unhandled error in send-email function:', error);
    return new Response(JSON.stringify({ error: 'Internal server error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}