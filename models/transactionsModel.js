import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const transactionsModel = db.define('transactions', {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bank_id: { type: DataTypes.INTEGER },
  category_id: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.DECIMAL },
  done: { type: DataTypes.BOOLEAN },
  date: { type: DataTypes.DATE },
  description: { type: DataTypes.STRING },
  attached: { type: DataTypes.STRING },
})

export default transactionsModel
