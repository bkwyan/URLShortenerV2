// Schema for URLs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const URLSchema = new Schema ({
    fullURL:{
        type: String,
        required: true
    },
    hash:{
        type: String,
        required: true
    },
    shortenedURL:{
        type: String,
        required: true
    }
});

// Exports the file
module.exports = mongoose.model('url', URLSchema);