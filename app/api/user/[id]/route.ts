import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(req: NextRequest, params: { id: string }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  if (!body) {
    throw new Error("Body is required");
  }
  try {
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: body,
    });
    return NextResponse.json(user);
  } catch (error) {
    throw new Error("Error updating user");
  }
}
