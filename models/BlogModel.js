// importamos la conexión de la BD
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('ingresos', {
  ingreso: { type: DataTypes.FLOAT },
  realizado: { type: DataTypes.STRING },
  fecha: { type: DataTypes.DATE },
  descripcion: { type: DataTypes.STRING },
  categoria: { type: DataTypes.STRING },
  cuenta: { type: DataTypes.STRING },
  anexo: { type: DataTypes.STRING }
})

export default BlogModel