/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: "mongodb+srv://root:DqFD6rQbsdmuKVTZ@mumzcareandkidsstore.jdvlm.mongodb.net/MumzCareandKidsStore?retryWrites=true&w=majority",
    LOCAL_EMAIL: "Mumzcareandkidsstore@gmail.com",
    EMAIL_PWD: "admin@mumz",
    GOOGLE_CLIENT_ID: "523487877571-thsnvkrlk5pnvonp5sptsh850id898uc.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    JWT_SECRET: "9c3755a137f53725290d4541cc240a96",
    FACEBOOK_CLIENT_ID: "521190436091719",
    FACEBOOK_CLIENT_SECRET: "7c6660e9cfdb4ce8a85533d0809da195",
    NEXTAUTH_URL: "https://mumzcareandkidsstore.com/",
    EMAIL_SERVER: "smtp://mumzcareandkidsstore@gmail.com:admin@mumz@smtp.gmail.com:587",
    EMAIL_SERVER_USER: "mumzcareandkidsstore@gmail.com",
    EMAIL_SERVER_PASSWORD: "xsmtpsib-a959e2a5ddbf86f1c7bfd55948758a5a2f753ac3187218e72f5161cffc0e687b-Ah7DRVCFG3Bq4knT",
    EMAIL_SERVER_HOST: "smtp-relay.sendinblue.com",
    EMAIL_SERVER_PORT: "587",
    EMAIL_FROM: "Mumzcare Team<mumzcareandkidsstore@gmail.com>"
  },
  images: {
    domains: ["lh3.googleusercontent.com", "https://res.cloudinary.com", "https://platform-lookaside.fbsbx.com"]
  }
}

module.exports = nextConfig
