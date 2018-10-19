
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
let dogs = []

app.get('/',(req, res) => {
    res.status(200).json({dogs: dogs});
});
app.get('/:index', (req, res) =>{
    res.status(200).json({ dog: dogs[req.params.index] });
});

app.post('/', (req, res) => {
    dogs.push(req.body.dogName);
    res.status(200).json({ greeting: `Added ${req.body.dogName}!` });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});