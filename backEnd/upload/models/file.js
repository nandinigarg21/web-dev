const mongoose = require("mongoose");
const nodemailer = require("nodemailer")

const file = new mongoose.Schema({
    tag:{
        type : String,
    },
    Url:{
        type:String,
    },
});

file.post("save",async function (doc){
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                password:process.env.MAIL_PW
            }
        })

        let info = await transporter.sendMail({
            form:"someone",
            to:doc.email,
            subject:"file uploaded successfully",
            html:`<h1>uploaded</h1>`
        
    })
    } 
    catch (error) {
        res.status().json({
            success:false,
            message:console.log(error)
        })
    }
})

module.exports=mongoose.model("file",file);