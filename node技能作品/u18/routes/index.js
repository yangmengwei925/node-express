const express = require("express");
const router = express.Router();
const data = require("../data/data");

router.get("/getData", (req, res) => {
    res.send(data);
})
router.get("/search", (req, res) => {
    let val = req.query.val;
    let newData = data.filter(item => item.name.includes(val))
    res.send(newData);
})

module.exports = router;