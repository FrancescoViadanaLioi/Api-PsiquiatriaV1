import * as profissionalRepository from "../repositories/profissional.entity.js"
import type { ProfissionalBody } from "../controllers/profissional.c.js";
import type Profissional from '../entities/profissional.entity.js';


export async function createProfissional(data: ProfissionalBody){

}
export async function getAllProfissionais() {

}

export async function getProfissionalById(id: number): Promise<Profissional | null>{}

export async function updateProfissional(id: number, data: Partial<ProfissionalBody>){

}

export async function deleteProfissional(id: number){
    
}
