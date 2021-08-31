const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

mongoose.pluralize(null)
const dotoodAjiltanSchema = new Schema({
    id: String,
    ner: String,
    ovog: String,
    utas: String,
    mail: String,
    register: String,
    ajildOrsonOgnoo: Date,
    khayag: String,
    erkh: String,
    albanTushaal: String,
    zasakhEsekh: 
    {
        type : Boolean,
        select: false
    },
    nuutsUg: String,
    zurgiinNer: String
}, { timestamps: true });

dotoodAjiltanSchema.index({ '$**': 'text', nuutsUg: -1 });
dotoodAjiltanSchema.methods.tokenUusgeye = function () {
    const token = jwt.sign({ id: this._id, turul: "dotoodAjiltan" }, "tokenUusgexTest0123",
        {
            expiresIn: '1h'
        });
    return token;
};

module.exports = mongoose.model('dotoodAjiltan', dotoodAjiltanSchema);