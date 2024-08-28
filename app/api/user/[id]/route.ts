import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { isPasswordValid, isEmailValid } from "@/lib/userActions";

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
    return new Response(JSON.stringify({ error: "Body is required" }), {
      status: 400,
    });
  }
  if (!Object.values(body)[0]) {
    return new Response(
      JSON.stringify({ error: "Le champ ne peut être vide." }),
      { status: 400 }
    );
  }
  try {
    if (body.password) {
      const isPasswordStrong = await isPasswordValid(body.password);
      if (!isPasswordStrong) {
        return new Response(
          JSON.stringify({
            error:
              "Le mot de passe doit contenir au moins 12 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
          }),
          { status: 400 }
        );
      } else {
        body.password = await bcrypt.hash(body.password, 10);
      }
    }
    if (body.email) {
      const isEmailValided = await isEmailValid(body.email);
      if (!isEmailValided) {
        return new Response(
          JSON.stringify({
            error:
              "L'email n'est pas valide.",
          }),
          { status: 400 }
        );
      }
    }
    await prisma.user.update({
      where: {
        id: params.id,
      },
      data: body,
    });
    return new Response(JSON.stringify({ message: "User updated" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error updating user" }), {
      status: 500,
    });
  }
}
