const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
app.use(bodyParser.json()); 
app.use(express.static('public')); //Serve static files from the public
const port = 5000;

let usersData = fs.readFileSync("./files/users.json");
usersData=JSON.parse(usersData);
let userPage = fs.readFileSync("./public/html/user.html", "utf8") ;



app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/html/index.html' );
})

app.get('/login', (req, res)=>{
    let userName= req.query.username;
    let password= req.query.password;

    let userIndex;
    usersData.forEach((user, index)=>{
        if(user.username === userName){
            userIndex = index;
            return;
        }
    })

    let userdata = usersData[userIndex];
    console.log(userdata);
    let  pageHtml = userPage.replace('#--username--#', userdata.username);
    res.header('Content-Type','text/html');
    res.send(pageHtml);
})

app.post('/signup', (req, res)=>{
    
    const { username, password, message } = req.body;
    usersData.push({ username, password, message });
    fs.writeFile('./files/users.json', JSON.stringify(usersData), ()=>{
        console.log("done hai bhai")
    });
    res.sendFile(__dirname + '/public/html/index.html' );
    res.status(200).json({ message: "Signup successful" });

})


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})