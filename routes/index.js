var express = require('express');
var router = express.Router();
const db = require('./db.json');

/* GET home page. */
router.get('/', function (req, res) {
    res.status(404);
    res.json({
        "error": "not_found",
        "description": "should use /posts or /comments"
    });
});

router.get('/:resource', function (req, res) {
    setTimeout(function() {
        const { resource } = req.params;
        res.status(200);
        res.json(db[resource]);
    }, 5000);
});

module.exports = router;
