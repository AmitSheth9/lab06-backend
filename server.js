const { app } = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('app routes', () => {
    it('cafedrinks endpoint returns all cafedrinks', async() => {
        const myData = [
            {
                name: 'Caffe_Latte',
                price: 3.35,
                calories: 100,
                hotcold: true,
        
            },
            {
                name: 'Caffe_Mocha',
                price: 3.95,
                calories: 200,
                hotcold: true,
            },
            {
                name: 'Caffe_Misto',
                price: 2.85,
                calories: 50,
                hotcold: false,
            },
            {
                name: 'Cappucino',
                price: 3.35,
                calories: 70,
                hotcold: false
            },
            {
                name: "Chai_Tea_Latte",
                price: 3.85,
                calories: 120,
                hotcold: false
            }
        ];
        const response = await request.get('/cafedrinks');
        expect(response.body).toEqual(myData);
    })
})