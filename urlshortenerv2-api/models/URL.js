// Schema for URLs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const URLSchema = new Schema ({
    fullURL:{
        type: String,
    },
    hash:{
        type: String,
    },
    shortenedURL:{
        type: String,
    }
});

// Exports the file
module.exports = mongoose.model('url', URLSchema);