

const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = 
"mongodb+srv://romatrade17:S11EGjofm8zb2sH8@musabcluster.ba7dm.mongodb.net/?retryWrites=true&w=majority&appName=MusabCluster";
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