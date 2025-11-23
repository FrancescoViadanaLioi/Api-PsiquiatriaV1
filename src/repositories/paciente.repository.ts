import Paciente from "../entities/paciente.entity.js"

export async function create(data: { nome: string; idade: number; telefone: string; convenio: string}){
    return Paciente.create({data})
}

export async function findAll(){
    return Paciente.findMany()
}

export async function findById(id: number){
    return Paciente.findUnique({where: {id}})
}

export async function update(id: number, data: {nome?: string; telefone?: string; convenio?: string}){
    return Paciente.update({where: {id}, data})
}

export async function remove(id: number){
    return Paciente.delete({where: {id}})
}