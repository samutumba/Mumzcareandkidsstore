import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import {
    MongoDBAdapter
} from "@next-auth/mongodb-adapter";
import clientPromise from "./../../../utils/mongodb";
import EmailProvider from "next-auth/providers/email";
import AppleProvider from "next-auth/providers/apple";
import nodemailer from "nodemailer"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }), 
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
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
                subject: `Sign in to Mumz Care and Kids Store`,
                text: text({
                    url,
                    host
                }),
                html: html({
                    url,
                    host,
                    email
                }),
            })
        }
            }),
    ],
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/sign-in",
        error: '/auth/error',
        verifyRequest: '/auth/verifyRequest',
        newUser: '/auth/newUser'
    },
    session: {
        strategy: "jwt",
        maxAge: 7776000000
    },
    debug: true,
    callbacks: {
        async session({
            session,
            token,
            user
        }) {
            session.user._id = user.id;
            return session;
        },
    },
})

function html({
    url,
    host,
    email
}) {
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
    // Your email content
    return `
        </head> 
          <body style = "background: #fdfffd;" >
           <head>
               <link rel = "preconnect" href = "https://fonts.gstatic.com" />
               <link rel = "preconnect" href = "https://fonts.googleapis.com" />
               <link href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel = "stylesheet" />
                <script src = "https://cdn.tailwindcss.com"></script>
          <div class = "flex flex-col" style="margin: auto;" >
          <div class = "m-auto" >
          <div class = "flex flex-col text-center" >
          <a class = "self-center" href = "https://mumzcareandkidsstore.com/" >
            <img src = "https://mumzcareandkidsstore.com/Final-logo.png"
            style = "width: 220px; height: fit-content"
            alt = "logo">
          </a> <p
                class = "my-2 font-bold"
                style = "padding: 10px 0px 0px 0px; font-size: 30px; font-family: Raleway, Arial, sans-serif; color: #333433;" >
                    Welcome to Mumz Care and Kids Store!
          </p> <p
            class = "my-1"
            style = "padding: 10px 0px 0px 0px; font-size: 18px; font-family: Quicksand, Arial, sans-serif; color: #333433;" >
                In order to sign in click the link below 
          </p> 
          <button class = "w-44 hover:w-48 hover:p-1 self-center my-5 rounded-lg"
            style = " background: #d80945;">
            <a href = "${url}"
                target = "_blank"
                style = "color: #fdfffd; font-size: 18px; font-family: Quicksand, Arial, sans-serif; text-decoration: none; padding: 10px 20px; display: inline-block; font-weight: bold;" >
            Sign In </a> 
          </button> 
           <p style = "padding: 10px 0px 0px 0px; font-size: 18px; font-family: Quicksand, Arial, sans-serif; color: #333433;" >
               Remember you can only use this link once
           if you need another one visit the <a class="underline" href = "https://mumzcareandkidsstore.com/sign-in">sign in page </a></p>
          <p style = "padding: 0px 0px 10px 0px; font-size: 15px; line-height: 22px; font-family: Quicksand, Arial, sans-serif;" >
            If you did not request this email you can safely ignore it. 
          </p> 
          </div> 
          </div> 
          </div> 
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

