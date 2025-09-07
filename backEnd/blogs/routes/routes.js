const express = require("express");
const Router = express.Router();

const {comment} = require("../controllers/comment");

Router.post("/comment",comment);

module.exports = Router;