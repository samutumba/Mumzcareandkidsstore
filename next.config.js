/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: "mongodb+srv://root:7PWH6m5osKZmABL2@mumzcareandkidsstore.jdvlm.mongodb.net/MumzCareAndKidsStore?retryWrites=true&w=majority",
    LOCAL_EMAIL: "Mumzcareandkidsstore@gmail.com",
    EMAIL_PWD: "admin@mumz",
    GOOGLE_OAUTH: "523487877571-thsnvkrlk5pnvonp5sptsh850id898uc.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  }
}

module.exports = nextConfig
