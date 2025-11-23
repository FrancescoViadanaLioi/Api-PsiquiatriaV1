import type express from "express"
import * as pacienteService from "../services/paciente.service.js"

export async function createPaciente(req: express.Request, res: express.Response) {
    const { nome, idade, telefone, convenio } = req.body
    const paciente = await pacienteService.createPaciente({ nome, idade, telefone, convenio })
    res.status(201).json(paciente)
}

export async function getAllPacientes(req: express.Request, res: express.Response) {
    const pacientes = await pacienteService.getAllPacientes()
    res.status(200).json(pacientes)
    return res.status(404).json({ message: "Pacientes não encontrados" })
}

export async function getPacienteById(req: express.Request, res: express.Response) {
    const { id } = req.params
    const paciente = await pacienteService.getPacienteById(Number(id))
    if (paciente)
    {
        res.status(200).json(paciente)
    }
    else
    {
        res.status(404).json({message: "Paciente não encontrado"})
    }
}
export async function updatePaciente(req: express.Request, res: express.Response) {
    const {id} = req.params
    const {nome, telefone, convenio} = req.body
    const paciente = await pacienteService.updatePaciente(Number(id), {nome, telefone, convenio})
    res.status(200).json(paciente)
}

export async function deletePaciente(req: express.Request, res: express.Response) {
    const {id} = req.params
    await pacienteService.deletePaciente(Number(id))
    res.status(204).send()
}
