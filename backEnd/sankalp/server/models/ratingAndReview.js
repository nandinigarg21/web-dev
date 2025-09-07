const mongoose = require("mongoose");

const ratingAndReview = new mongoose.Schema({
   user:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   }],
   rating:{
    type:Number,
    required:true
   },
   review:{
    type:String,
    required:true
   }
});

module.exports=mongoose.model("ratingAndReview",ratingAndReview);