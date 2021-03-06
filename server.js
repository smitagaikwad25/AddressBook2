const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: true }))

var cors = require("cors");
app.use(cors());


app.use(bodyParser.json())

app.use(expressValidator())


app.get('/', (req, res) => {
    res.json({ "message": "welcome to node application" });
});

require('./main/routes/addressbook.routes')(app);

var server = app.listen(3001, () => {
    console.log("server is listenling on port 3001");
});

module.exports = server