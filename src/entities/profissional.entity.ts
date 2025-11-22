import { PrismaClient } from "@prisma/client"
import Profissional from "../entities/profissional.entity.js" 
  
const prisma = new PrismaClient()

export default prisma.profissional
