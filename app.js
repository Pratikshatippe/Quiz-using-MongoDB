const express =require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Pratiksha:3K24A5lbaC6mP3ZR@cluster0-2g3xi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 8100;
client.connect(err => {
const col = client.db("Quiz").collection('Questions');
 console.log("connect");
 if (err)
 return console.log(err);
require('./app/routes')(app, col);
app.listen(port, () => {
 console.log("Port 8100 running on browser...");
});
 client.close();
});


