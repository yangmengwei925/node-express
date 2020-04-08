const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

let userData = require("./data/user")
let server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    console.log(query)
    console.log(pathname)
    if (pathname === "/favicon.ico") return res.end();
    pathname = pathname === "/" ? "/index.html" : pathname;
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
    } else {
        if (pathname == "/reg") {
            let flag = userData.some(item => {
                return item.name == query.name;
            })
            if (flag) {
                res.end(JSON.stringify({ code: 0, msg: '注册失败,用户名已被占用' }))
            } else {
                let data = query;
                userData.push(data);
                fs.writeFileSync("./data/user.json", JSON.stringify(userData))
                res.end(JSON.stringify({ code: 1, msg: "注册成功" }))
            }
        } else if (pathname == "/log") {
            let flag = userData.some(item => {
                return query.name == item.name && query.pwd == item.pwd;
            })
            if (flag) {
                res.end(JSON.stringify({ code: 1, msg: "登陆成功" }))
            } else {
                res.end(JSON.stringify({ code: 0, msg: "登陆失败" }))
            }
        }
    }
})
server.listen(9898, () => {
    console.log(server.address().port + "被启动")
})