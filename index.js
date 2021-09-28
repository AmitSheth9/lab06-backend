const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { cafeDrinks } = require('./data.js');


app.get('/cafedrinks', (req, res) => {
    res.json ({cafeDrinks})
})

app.get('/cafedrinks/:name', (req, res) => {
    const matchingDrinks = cafeDrinks.find(drink => drink.name === req.params.name);
    res.json ({matchingDrinks})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})