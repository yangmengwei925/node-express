const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");

let zxdata = require("./data/zx");
let wydata = require("./data/wy");

const server = http.createServer((req, res) => {
    console.log(req.url)
        // console.log(url.parse(req.url))
        // url.parse 解析请求url地址 可以解析出所需要的路径 搜索字符串
    let { pathname, query } = url.parse(req.url, true);
    console.log(query)
    if (pathname === "/favicon.ico") return res.end()
    pathname = pathname === "/" ? "index.html" : pathname;
    // 后台区分 请求的是public 下面的文件 还是数据库里面的文件
    if (path.extname(pathname)) { //请求的public里面的文件
        res.end(fs.readFileSync(path.join("public", pathname)))
    } else { //请求的数据库 的 文件
        console.log(pathname)
            //后台接收到前端请求的接口  并把数据返回给前端
        if (pathname === "/getData") {
            console.log(query);
            if (query.type == "zx") {
                res.end(JSON.stringify(zxdata))
            } else {
                res.end(JSON.stringify(wydata))
            }
        }
    }

})

server.listen(9090, () => {
    // server.address().port 动态获取端口号
    console.log(server.address().port)
})