const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port=3000;

const home =fs.readFileSync('index.html');
const contact =fs.readFileSync('contact.html');
const blogpost =fs.readFileSync('blogpost.html');
const search =fs.readFileSync('search.html');

const server =http.createServer((req,res)=>{
    url=req.url
    console.log(req.url)

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    // res.end(home)
    if(url=='/'){
        res.end(home);
    }

    else if(url=='/blogTemplate/index.html'){
        res.end(home);
    }
    else if(url=='/blogTemplate/contact.html'){
        res.end(contact);
    }
    else if(url=='/blogpost.html'){
        res.end(blogpost);
    }
    else if(url=='/blogTemplate/search.html?query='){
        res.end(search);
    }
    else{
        res.statusCode=404;
        res.end("<h2>404 not found</h2>")
    }
});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`)
});