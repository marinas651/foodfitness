const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const dnevnikSchema = new Schema({

    ime_obroka: String,
    kalorije: String,
    vrsta_obroka:String,
    datum: Date

},{
    collection:'dnevnik'
});

module.exports = mongoose.model("dnevnik",dnevnikSchema,"dnevnik");
