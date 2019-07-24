import pool from '../config'

pool.on('connect', () => {
    console.log('Connected to database')
})


const createProductTable = () => {
    const query = `CREATE TABLE products (
        id serial PRIMARY KEY,
        name VARCHAR NOT NULL,
        description VARCHAR NOT NULL,
        created_at TIMESTAMP NOT NULL
     )`

    pool.query(query)
    .then(res => {
        console.log('Created Product Table successfully')
        pool.end();
    }).catch(err => {
        console.log('Error>>>', err);
        pool.end();
    })

}

export default createProductTable;
require('make-runnable');
