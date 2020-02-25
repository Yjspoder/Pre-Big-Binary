const mongoose = require('mongoose');

const { Schema } = mongoose;

const columnSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
})

module.exports = mongoose.model( 'Column' , columnSchema);
