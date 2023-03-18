import express from 'express';
import productRoute from './router/product.route';
import userRoute from './router/user.route';
import orderRoute from './router/order.route';

const app = express();

// push!!!

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
