// importamos la conexión de la BD
import db from "../database/db";
// importamos Sequelize
import { DataType, DataTypes, Sequelize } from "sequelize";

const BlogModel = db.define('blogs', {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING }
})

export default BlogModel