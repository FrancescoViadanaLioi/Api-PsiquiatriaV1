import type { ProfissionalBody } from "../controllers/profissional.c.js";
import { PrismaClient, type Profissional } from '@prisma/client';
const prisma = new PrismaClient();

export async function createProfissional(data: ProfissionalBody): Promise<Profissional> {
    const novoProfissional = await prisma.profissional.create({
        data, 
    });
    return novoProfissional;
}
export async function getAllProfissionais(): Promise<Profissional[]> {
    return prisma.profissional.findMany();
}

export async function getProfissionalById(id: number): Promise<Profissional | null> {
    const profissional = await prisma.profissional.findUnique({
        where: { id },
    });
    return profissional;
}

export async function updateProfissional(id: number, data: Partial<ProfissionalBody>){
const profissionalAtualizado = await prisma.profissional.update({
        where: { id },
        data,
    });
    return profissionalAtualizado;
}

export async function deleteProfissional(id: number): Promise<Profissional> {
    const profissionalDeletado = await prisma.profissional.delete({
        where: { id },
    });
    return profissionalDeletado;
}
