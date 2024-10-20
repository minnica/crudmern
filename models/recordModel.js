import db from "../database/db.js";
import { DataTypes } from "sequelize";

const recordModel = db.define('daily_purchases', {
  id_daily_purchases: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_payment_type: { type: DataTypes.INTEGER },
  id_person: { type: DataTypes.INTEGER },
  id_category: { type: DataTypes.INTEGER },
  transactions: { type: DataTypes.STRING },
  amount: { type: DataTypes.DECIMAL },
  no_interest_months: { type: DataTypes.INTEGER },
  current_month: { type: DataTypes.INTEGER },
  remaining_month: { type: DataTypes.INTEGER },
  payment: { type: DataTypes.DECIMAL },
  remaining_payment: { type: DataTypes.DECIMAL },
  paid: { type: DataTypes.BOOLEAN }
})

export default recordModel