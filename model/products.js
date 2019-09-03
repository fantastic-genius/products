import pool from '../config';

const createProduct = async (values) => {
    const query = `INSERT INTO 
    products(name, description, created_at)
    values($1, $2, $3)
    returning *`   

    try {
        const { rows } = await pool.query(query, values);
        return rows;
        
    } catch (err) {
        console.log(err);
    }
}


export default createProduct;
