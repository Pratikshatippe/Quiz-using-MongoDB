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
        console.log("hello");
        res.send('hello');
        col.findOne({test_id: 1}, function(err, document) {
            console.log(document.q0);
          });

    //    const val = col.findOne({},{"q1.question":1}); 
    //        res.send(val);
    //        console.log(val);
         
    });
}