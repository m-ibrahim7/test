const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });

module.exports = mongoose.model('FormData', formDataSchema); // Use CommonJS export
