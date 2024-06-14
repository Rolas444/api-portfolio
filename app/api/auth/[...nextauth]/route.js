import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from 'bcrypt'
// import { signIn } from "next-auth/react";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "Email"},
                password: {label: "Password", type: "password", placeholder: "Password"}
            },
            async authorize(credentials, req){
                console.log(credentials)
                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!userFound) throw new Error(JSON.stringify({
                    status: 401,
                    message: "User not found"
                
                }))
                console.log(userFound)
                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
                if(!matchPassword) return null
                return {
                    id: userFound.id,
                    username: userFound.username,
                    email: userFound.email
                }
            }
        })
    ],
    pages:{
        signIn: '/auth/login'
    }
    // callbacks: {
    //     async redirect({ url, baseUrl }) {
    //         return baseUrl
    //       }
    // }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}