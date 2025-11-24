import type express from "express"
import * as profissionalService from "../services/profissional.service.js" 

export async function createProfissional(req: express.Request, res: express.Response) {
    const { nome, especialidade, registroConselho} = req.body;
    try {
        const profissional = await profissionalService.createProfissional({ nome, especialidade, registroConselho})
        res.status(201).json(profissional)
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar profissional" });
    }
}

export async function getAllProfissionais(req: express.Request, res: express.Response) {
    const profissionais = await profissionalService.getAllProfissionais()
    if (!profissionais || profissionais.length === 0) {
        return res.status(404).json({ message: "Profissionais não encontrados" })
    }
    res.status(200).json(profissionais)
}

export async function getProfissionalById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const profissional = await profissionalService.getProfissionalById(Number(id)) 
    if (profissional)
    {
        res.status(200).json(profissional)
    }
    else
    {
        res.status(404).json({message: "Profissional não encontrado"})
    }
}

export async function updateProfissional(req: express.Request, res: express.Response) {
    const {id} = req.params
    const { nome, especialidade, registroConselho } = req.body

    try {
        const profissional = await profissionalService.updateProfissional(Number(id), {nome, especialidade, registroConselho})
        
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado para atualização.' });
        }
        res.status(200).json(profissional)
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar profissional." });
    }
}

export async function deleteProfissional(req: express.Request, res: express.Response) {
    const {id} = req.params
    await profissionalService.deleteProfissional(Number(id))
    res.status(204).send()
}
