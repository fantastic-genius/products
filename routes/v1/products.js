import express from 'express';
import addProduct from '../../controller/product'

const router = express.Router();

router.post('/', addProduct);

export default router;
