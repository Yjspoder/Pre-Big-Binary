const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    columns: [{
        type: Schema.Types.ObjectId,
        ref: 'Column'
    }]
});

module.exports = mongoose.model('Project' , projectSchema);