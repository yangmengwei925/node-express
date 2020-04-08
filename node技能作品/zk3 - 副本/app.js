const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const querystring = require("querystring");
let userData = require("./data/user")
let server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === "/favicon.ico") return res.end();
    pathname = pathname === "/" ? "/login.html" : pathname;
    if (path.extname(pathname)) { //判断有无后缀，有后缀是静态资源
        res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
    } else {
        if (pathname === "/checkcode") { //判断接口是验证码
            let str = '0123456789abcdefghijklmnopqrstuvwxyz';
            //四位随机验证码
            let chcode = "";
            for (let i = 0; i < 4; i++) {
                let n = Math.floor(Math.random() * str.length);
                chcode += str[n];
            }
            res.end(JSON.stringify({ chcode }))
        } else if (pathname === "/login") { //判断登陆接口
            let str = "";
            //接收post请求参数
            req.on("data", chunk => {
                str += chunk;
            })
            req.on("end", () => {
                let endstr = querystring.parse(str);
                let flag = userData.some(item => { //判断用户名和密码是否存在是否正确
                    return item.name == endstr.name && item.pwd == endstr.pwd;
                })
                if (flag) {
                    res.end(JSON.stringify({ code: 1, msg: "登录成功" }))
                } else {
                    res.end(JSON.stringify({ code: 0, msg: "用户名或密码错误" }))
                }
            })
        }
    }
})
server.listen(9292, () => {
    console.log(server.address().port + "被启动")
})