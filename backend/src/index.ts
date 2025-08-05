import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import quizzesRouter from './routes/quizzes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/quizzes', quizzesRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
