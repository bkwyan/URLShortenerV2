const express = require('express');
const router = express.Router();
const SHA256 = require('crypto-js/sha256');

const URL = require('../models/URL');
const secretKey = require('../config/keys').secretKey;

// Hashes the URL
router.post('/hashURL', (req, res) =>{
    const urlHash = SHA256(req.body, secretKey);
    URL.findOne({url: req.body.url}).then(url => {
        // URL doesn't already exist in database
        if(!url){
            // Create new hash for URL
            const newURL = new URL({
                url: req.body.url,
                hash: urlHash,
                shortenedURL: `localhost:3000/${urlHash}`
            });
            // Save the URL
            newURL.save().then(url => {
                res.json(newURL.shortenedURL);
            }).catch(err => {
                res.json(err);
            })
        } else{
            res.json(url.shortenedURL);
        }
    })
});

module.exports = router;