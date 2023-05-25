import express, { Router } from 'express';
import cartController from '../controller/cart';

const  routeCart : Router = express.Router();

routeCart.get('/cart', cartController.allCarts);
routeCart.get('/cart/:id', cartController.cartForUser);
routeCart.post('/cart', cartController.toCart);
routeCart.delete('/cart/:id', cartController.remove);
routeCart.delete('/userCart/:id', cartController.removeCartOfUser);

export default routeCart;