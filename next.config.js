/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: "mongodb+srv://root:DqFD6rQbsdmuKVTZ@mumzcareandkidsstore.jdvlm.mongodb.net/MumzCareandKidsStore?retryWrites=true&w=majority",
    LOCAL_EMAIL: "Mumzcareandkidsstore@gmail.com",
    EMAIL_PWD: "admin@mumz",
    GOOGLE_CLIENT_ID: "523487877571-thsnvkrlk5pnvonp5sptsh850id898uc.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    JWT_SECRET: "9c3755a137f53725290d4541cc240a96"
  }
}

module.exports = nextConfig
