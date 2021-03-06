const express = require('express')
const router = express.Router()
const tweetBank = require('../tweetBank')

router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
  res.sendFile('stylesheets/style.css')
})

module.exports = router
