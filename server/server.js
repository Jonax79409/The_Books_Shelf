const express = require ('express');
const bodyParser = require ('body-parser');
const cookiesParser = require ('cookie-parser');
const mongoose = require ('mongoose');
const app = express();
const config = require('./config/config.js').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true});

const { User } = require ('./models/user.js');
const { Book } = require ('./models/book.js')

app.use(bodyParser.json());
app.use(cookiesParser())

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log ('Server is running on part', port);
})