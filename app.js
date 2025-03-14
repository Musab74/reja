console.log("Web serverni boshlash");
const express = require("express");
const mongodb = require("mongodb");
//app
const app = express();

const db = require("./server").db();


// 1 expressga kirib kelayotgan ma'lumotlarga bog'liq kodlar: KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session

// 3 Beckend server side rendering frontend yasash traditionsal yasash: VIEW
app.set("views", "./views");
app.set("view engine", "ejs");   // biz ejs orqali frontend yasaymiz

//4 Routing codes

app.post("/create-item", (req, res) => {
    console.log("user entered/create item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});
//delete
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
})

//edit-button
// app.post("/edit-item", (res, req) => {
//     const data = req.body;
//     console.log(data);
//     res.end("done");

// })

app.post("/edit-item",  (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)}, 
        {$set: {reja: data.new_input}}, 
        function(err, data) {
         res.json({state: "success"});
    }  
    );
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
        res.json({state: "hamma rejalar o'chirildi"});
        });
    }
})


app.get("/", function (req, res) {
    console.log("user entered");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");

            } else {

                res.render("reja", { items: data });

            }
        });

});

module.exports = app; 
