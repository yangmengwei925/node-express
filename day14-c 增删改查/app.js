const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
let listData = require("./data/list")
    //解析post请求的额数据
app.use(express.json())
app.use(express.urlencoded())

//查看所有数据接口  一个接口 做俩件事
//怎么区分查看的是 一个数据 还是 所有数据  通过看有没有参数
app.get("/getList", (req, res) => {
    let id = req.query.id; //点击修改按钮时触发


    if (id) { //有id和updata.html相关联
        let newData = listData.filter(item => {
                if (item.id == id) {
                    return item
                }
            })
            //console.log(newData); //[ { id: '7', name: '张三7777', tel: '123123123' } ]
        res.send({ code: 0, msg: "ok", data: newData })
    } else { //没id和index.html相关联
        res.send({ code: 0, msg: "ok", data: listData })
    }

})

//删除接口 使用filter方法
app.get("/removeInfo", (req, res) => {
    let { id } = req.query; //前台传递到额id
    let newData = listData.filter(item => {
        if (item.id != id) { //将删除项排除重新写入重新渲染
            return item;
        }
    })
    fs.writeFileSync("./data/list.json", JSON.stringify(newData))
        //console.log(newData)
    res.send({ code: 0, msg: "删除成功" })

})

//增加接口 使用push方法
app.post("/addInfo", (req, res) => {
    let data = req.body; //{name:1,tel:1}
    data.id = new Date() * 1 + Math.random();
    let flag = listData.some(item => item.name == data.name);
    if (flag) { //此用户已经存在
        res.send({ code: 1, msg: "此用户已经存在 请重新添加" })
    } else { //不存在
        listData.push(data);
        fs.writeFileSync("./data/list.json", JSON.stringify(listData))
        res.send({ code: 0, msg: "添加成功" })
    }
})

//修改接口 updateInfo 使用map方法
app.post("/updateInfo", (req, res) => {
    let data = req.body; //{name:1,tel:1，id}
    let newData = listData.map(item => {
        if (item.id == data.id) {
            return data
        }
        return item;
    })
    console.log(newData)
    fs.writeFileSync("./data/list.json", JSON.stringify(newData)) //把数据写入json文件
    res.send({ code: 0, msg: "修改成功" })
})

// app.use("/cont",(req,res)=>{
//     console.log(req.query)//接收get请求的数据
// })
// app.use("/post",(req,res)=>{
//     console.log(req.body)//接收post请求的数据 
// })
app.use(express.static(path.join(__dirname, "src"))) //加添静态资源
app.listen(9091)