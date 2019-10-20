module.exports = (app, col) => {
    app.post("/api", (req, res) => {
        // console.log('/api');
        // const note = { email: req.body.email };
        console.log(req.body);
        const note=req.body.email;
        // console.log(email)
        // console.log(req);
            col.collection('answer').insertOne(note, function (err, result) {
                console.log("successful");
            if (err) throw err;
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