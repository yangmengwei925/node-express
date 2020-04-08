const express = require("express");
const router = express.Router();
let data = require("../data/data")
router.get("/form", (req, res) => {
    res.send(data);
})

module.exports = router;