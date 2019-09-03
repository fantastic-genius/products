import express from 'express';
import productRouter from './products';

const router = express.Router();

router.use('/products', productRouter);

export default router;
