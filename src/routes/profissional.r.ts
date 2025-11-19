
import { Router } from 'express';
import { 
    createProfissional, 
    getAllProfissionais, 
    getProfissionalById, 
    updateProfissional, 
    deleteProfissional 
} from '../controllers/profissional.controller.js'; 

const router = Router();

router.post('/', createProfissional);

router.get('/', getAllProfissionais);

router.get('/:id', getProfissionalById);

router.put('/:id', updateProfissional);

router.delete('/:id', deleteProfissional);

export default router;