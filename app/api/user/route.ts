import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body.password as string, 10)
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: hashedPassword,
            hourlyWage: 0,
        },
    });
    return NextResponse.json(newUser);
}