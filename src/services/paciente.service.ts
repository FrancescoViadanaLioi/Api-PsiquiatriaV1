import * as pacienteRepository from '../repositories/paciente.repository.js'

export async function createPaciente(data: { nome: string; idade: number; telefone: string; convenio: string }){
    return await pacienteRepository.create(data)
}

export async function getAllPacientes() {
    return await pacienteRepository.findAll()
}

export async function getPacienteById(id: number){
    return await pacienteRepository.findById(id)
}

export async function updatePaciente(id: number, data: {nome?: string; telefone?: string; convenio?: string}){
    return await pacienteRepository.update(id, data) 
}

export async function deletePaciente(id: number){
    return await pacienteRepository.remove(id)
}