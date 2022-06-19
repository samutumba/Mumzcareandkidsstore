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
    EMAIL_SERVER: "smtp.gmail.com",
    EMAIL_SERVER_USER: "mumzcareandkidsstore@gmail.com",
    EMAIL_SERVER_PASSWORD: "iafexpyqsykleaox",
    EMAIL_SERVER_HOST: "smtp.gmail.com",
    EMAIL_SERVER_PORT: "587",
    SECRET: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTXVtekNhcmVhbmRLaWRzU3RvcmUifQ.cmM-6qtSPrNx5IA1kCdJ3Z-f5xOkRoNcEANzOFNvyyk",
    EMAIL_FROM: "MumzCare Team <mumzcareandkidsstore@gmail.com>",
    SENDGRID_API_KEY: "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",
    APPLE_ID: "mumzcareandkidsstore@gmail.com",
    APPLE_SECRET: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTQ2OTYxOTgsImV4cCI6MTkwNzE1Njg2NywiYXVkIjoiaHR0cHM6Ly9hcHBsZWlkLmFwcGxlLmNvbSIsInN1YiI6Imh0dHBzOi8vbXVtemNhcmVhbmRraWRzc3RvcmUuY29tLyJ9.PnDhbtjEF6_uN-McqetsRSZoK-6igqVtmqRpT2WTiCg",
  },
  images: {
    domains: ["www.mumzcareandkidsstore.com","lh3.googleusercontent.com", "res.cloudinary.com", "platform-lookaside.fbsbx.com"]
  }
}

module.exports = nextConfig
