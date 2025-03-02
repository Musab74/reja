
const http = require("http");
const mongodb  = require("mongodb"); // Import MongoClient

const connectionString = "mongodb+srv://rmcbaxt:X9LX1xsLuhPXeWOC@cluster0.sy3ig.mongodb.net/reja?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(connectionString, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    },
 (err, client,) => {
    if (err) {
        console.log("ERROR on connection MongoDB:", err);
    } else {
        console.log("MongoDb connection succeed");
        module.exports = client; // Export the db object
        
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 3000;        server.listen(PORT, () => {
            console.log(`The server is successfully running on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
}); 

