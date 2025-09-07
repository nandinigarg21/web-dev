const express = require("express");
const Router = express.Router();

const {fileUpload} = require("../controllers/fileUpload");

Router.post("/controller",fileUpload);

module.exports = Router;