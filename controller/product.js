import createProduct from '../model/products';

const addProduct = async (req, res) => {
    const { name, description } = req.body
    const created_at = new Date();
    const values = [name, description, created_at]

    try {
        const product = await createProduct(values);

        return res.status(201).send(product[0]);
    } catch (error) {
        return res.status(500).send({
            error: 'Something Went Wrong'
        });
    }
    
}

export default addProduct;
