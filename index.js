const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knex = require('./db/knex');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});


require('dotenv').config();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/student', function(req, res) {

    knex('students')
        .select()
        .then(function(result) {
            res.json(result);
        });
})

app.get('/student/:id', function(req, res) {

    knex('students')
        .select()
        .where('id', req.params.id)
        .then(function(result) {
            res.json(result)
        })

})

app.post('/student', function(req, res) {

    knex('students')
        .insert({
            name: req.body.name,
            email: req.body.email
        })
        .then(function(result) {
            res.json(result)
        })
})
