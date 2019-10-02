module.exports = (app, col) => {
    app.post("/", (req, res) => {
    //     const note = { text: req.body.text, title: req.body.title };
    //     db.collection('Questions').insert(note, (err, result) => {
    //         if (err)
    //             console.log(err + " this error has occured");
    //         else
    //             console.log(result);

    //     });
        res.status(200).send('Bon Jour');
        
    });

    app.get("/api", (req, res) => {
        col.find({}).toArray(function (err, result) {
            if (err)
                console.log(err + " this error has occured");
            else {
                 res.status(200).send(result);
                // res.send(result.question);
               console.log(result);
            }
        });     
    });
}