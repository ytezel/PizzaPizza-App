var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adresseSchema = new Schema({
    id: Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('adresse', adresseSchema);