const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const listdata = require("../data/list")
const userdata = require("../data/user")
router.get("/", (req, res) => {
    listdata.sort((b, a) => {
        return a.time - b.time;
    })
    console.log(listdata);
    res.render("index", {
        data: listdata
    })
})
router.post("/login", (req, res) => {
    let flag = userdata.some(item => item.user == req.body.user && item.pwd == req.body.pwd);
    if (flag) {
        res.send({ code: 0, msg: "登录成功", user: req.body.user })
    } else {
        res.send({ code: 1, msg: "用户名或密码错误" })
    }
})
router.get("/publish", (req, res) => {
    let { name, cont } = req.query;
    let time = new Date().toLocaleString();
    let obj = { name, time, cont };
    listdata.push(obj);
    fs.writeFileSync("./data/list.json", JSON.stringify(listdata));
    res.send({ code: 0, mag: "发送成功" })
})
module.exports = router;