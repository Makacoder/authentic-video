const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');

const app = express();

const dbURI = 'mongodb+srv://makamaka:test12345@cluster0.txmkv.mongodb.net/authenticate'
mongoose.connect (dbURI, {userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then((result) => app.listen(2057))
.catch((err) => console.log(err));

app.use(authRoute);