import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const categoriesModel = db.define('categories', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: { type: DataTypes.STRING },
})

export default categoriesModel
