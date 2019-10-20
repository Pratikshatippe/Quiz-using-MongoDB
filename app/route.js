module.exports = (app, col) => {
    app.post("/api", (req, res) => {
        console.log('/api');
        // const store = { user: req.body.user };
        console.log(req.user);
        const store=req.user
            col.collection('Username').insertOne(store, function (err, result) {
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