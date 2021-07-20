const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser");
var mongoose = require("mongoose");

const app =express();

// making database with name contactDance
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser:true});
const port =80;

// making mongoose schema 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    concern: String,

  });

const Contact = mongoose.model('Contact', contactSchema);


app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'template'));

// END points
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
})


// listening port  start the server
app.listen(port,()=>{
    console.log(`The application is running on port ${port} at http://127.0.0.1`)
})