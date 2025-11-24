import Profissional from "../entities/profissional.entity.js"
import type { Profissional as ProfissionalType } from '../services/profissional.service.js'
export async function create(data: ProfissionalType){
    return await Profissional.create({ data }) 
}

export async function findAll(){
    return await Profissional.findMany()
}
export async function findById(id: number){
    return await Profissional.findUnique({ where: { id } })
}
export async function update(id: number, data: Partial<ProfissionalType>){
    return await Profissional.update({
        where: { id },
        data: data,
    })
}
export async function remove(id: number){
    return await Profissional.delete({ where: { id } })
}
