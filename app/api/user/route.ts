import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const email = req.nextUrl.searchParams.get("email");
    if (!email) {
        throw new Error("Email is required");
    }
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return NextResponse.json(user.id);
}