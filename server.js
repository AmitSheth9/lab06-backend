require('dotenv').config();

const express = require('express');
const app = express();
const { cafeDrinks } = require('./data.js');
const cors = require('cors');

app.use(cors());

app.get('/cafedrinks', (req, res) => {
    res.json ({cafeDrinks})
})

app.get('/cafedrinks/:name', (req, res) => {
    const matchingDrinks = cafeDrinks.find(drink => drink.name === req.params.name);
    res.json ({matchingDrinks})
})

module.exports = { app };