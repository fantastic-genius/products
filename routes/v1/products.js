import express from 'express';
import addProduct from '../../controller/product'
import { addProductMiddleware } from '../../middleware/products';

const router = express.Router();

router.post('/', addProductMiddleware, addProduct);

export default router;
