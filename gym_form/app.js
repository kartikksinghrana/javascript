const express = require("express");
const path =require("path");
const fs= require("fs");

const app =express();
const port = 80;

// EXPRESS SPECIFIC  STUFF

//for serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded())
//-----------------------------------------------//

// PUG SPECIFIC  STUFF

//set the template engine
app.set('view engine','pug')
//set the view or template directory
app.set('views',path.join(__dirname,'views'))

//-------------------------------------------------//

//pug demo endpoints
// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo',{
//         title:'hey kartik',
//         message:"hello this is setting context in template"
//     })
// })
app.get('/',(req,res)=>{
    const con = "This is the best content"
    res.status(200).render('index.pug');
})
app.post('/',(req,res)=>{
    Name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    laconic=req.body.laconic;
    let outputtowrite = `The name of the client is ${Name} ,${age} years old ,${gender} ,from ${address}. More about him ${laconic}.`
    fs.writeFileSync('output.txt', outputtowrite)

    const params={'message':'your response has been submitted sucessfully'}
    res.status(200).render('index.pug');
})

app.listen(port,()=>{
    console.log(`this application started sucessfully on port ${port}`)
})
