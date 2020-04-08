const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

let server = http.createServer((req, res) => {
    let { pathname } = url.parse(req.url);
    console.log(pathname);
    if (pathname == "/favicon.ico") {
        return res.end();
    }
    pathname = pathname === "/" ? "/index.html" : pathname;
    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
})
server.listen(9292, () => {
    console.log(server.address().port + "被启动");
})