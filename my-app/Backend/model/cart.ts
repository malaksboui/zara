import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/data';

class Cart extends Model {
  user_id!: number;
  products_id!: number;
}

Cart.init(
  {
  
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'cart',
    tableName: 'cart',
  }
);

export default Cart;