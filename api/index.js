const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const Router = require('./routes/event');

dotenv.config();

const app = express();

mongoose.connect(process.env.DB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', Router);

app.listen(process.env.PORT, () => {
    console.log("server started at port " + process.env.PORT);
})