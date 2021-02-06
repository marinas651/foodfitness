const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const namerniceSchema = new Schema({

    ime_projzvoda: String,
    kalorije: String,
    proteini: String,
    ugljeni_hidrati: String,
    masti: String,
},{
    collection:'namirnice'
});

module.exports = mongoose.model("namirnice",namerniceSchema,"namirnice");
