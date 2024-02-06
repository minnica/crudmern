import { Sequelize } from 'sequelize'

const db = new Sequelize(
  'deaserom_relationalApp',
  'deaserom_minnica',
  '@u0[BplI8=3t',
  {
    host: '72.249.57.140',
    dialect: 'mysql',
  }
)

export default db
