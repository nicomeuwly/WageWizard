"use server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function getUser() {
  const session = await getServerSession();
  if (!session) {
    throw new Error("No session found");
  }
  const email = session.user?.email;
  if (!email) {
    throw new Error("No email found");
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return { id: user.id, email: user.email, name: user.name, wage: user.hourlyWage };
}

export async function isPasswordValid(password: string) {
  const minLength = 12;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasDigit = /\d/;
  const hasSpecialChar = /[^A-Za-z0-9]/;

  return (
    password.length >= minLength &&
    hasUpperCase.test(password) &&
    hasLowerCase.test(password) &&
    hasDigit.test(password) &&
    hasSpecialChar.test(password)
  );
}

export async function isEmailValid(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
