import * as profissionalRepository from '../repositories/profissional.repository.js'
export interface Profissional {
    nome: string;
    especialidade: string;
    registroConselho: string;
}

export async function createProfissional(data: Profissional) {
    return await profissionalRepository.create(data)
}

export async function getAllProfissionais() {
    return await profissionalRepository.findAll()
}

export async function getProfissionalById(id: number) {
    return await profissionalRepository.findById(id)
}
export async function updateProfissional(id: number, data: Partial<Profissional>) {
    return await profissionalRepository.update(id, data) 
}

export async function deleteProfissional(id: number) {
    return await profissionalRepository.remove(id)
}
