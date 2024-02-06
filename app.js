import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import routes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)

try {
  await db.authenticate()
  console.log('Database connection successful')
} catch (error) {
  console.log(`Connection error: ${error}`)
}

app.listen(8000, () => {
  console.log('Server is up in http://localhost:8000/')
})
