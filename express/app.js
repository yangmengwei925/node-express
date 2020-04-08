const express = require("express");
const path = require("path");
const app = express();
const indexRounter = require("./routes");
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("views", path.join(__dirname, "views"))

app.use("/", indexRounter)

app.use(express.static(path.join(__dirname, "public")))
app.listen(9090)