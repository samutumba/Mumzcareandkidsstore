// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/**Sends emails using Twilio SendGrid API 
 * @param recipient - Email Recipient
 * @param subject - Email subject
 * @param text - Text version of Email
 * @param html - Html email 
 * @returns Whether email was sent
 */
export function sendMail(recipient:string, subject:string, text:string, html:string):boolean {

    const msg = {
        to: recipient, // Change to your recipient
        from: 'info@mumzcareandkidsstore.com', // Change to your verified sender
        subject: subject,
        text: text,
        html: html,
    }

    sgMail.send(msg).then(() => {
            return true;
        }).catch((error: any) => {
            console.error(error)
            return false;
        })
    return false;
}