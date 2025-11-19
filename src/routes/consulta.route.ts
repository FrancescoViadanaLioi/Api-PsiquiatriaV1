import { Router } from "express"
import * as consultaController from "../controllers/consulta.controller.js"

const router = Router()
router.post("/consultas", consultaController.createConsulta)
router.get("/consultas", consultaController.getAllConsultas)
router.get("/consultas/:id", consultaController.getConsultaById)
router.put("/consultas/:id", consultaController.updateConsulta)
router.delete("/consultas/:id", consultaController.deleteConsulta)

export default router