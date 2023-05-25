import { DataTypes  } from 'sequelize'
import sequelizeConnection from '../database/data'



console.log(sequelizeConnection)
const Product = sequelizeConnection.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  category: DataTypes.STRING,
  description: DataTypes.STRING,
});


export default Product;