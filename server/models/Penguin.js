var mongoose = require('mongoose');

var penguinSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true},
    color: {type: String, enum: ['Black', 'White', 'Green'], default: 'Black'}
});
                                 
module.exports = mongoose.model('Penguin', penguinSchema);
