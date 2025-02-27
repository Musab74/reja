console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();

// Mongo connection
const db = require ("./server").db();


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
    res.render("reja");
});

module.exports = app; 
