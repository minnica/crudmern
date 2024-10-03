// importamos la conexión de la BD
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('estado_cuenta', {
  categoria: { type: DataTypes.STRING },
  movimiento: { type: DataTypes.STRING },
  monto: { type: DataTypes.DECIMAL },
  msi: { type: DataTypes.INTEGER },
  parcialidad: { type: DataTypes.DECIMAL },
  mes_restante: { type: DataTypes.INTEGER },
  pago: { type: DataTypes.DECIMAL },
  pago_restante: { type: DataTypes.DECIMAL },
  persona: { type: DataTypes.STRING }
})

export default BlogModel