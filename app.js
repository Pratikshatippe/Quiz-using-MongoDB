
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Pratiksha:3K24A5lbaC6mP3ZR@cluster0-2g3xi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
client.connect(err => {
 const col = client.db("Quiz").collection("Questions");
 console.log("connect");
//  let ins={16 : 'Who has been appointed to Board of Dierctions in Paytm Payments Bank (PPB)?'};
col.find({"q1":1}, function(err, result) {
   if (err) throw err;
   console.log(result.question);
   client.close();
 });
 
//  let show = collection.findOne();
//  collection.findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
//   console.log(show);
// perform actions on the collection object
 client.close();
});