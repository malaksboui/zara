import Sequelize, { DataTypes } from "sequelize";
import sequelizeConnexion from "../database/data";

interface UserModel {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface UserInstance extends UserModel, Sequelize.Model<UserModel, any> {}

console.log("sequelize instances",sequelizeConnexion)
const User = sequelizeConnexion.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default User;