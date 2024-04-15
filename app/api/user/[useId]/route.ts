import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: { userId: string }) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        }
    });

    if (!user) {
        throw new Error("User not found");
    }

    return NextResponse.json(user);
}