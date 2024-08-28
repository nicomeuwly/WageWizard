import { NextRequest } from 'next/server'
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { paramsId: string } }) {
    try {
        const param = await prisma.salary_adjustment.findUnique({
            where: {
                id: params.paramsId
            }
        });
        return new Response(JSON.stringify(param), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Paramètre non trouvé" }), { status: 404 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { paramsId: string } }) {
    const body = await req.json();
    if (!body) {
        return new Response(JSON.stringify({ error: "Body is required" }), { status: 400 });
    }
    const hasEmptyFields = Object.values(body).some(value => value === undefined || value === null || value === "");

    if (hasEmptyFields) {
        return new Response(JSON.stringify({ error: "Il faut remplir tous les champs" }), { status: 400 });
    }
    try {
        await prisma.salary_adjustment.update({
            where: {
                id: params.paramsId
            },
            data: body
        });
        return new Response(JSON.stringify({ message: "Paramètre modifié avec succès" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Quelque-chose n'a pas fonctionné..." }), { status: 400 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { paramsId: string } }) {
    try {
        await prisma.salary_adjustment.delete({
            where: {
                id: params.paramsId,
            },
        });
        return new Response(JSON.stringify({ message: "Paramètre supprimé avec succès" }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Paramètre non trouvé" }), {
            status: 500,
        });
    }
}