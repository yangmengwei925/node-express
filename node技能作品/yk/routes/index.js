const express = require("express");
const router = express.Router();
const listdata = require("../data/list")

router.get("/getList", (req, res) => {
    let { page, limit, otype, state } = req.query;
    let newdata = getState(otype, state, listdata);
    data = newdata.slice((page - 1) * limit, page * limit);
    let total = Math.ceil(newdata.length / limit); //总页数
    res.send({
        data,
        total,
        length: newdata.length, //筛选出的总数据数
        otype, //订单类型
        state //处理状态
    })
})

router.get("/chaxun", (req, res) => {
    let { page, limit, min, max, type, otype, state } = req.query;
    let newdata = getState(otype, state, listdata);
    newdata = newdata.filter(item => item.type == type && item.money >= min && item.money <= max);
    let data = newdata.slice((page - 1) * limit, page * limit);
    let total = Math.ceil(newdata.length / limit); //总页数
    res.send({
        data,
        total,
        length: newdata.length, //筛选出的总数据数
    })
})

//订单处理状态
function getState(otype, state, initdata) {
    let newdata;
    if (state == -1) { //订单状态选择全部时 
        newdata = initdata.filter(item => item.order == otype) //筛选订单类型
    } else { // 订单状态:0新订单 1未审核 2已接单 3已完成 4暂无状态
        newdata = initdata.filter(item => item.order == otype && item.handleState == state); //筛选订单类型和处理状态
    }
    newdata.forEach(item => {
        if (item.handleState == 0) {
            item.str = "新订单"
        } else if (item.handleState == 1) {
            item.str = "未审核"
        } else if (item.handleState == 2) {
            item.str = "已接单"
        } else if (item.handleState == 3) {
            item.str = "已完成"
        } else if (item.handleState == 4) {
            item.str = "暂无状态"
        }
    })
    return newdata;
}
module.exports = router;