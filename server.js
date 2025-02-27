

const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = 
"mongodb+srv://mypython25:zcMaVEXKA72lSUqO@mit.omrzr.mongodb.net/?retryWrites=true&w=majority&appName=MIT";
mongodb.connect(
    connectionString, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDb connection succeed");
        console.log(client);
        
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 7007;
        server.listen(PORT, function(){
        console.log(
            `The server is successfully running on port:, ${PORT}, http://localhost:${PORT} `);

    }
    );
    }
    } 
    );