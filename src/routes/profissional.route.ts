import { Router } from "express"
import * as profissionalController from "../controllers/profissional.controller.js"

const router = Router()
router.post("/profissionais", profissionalController.createProfissional)
router.get("/profissionais", profissionalController.getAllProfissionais)
router.get("/profissionais/:id", profissionalController.getProfissionalById)
router.put("/profissionais/:id", profissionalController.updateProfissional)
router.delete("/profissionais/:id", profissionalController.deleteProfissional)

export default router