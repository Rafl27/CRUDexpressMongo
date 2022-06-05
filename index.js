const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
app.use(express.static('Front/'));
app.use(express.json());
require('dotenv/config');
app.use(bodyParser.json());
const rotaVillage = require('./routes/Village')
app.use('/village', rotaVillage);
app.get('/html', (req,res) => {
    res.sendFile("index.html");
})
const villageConnection = "mongodb+srv://village:vilarejo@cluster0.ztwp6.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(villageConnection, () => console.log('connected to the DB'));
app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));