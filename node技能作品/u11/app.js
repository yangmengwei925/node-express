const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
let hot = require("./data/hot");
let near = require("./data/near");
let server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    if (pathname == "/favicon.ico") return res.end();
    pathname = pathname === "/" ? "/index.html" : pathname;
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
    } else {
        if (query.type == "hot") {
            res.end(JSON.stringify(hot))
        } else if (query.type == "near") {
            res.end(JSON.stringify(near))
        }
    }
})
server.listen(9292, () => {
    console.log("9292被启动")
})