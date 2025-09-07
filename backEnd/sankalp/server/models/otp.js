const mongoose = require("mongoose");
const {mailSender} = require("../utils/mailSender");
const otpTemplate = require("../mailTemplates/emailVerificationTemplate")

const otp = new mongoose.Schema({
    email: {
        type: String
    },
    otp: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60 * 1000
    }
});


otp.pre("save", async function (next) {

    try {
       await mailSender(this.email, "verification email form sankalp",otpTemplate(this.otp))

    } catch (error) {
        console.log(error)

    }
    next();
})


module.exports = mongoose.model("otp", otp)