module.exports = (app, col) => {
    app.post("/", (req, res) => {
        console.log('/');
        // const note = { text: req.body.text, title: req.body.title };
        const note=req.email;
        // console.log(email)
        console.log(req);
            col.collection("answer").insertOne(note, function (err, result) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            col.close();
        });
        res.status(200).send('Bon Jour');
    });

    app.get("/api", (req, res) => {
        col.collection('Questions').findOne({test_id: 1}, function(err, document) {
            console.log(document)
            res.send(document);
          });
    });
 }