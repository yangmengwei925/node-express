const express = require("express");
const router = express.Router();
const data = require("../data/data")
router.get("/getProduct", (req, res) => {
    let val = "";
    if (req.query.val) {
        val = req.query.val.toLocaleLowerCase();
    }
    let newdata = data.filter(item => item.cont.toLocaleLowerCase().includes(val));
    res.send(newdata)
})

module.exports = router;