const http = require('node:http')
const fs = require('fs');


const app = http.createServer((req, res) => {
    let date = (new Date()).toDateString();
    fs.appendFileSync('./files/log.txt',`Request : ${date} & Req : ${req.url}` );
    // console.log(req.url);
    
    //trying to send a HTML file
    const html = fs.readFileSync('./files/index.html', "utf-8");
    // console.log(html);
    res.end(`${html}`);
});

app.listen(5000, ()=>{
    console.log("listening on port 5000");
});

