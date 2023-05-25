

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import userRoute from "./route/user";
import routerP from "./route/products"
import cartRoute from "./route/cart"
import Product from "./model/product";
import data from "./database/Data.json"

import sequelizeConnexion from "../Backend/database/data";
import * as dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/auth", userRoute);
app.use("/products", routerP)
app.use("/cart", cartRoute)

sequelizeConnexion.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

sequelizeConnexion.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).then(() => {
  async function insertDummyData() {
    try {
      // Iterate over the data array
      for (const product of data) {
        const { name, image, price, quantity, gender, category, description } = product;
  
        // Check if a similar entry already exists
        const existingProduct = await Product.findOne({
          where: {
            name,
            gender,
            category,
          },
        });
  
        if (!existingProduct) {
          // No similar entry found, proceed with insertion
          await Product.create({
            name,
            image,
            price,
            quantity,
            gender,
            category,
            description,
          });
          console.log('Product inserted successfully');
        } else {
          console.log('Similar entry already exists');
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  
  // Call the function to insert dummy data
  insertDummyData();
})