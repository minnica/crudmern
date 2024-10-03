import express from "express"
import cors from "cors"
// importamos la conexión a la base de datos
import db from "./database/db.js"
// importamos el enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/estadoCuenta', blogRoutes)

try {
  await db.authenticate()
  console.log('Conexión exitosa a la DB');
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

/* app.get('/', (req, res) => {
  res.send('Hola Mundo')
}) */

app.listen(8000, () => {
  console.log('Server is running in http://localhost:8000/');
}) 