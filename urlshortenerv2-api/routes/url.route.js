const express = require('express');
const router = express.Router();
const SHA256 = require('crypto-js/sha256');

const URL = require('../models/URL');

// Hashes the URL
router.post('/hashURL', (req, res) =>{
    URL.findOne({fullURL: req.body.url}).then(url => {
        // URL doesn't already exist in database
        if(!url){
            // Create new hash for URL
            const urlHash = SHA256(req.body.url).toString().substring(0, 8);
            const newURL = new URL({
                fullURL: req.body.url,
                hash: urlHash,
                shortenedURL: `localhost:8080/${urlHash}`
            });
            // Save the URL
            newURL.save().then(url => {
                return res.json(newURL.shortenedURL);
            }).catch(err => {
                return res.json(err);
            })
        } else{
            return res.json(url.shortenedURL);
        }
    })
});

// Redircts the URL
router.get('/:shortenedURL', (req, res) => {
    URL.findOne({hash: req.params.shortenedURL}).then(url =>{
        
        // URL doesn't exist, so send 404
        if(!url){
            return res.sendStatus(404)
        }

        return res.redirect(url.fullURL);
    })
})

module.exports = router;