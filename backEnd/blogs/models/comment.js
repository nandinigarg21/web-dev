const mongoose = require("mongoose");

const comment = new mongoose.Schema({
    post:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "create"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("comment",comment);