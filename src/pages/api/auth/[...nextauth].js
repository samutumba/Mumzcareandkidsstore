import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import {
    MongoDBAdapter
} from "@next-auth/mongodb-adapter";
import clientPromise from "./../../../utils/mongodb";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }), EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                },
                from: process.env.EMAIL_FROM,
            async sendVerificationRequest({
                identifier: email,
                url,
                provider: {
                    server,
                    from
                }
            }) {
                const {
                    host
                } = new URL(url)
                const transport = nodemailer.createTransport(server)
                await transport.sendMail({
                    to: email,
                    from,
                    subject: `Login to Mumz Care and Kids Store`,
                    text: text({
                        url,
                        host
                    }),
                    html: html({
                        url,
                        host,
                        email
                    })
                })
                }
        }})
                
    ],
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt",
        maxAge: 7776000000
    },
    debug: true,
})

function html({
    url,
    host,
    email
}) {
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
    // Your email content
    return `
      <body>
        <h1>Welcome to Mumz Care and Kids Store!</h1>
        <h3>You requested a login form ${escapedEmail}</h3>
        <p>
          <a href="${url}">Login</a>
      </body>
  `
}

// Fallback for non-HTML email clients
function text({
    url,
    host
}) {
    return `Login to Mumz Care and Kids Store \n${url}\n\n`
}

