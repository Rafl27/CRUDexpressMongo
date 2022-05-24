

//import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
require('dotenv/config');

app.use(bodyParser.json());
//this way, everytime there's any type of request, it will be converted to json
//import routes
const postsRoute = require('./routes/posts')

//middleware
app.use('/posts', postsRoute);

//routes
app.get('/', (req,res) => {
    res.send('We are on the home page now');
})


//connect to DB
//here i'm using the .env file and the dotenv packge to hide my mongoose link
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to the DB'));

app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));