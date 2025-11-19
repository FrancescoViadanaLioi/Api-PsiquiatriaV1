import { Router } from "express"
import * as pacienteController from "../controllers/paciente.controller.js"

const router = Router()
router.post("/pacientes", pacienteController.createPaciente)
router.get("/pacientes", pacienteController.getAllPacientes)
router.get("/pacientes/:id", pacienteController.getPacienteById)
router.put("/pacientes/:id", pacienteController.updatePaciente)
router.delete("/pacientes/:id", pacienteController.deletePaciente)

export default router