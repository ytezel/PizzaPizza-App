var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    id: Schema.ObjectId,
    itemType: {
        type: String,
        enum: ['PIZZA', 'KEBAB', 'DRINK'],
        required: true
    },
    contains: [String],
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);