var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

router.route('/:word') 
  .get(function (req, res) {
    fetch('https://api.datamuse.com/words?rel_rhy=' + req.params.word)
      .then (function(res){ // serveri hakee tiedon datamuselta
        return res.json()
      }) 
      .then (function(data) {
        res.json(data); // palauttaa tiedon getWords.js:lle, joka on tietoa kysynyt
      })
  });  

module.exports = router;
