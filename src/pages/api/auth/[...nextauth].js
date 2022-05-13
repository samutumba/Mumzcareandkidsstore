import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import {
    MongoDBAdapter
} from "@next-auth/mongodb-adapter";
import clientPromise from "./../../../utils/mongodb";


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
        })
        // ...add more providers here
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