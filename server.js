console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs=require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("Error:", err);
    } else {
        user = JSON.parse(data)
    }

});

// 1 expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar: KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session

// 3 Beckend server side rendering frontend yasash traditionsal yasash: VIEW
app.set("views", "views");
app.set("view engine", "ejs");   // biz ejs orqali frontend yasaymiz
 
//4 Routing codes

app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({test: "success"})
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });  
});

app.get("/", function (req, res) {
    res.render("xarid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully in PORT: ${PORT}`)
});
