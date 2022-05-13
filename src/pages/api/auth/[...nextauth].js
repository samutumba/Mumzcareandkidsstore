import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {
    MongoDBAdapter
} from "@next-auth/mongodb-adapter"
import dbConnect from "./../../../utils/dbConnect";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(dbConnect),
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt",
        maxAge: 7776000000
    },
    debug: true,
})