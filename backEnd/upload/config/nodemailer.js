const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = () => {
    try {
        nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                password:process.env.MAIL_PW
            }
        })
    } catch (error) {
        console.log(error);
        
    }

}


module.exports = transporter;