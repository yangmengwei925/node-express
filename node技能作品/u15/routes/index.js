const express = require("express");
const router = express.Router();
let data = require("../data/name");
router.get("/getData", (req, res) => {
    res.send(data);
})

module.exports = router;