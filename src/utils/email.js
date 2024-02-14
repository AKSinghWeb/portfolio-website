import axios from 'axios'

// Replace with your SendinBlue API key
const apiKey =
  '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'

// Replace with your SendinBlue sender email and name

// Replace with the recipient's email
const recipientEmail = 'sidhant0121@gmail.com'

// HTML content for the email

// SendinBlue API endpoint
const apiUrl = 'https://api.brevo.com/v3/smtp/email'

const sendMessage = async (name, email, message) => {
  const emailContent = `
<title>Message from ${name}</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">

<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 style="text-align: center; color: #333333;">Message from ${name}</h2>
    <hr style="border-top: 1px solid #eeeeee;">
    
    <div style="margin-bottom: 20px;">
        <strong>Name:</strong>
        <span style="display: block; padding: 5px; background-color: #f9f9f9; border: 1px solid #dddddd; border-radius: 5px;">${name}</span>
    </div>
    
    <div style="margin-bottom: 20px;">
        <strong>Email:</strong>
        <a href="mailto:${email}" style="display: block; padding: 5px; background-color: #f9f9f9; border: 1px solid #dddddd; border-radius: 5px; color: #333333; text-decoration: none;">${email}</a>
    </div>
    
    <div>
        <strong>Message:</strong>
        <div style="padding: 10px; background-color: #f9f9f9; border: 1px solid #dddddd; border-radius: 5px;">
            <p>${message}</p>
        </div>
    </div>
</div>

</body>
`

  const emailData = {
    sender: { name: name, email: email },
    to: [{ email: recipientEmail }],
    subject: 'New Message from Portfolio Website',
    htmlContent: emailContent,
  }

  return axios.post(apiUrl, emailData, {
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
    },
  })
}

export default sendMessage
