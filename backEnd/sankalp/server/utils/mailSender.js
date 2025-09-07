
const nodemailer = require("nodemailer")

exports.mailSender = async (email, subject, body) => {
    let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user:process.env.MAIL_USER,
                    pass:process.env.MAIL_PASS
                },
                secure:false
            })
    try {
        await transporter.sendMail({
            from: "Sankalp",
            to: `${email}`,
            subject: `${subject}`,
            html: `${body}`
        })

    }catch (error) {
        console.log(error)

    }
}

