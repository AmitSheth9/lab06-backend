const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { cafeDrinks } = require('./data.js');


app.get('/', (req, res) => {
    res.json ({cafeDrinks})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})