import { Sequelize } from "sequelize";

const db = new Sequelize('deaserom_app', 'deaserom_minnica', '@u0[BplI8=3t', {
  host: '67.227.236.141',
  dialect: 'mysql'
})

export default db