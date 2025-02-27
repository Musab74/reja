// const http = require("http");
// const { MongoClient } = require("mongodb");


// let db;
// const connectionString = 
// "mongodb+srv://uumm8177:7NhkAkTUPRReBzI4@cluster0.0gzpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// MongoClient.connect(
//     connectionString, 
//     (err, client) => {
//     if(err) console.log("ERROR on connection MongoDB");
//     else {
//         console.log("MongoDb connection succeed");
//         console.log(client);
        
//         module.exports = client;
//         const app = require("./app");
//         const server = http.createServer(app);
//         let PORT = 3000;
//         server.listen(PORT, function(){
//         console.log(
//             `The server is successfully running on port:, ${PORT}, http://localhost:${PORT} `);

//     }
//     );
//     }
//     } 
// );

const http = require("http");
const { MongoClient } = require("mongodb"); //  MongoClient ni import qqilish

let db;
const connectionString = "mongodb+srv://uumm8177:7NhkAkTUPRReBzI4@cluster0.0gzpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(connectionString, (err, client) => {
    if (err) {
        console.log("ERROR on connection MongoDB:", err);
    } else {
        console.log("MongoDb connection succeed");
        db = client.db(); // database olish
        module.exports = db; // chiqarish
        
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`The server is successfully running on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
}); 

console.log("Web serverni boshlash");
