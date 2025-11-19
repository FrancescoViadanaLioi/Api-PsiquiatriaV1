import { Request, Response } from "express";
import * as profissionalService from "../services/profissional.service.js"

interface ProfissionalBody {
    nome: string;
    especialidade: string;
    registroConselho: string;
}

export async function createProfissional(req: Request<{}, {}, ProfissionalBody>, res: Response) {
    try {
        const data: ProfissionalBody = req.body;

        if (!data.nome || !data.especialidade || !data.registroConselho) {
            return res.status(400).json({ error: "Todos os campos (nome, especialidade, registroConselho) são obrigatórios." });
        }

        const novoProfissional = await profissionalService.createProfissional(data);

        return res.status(201).json(novoProfissional);

    } catch (error) {
        console.error("Erro no controller createProfissional:", error);
        return res.status(500).json({ error: "Não foi possível criar o profissional." });
    }
}
export async function getAllProfissionais(req: Request, res: Response) {
    try {
        const profissionais = await profissionalService.getAllProfissionais();
        return res.status(200).json(profissionais);

    } catch (error) {
        console.error("Erro no controller getAllProfissionais:", error);
        return res.status(500).json({ error: "Não foi possível buscar os profissionais." });
    }
}
export async function getProfissionalById(req: Request<{ id: string }>, res: Response) {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
             return res.status(400).json({ error: "ID inválido." });
        }

        const profissional = await profissionalService.getProfissionalById(id);

        if (!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado." });
        }
        return res.status(200).json(profissional);

    } catch (error) {
        console.error("Erro no controller getProfissionalById:", error);
        return res.status(500).json({ error: "Não foi possível buscar o profissional." });
    }
}
export async function updateProfissional(req: Request<{ id: string }, {}, Partial<ProfissionalBody>>, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;

        if (isNaN(id)) {
             return res.status(400).json({ error: "ID inválido." });
        }
        const profissionalAtualizado = await profissionalService.updateProfissional(id, data);
        return res.status(200).json(profissionalAtualizado);

    } catch (error) {
        console.error("Erro no controller updateProfissional:", error);
        if (error instanceof Error && (error.message.includes('No Profissional found') || error.message.includes('record to update'))) {
             return res.status(404).json({ error: "Profissional não encontrado para atualização." });
        }
        return res.status(500).json({ error: "Não foi possível atualizar o profissional." });
    }
}
export async function deleteProfissional(req: Request<{ id: string }>, res: Response) {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
             return res.status(400).json({ error: "ID inválido." });
        }

        const profissionalDeletado = await profissionalService.deleteProfissional(id);

        // 200 OK (Ou 204 No Content, dependendo da sua preferência)
        return res.status(200).json(profissionalDeletado);

    } catch (error) {
        console.error("Erro no controller deleteProfissional:", error);
        if (error instanceof Error && error.message.includes('No Profissional found')) {
             return res.status(404).json({ error: "Profissional não encontrado para deletar." });
        }
        if (error instanceof Error && error.message.includes('Foreign key constraint')) {
             return res.status(409).json({ error: "Não é possível deletar o profissional, pois ele tem consultas associadas." });
        }
        return res.status(500).json({ error: "Não foi possível deletar o profissional." });
    }
}