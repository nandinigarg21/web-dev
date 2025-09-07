const express = require("express");
require("dotenv").config();


const app = express();
app.use(express.json());

const blog = require("./routes/routes");
app.use("/api/v1", blog);


app.listen(process.env.PORT, () => {
    console.log("running");
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>home page</h1>`)
});