import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import db from '@/libs/db'

export async function POST(request) {
    try{
        const data = await request.json()

    const userFound = await db.user.findUnique({
        where: {
            username: data.username
        }
    })

    const emailFound = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (emailFound) {
        return NextResponse.json({
            message: 'El email ya existe'
        }, {
            status: 400
        })
    }

    if (userFound) {
        return NextResponse.json({
            message: 'El nombre de usuario ya existe'
        }, {
            status: 400
        })
    }

    // console.log(data);
    const hashedPassword = await bcrypt.hash(data.password, 10)
    console.log(data)
    const newUser = await db.user.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashedPassword
        }
    })
    console.log(newUser)
    const {password: _, ...user} = newUser
    return NextResponse.json(user);
    }catch (error) {
        return NextResponse.json(
            {
              message: error.message,
            },
            {
              status: 500,
            }
          );
    }
}
