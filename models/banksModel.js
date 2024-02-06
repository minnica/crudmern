import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const banksModel = db.define('banks', {
  bank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bank_name: { type: DataTypes.STRING },
})

export default banksModel
