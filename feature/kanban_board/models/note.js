const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    columnId: {
        type: Schema.Types.ObjectId,
        ref: 'Column'
    }
})

module.exports = mongoose.model( 'Note' , noteSchema);