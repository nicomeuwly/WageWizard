"use server";
import { getServerSession } from 'next-auth';
import prisma from "@/lib/prisma";

export async function getUser() {
    const session = await getServerSession();
    if (!session) {
        throw new Error('No session found');
    }
    const email = session.user?.email;
    if (!email) {
        throw new Error('No email found');
    }
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error('User not found');
    }
    return {id: user.id, email: user.email, name: user.name };
}