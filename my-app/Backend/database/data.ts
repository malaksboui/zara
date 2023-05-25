// import Product from "../model/product";
// import User from '../model/user';
// import Cart from '../model/cart';

// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('Zara', 'root', 'root', {
//   dialect: 'mysql',
//   host: 'localhost',
//   logging: true,
// });

// async function connectDatabase() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to the database has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connectDatabase()
//   .catch(error => console.error('Error during database connection:', error));

// sequelize
//   .sync()
//   .then(() => {
//     console.log('Database synchronized successfully.');
//   })
//   .catch(error => {
//     console.error('Error synchronizing the database:', error);
//   });



// Initialize the models
// const models = [Product, User, Cart];
// models.forEach((model) => model.initialize(sequelize));

// Create the associations between models
// Object.values(sequelize.models).forEach((model: any) => {
//   if (model.associate) {
//     model.associate(sequelize.models);
//   }
// });

// export { sequelize };

// Export the models individually if needed
// export { Product, User, Cart };
import { Sequelize } from 'sequelize';
import Product from '../model/product';
import data from "./Data.json"



const sequelizeConnection = new Sequelize(
  process.env.database as string,
  process.env.user as string,
  process.env.password as string,
  {
    dialect: "mysql",
    host: process.env.host as string,
  }
  
);

export default sequelizeConnection;