console.log("Web serverni boshlash");
const express = require("express");
const app = express();

// 1 expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar: KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const http = require("http");
// 2: Session

// 3 Beckend server side rendering frontend yasash traditionsal yasash: VIEW
app.set("view", "views");
app.set("view engine", "ejs");   // biz ejs orqali frontend yasaymiz
 
//4 Routing codes
app.get("/", function(req, res){
    res.end(`<h1>hello world</h1>`);
});

app.get("/", function(req, res){
    res.end(`<h1>siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully in PORT: ${PORT}`)
});
