const express = require("express");

const app = express();

app.use(express.json());
const expressUpload = require("express-fileupload");
app.use(expressUpload({
    //hereComesSomething
}));

// const cookieParser = require("cookie-parser");
// app.use(cookieParser);

require("dotenv").config();

app.get("/", (req, res) => {
    res.send(`<h1>home page</h1>`)
});

const fileUpload = require("./routes/route");
app.use("/api/v1", fileUpload);

app.listen(process.env.PORT, () => {
    console.log("server running");
})

const dbConnect = require("./config/dataBase");
dbConnect();

// const cloudinary = require("./config/cloudinary");
// cloudinary.cdConnect();

