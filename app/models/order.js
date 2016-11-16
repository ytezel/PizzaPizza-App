var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var minuteFromNow = function (minute) {
    return moment().add(minute, 'm');
}

var orderSchema = new Schema({
    id: Schema.ObjectId,
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'item'
    }],
    createdOn : {
        type: Date,
        default: Date.now
    },
    isDelivery: {
        type: String,
        default: true
    },
    deliveryTime: {
        type: String,
        default: minuteFromNow(60)
    },
    isPayed: {
        type: Boolean,
        default: false
    },
    providerId: {
        type: Schema.Types.ObjectId,
        ref: 'provider'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('order', orderSchema);