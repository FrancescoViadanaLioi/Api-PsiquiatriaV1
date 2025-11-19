import "dotenv/config"
import express from 'express'
import consultaRoutes from './routes/consulta.route.js'
import pacienteRoutes from './routes/paciente.route.js'
import profissionalRoutes from './routes/profissional.route.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(consultaRoutes)
app.use(pacienteRoutes)
app.use(profissionalRoutes)

app.listen(PORT,()=>{
    console.log('Server rodando http://localhost:'+PORT)
})