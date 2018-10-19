
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({dog:'pepper'});
});


app.get('/', (req, res) => {
    res.status(200).json({dog:`pepper $(req.body.username)!`});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});