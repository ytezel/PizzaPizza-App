var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({
    id: Schema.ObjectId,
    telephoneNumber: String,
    adresse: {
        type: Schema.Types.ObjectId,
        ref: 'adresse'
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'order'
    }],
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('provider', providerSchema);