var express = require('express');
var router = express.Router();

const config = require('config');
const jwt = require("jsonwebtoken");
const namirnice = require("../models/namirnice");
const monguse = require("mongoose");
const urlParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

router.use(urlParser.urlencoded({
    extended: true
}));

const uri = config.get("food&fitnes.dbConfig").dbAddress;
const client = new MongoClient(uri, { useNewUrlParser: true });




router.post('/dodaj', function(req, res, next) {



    client.connect(err => {

        const namirniceCollection = client.db("food&fitnes").collection("namirnice");
        let upisi = {
            ime_projzvoda: req.body.imeP,
            kalorije: req.body.cal,
            proteini: req.body.prot,
            ugljeni_hidrati: req.body.uHidrati,
            masti: req.body.masti
        };


        let dodaj = new namirnice(upisi);
        namirniceCollection.insertOne(dodaj, (err, un) => {
            if (err) {
                console.log(err);

            } else {
                console.log(un);

            }
        });


    });
    res.redirect('/index');

});

router.get('/', function(req, res, next) {



    async function run() {
        try {

            await client.connect();

            const namirniceCollection = client.db("food&fitnes").collection("namirnice");



             await namirniceCollection.find({}).toArray(function(err, result) {
                if (err) throw err;

                res.render('namirnice',{namirnice:result});

            });


            // await client.close();

        } finally {

        }
    }

    run().catch(console.dir);

});




module.exports = router;
