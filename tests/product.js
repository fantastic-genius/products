import app from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing Products', () => {
    describe('Create product', () => {
        it('should succesfully create a product', async () => {
            const res = await chai
                .request(app)
                .post('/api/v1/products')
                .send({
                    name: 'Adidas T-shirt',
                    description: 'This is a white shirt',
                });
            expect(res.status).to.equals(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.all.keys(['id', 'name', 'description', 'created_at']);
            expect(res.body.name).to.equals('Adidas T-shirt');
        });
    })
})

