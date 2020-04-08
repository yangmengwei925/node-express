const express = require("express");
const path = require("path");
const router = require("./routes");

const app = express();
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded());
app.use(router)

app.listen(9000, () => {
    console.log("9000 start")
})