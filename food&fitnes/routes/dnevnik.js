var express = require('express');
var router = express.Router();

const config = require('config');
const jwt = require("jsonwebtoken");
const dnevnik = require("../models/dnevnik");
const monguse = require("mongoose");
const urlParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */


router.use(urlParser.urlencoded({
    extended: true
}));

const uri = config.get("food&fitnes.dbConfig").dbAddress;
const client = new MongoClient(uri, { useNewUrlParser: true });




router.get('/obrisi/:id', (req, res) => {
    let brisanje = req.params.id;
    const dnevnikCollection = client.db("food&fitnes").collection("dnevnik");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        var myquery ={"_id": new ObjectID(brisanje)};
        dnevnikCollection.deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            res.redirect("/index");

        });
    });


});


router.get('/', function(req, res, next) {




    async function run() {
        try {

            await client.connect();

            const dnevnikCollection = client.db("food&fitnes").collection("dnevnik");



            await dnevnikCollection.find({
                "datum":
                    {
                        $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))
                    }
            }).sort({ "datum": -1 }).toArray(function(err, result) {
                if (err) throw err;

                var ned =vrati(result);
                console.log(ned);

                res.render('dnevnik',{nedelja:ned });
            });




        } finally {

        }
    }

    run().catch(console.dir);


});




function vrati(rez){

    var res=[];
    var check=true;

    for(var i =0; i <rez.length; i++){
        check=true;

        for(var j=0; j<=res.length; j++){

            if(String(rez[i].datum)==(String(res[j]))){

                check=false;
                console.log(check);
                break;
            }


        }

        if(check==false){


        }else{

            res.push(rez[i].datum);
        }

    }

    for(var i =0; i <res.length; i++){
        res[i].obroci=[];

    for(var j=0; j < rez.length; j++){


            if(String(rez[j].datum)==(String(res[i]))){
                res[i].obroci.push(rez[j]);

            }
        }
    }

return res;
}

router.post('/dodaj', function(req, res, next) {


    console.log(req.body);
    client.connect(err => {

        const dnevnikCollection = client.db("food&fitnes").collection("dnevnik");
        let upisi = {
            ime_obroka: req.body.imeO,
            kalorije: req.body.cal,
            vrsta_obroka:req.body.vrsta,
          datum:req.body.datum
        };


        let dodaj = new dnevnik(upisi);
        dnevnikCollection.insertOne(dodaj, (err, un) => {
            if (err) {
                console.log(err);

            } else {
                console.log(un);

            }
        });


    });
    res.redirect('/index');

});
module.exports = router;
