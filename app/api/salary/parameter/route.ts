import { NextRequest } from 'next/server'
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const userId = req.nextUrl.searchParams.get("userId");
        if (!userId) {
            return new Response(JSON.stringify({ error: "userId is required" }), { status: 400 });
        }
        const salaryAdjustments = await prisma.salary_adjustment.findMany({
            orderBy: {
                type: "desc"
            },
            where: {
                userId: userId
            }
        });
        return new Response(JSON.stringify(salaryAdjustments), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Aucun paramètres trouvés" }), { status: 404 });
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    if (!body) {
        return new Response(JSON.stringify({ error: "Body is required" }), { status: 400 });
    }
    const hasEmptyFields = Object.values(body).some(value => value === undefined || value === null || value === "");

    if (hasEmptyFields) {
        return new Response(JSON.stringify({ error: "Il faut remplir tous les champs" }), { status: 400 });
    }
    try {
        await prisma.salary_adjustment.create({
            data: {
                name: body.name,
                type: body.type,
                percentage: body.percentage,
                user: {
                    connect: { id: body.userId }
                }
            }
        });
        return new Response(JSON.stringify({ message: "Paramètre ajouté avec succès" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Quelque-chose n'a pas fonctionné..." }), { status: 400 });
    }
}