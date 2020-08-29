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

//GET
app.get ('/api/getBook', (req,res) => {
    let id = req.query.id;

    Book.findById (id, (err,doc) => {
        if (err) return res.status(400).send(err);
        res.send (doc);
    })
})

app.get ('/api/books', (req,res) => {

    let skip = parseInt (req.query.skip);
    let limit = parseInt (req.query.limit);
    let order = req.query.order;

    Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=> {
        if (err) return res.status(400).send(err)
        res.send(doc)
    })
})

//POST
app.post ('/api/book', (req,res) => {
    const book = new Book (req.body)

    book.save((err,doc) => {
        if (err) return res.status (400).send(err);
        res.status (200).json({
            post: true,
            bookID: doc._id
        })
    })
})

//UPDATE
app.post ('/api/book_update', (req,res) => {
    Book.findByIdAndUpdate (req.body._id, req.body,{new:true}, (err,doc) => {
        if (err) return res.status(400).send(err)
        res.json ({
            success: true,
            doc
        })
    })
})

//DELETE
app.delete ('/api/delete_book', (req,res) => {
    let id = req.query.id;

    Book.findByIdAndRemove (id, (err,doc) => {
        if (err) return res.status(400).send(err)
        res.json(true)
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log ('Server is running on part', port);
})