var express = require('express');
var router = express.Router();

var scrapeController = require("../controllers/scrape-controller.js")

router.get('/character-list', scrapeController.characterList);

module.exports = router;
