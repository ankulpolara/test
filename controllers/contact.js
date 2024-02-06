const Contact = require("../models/contact");
const mailSender = require("../utils/mailSendder");
let contactTemplate = require("../utils/template/Contact");
const mailRecieve = require("../utils/template/mailRecieve");



exports.ContactHandler = async (req, res) => {
    const { email, number, text } = req.body;

    console.log(req.body)

    if (!email || !number || !text) {
        return res.status(400).json({
            success: false,
            massage: "please fill all  fields"
        })
    }

    const response = await Contact.create({ email, number, text })

   let userMailresponse = await mailSender(email, "Your contact query succesfully submited", text, mailRecieve(email,number ,text));

    let ownerMail = process.env.OWNER_MAIL
    let ownerMail2 = process.env.OWNER_MAIL2
 
 let  adminMailResponse = await mailSender(ownerMail, `Contact form submitted by ${email}`, email,  contactTemplate(email,number ,text));
 let  adminMailResponse2 = await mailSender(ownerMail2, `Contact form submitted by ${email}`, email,  contactTemplate(email,number ,text));


    if (!response) {
        return res.status(200).json({
            success: true,
            massage: "user data saved"
        })
    }

    res.status(200).json({
        success: true,
        massage: "contact uery saved successfully ",
        response,
        adminMailResponse,
        adminMailResponse2,
        userMailresponse
    })
}