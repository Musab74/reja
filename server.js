
const http = require("http");
const mongodb  = require("mongodb"); // Import MongoClient

let db;
const connectionString = "mongodb+srv://uumm8177:0Z6wHT3bPVVvoKrJ@cluster0.0gzpz.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(connectionString, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    },
 (err, client) => {
    if (err) {
        console.log("ERROR on connection MongoDB:", err);
    } else {
        console.log("MongoDb connection succeed");
        module.exports = client; // Export the db object
        
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`The server is successfully running on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
}); 

