const nodemailer = require("nodemailer");

const mailSender = async (email, title, text ,body) => {
    try {

        // console.log(" check is come value", email, title, text);
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            service : "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })


        let info = await transporter.sendMail({
            from: 'StudyNotion || CodeHelp - by Babbar',
            to: `${email}`,
            subject: `${title}`,
            html: body ? `${body}`: "",
            text:   text ? `${text}` : ""
        }) 
        console.log(info);
        return info;
    }
    catch (error) {
        console.log( " ERROR OOCUURENCE WHEN SENT MAIL", error.message);
    }
}


module.exports = mailSender;