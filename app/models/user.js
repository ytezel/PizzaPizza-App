var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Schema.ObjectId,
    telephoneNumber: String,
    email: String,
    password: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'order'
    }],
    adresse: [{
        type: Schema.Types.ObjectId,
        ref: 'adresse'
    }],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);