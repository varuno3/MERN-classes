const express = require('express');
const path = require('path');

const  app = express();

const port = 5000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/files/html/index.html' );
})   
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/files/html/about.html' );
})   

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})