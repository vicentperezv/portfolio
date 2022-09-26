import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_KEY);

const sendEmail = async (req : NextApiRequest, res :NextApiResponse) => {
    
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    

  try {
    await sendgrid.send({
      to: "vicentperezv@gmail.com", // Your email where you'll receive emails
      from: "vicentperezv@gmail.com", // your website email address here
      subject: `[Lead from website] `,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
                <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${message}</p>
                    <br>
                </div>   
              </div>              
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;