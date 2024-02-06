const Page = require("../models/page");
const mongoose = require("mongoose");
const User = require("../models/user");
const Institute = require("../models/instituteSchema");
const Social = require("../models/socialMedia");





exports.createPage = async (req, res) => {
    const { name, content } = req.body;

    console.log(req.body)

    if (!name || !content) {
        return res.status(400).json({
            success: false,
            massage: "please fill all  fields"
        })
    }

    const response = await Page.create({ name, content })



    if (!response) {
        return res.status(200).json({
            success: true,
            massage: "Page data saved"
        })
    }

    res.status(200).json({
        success: true,
        massage: "Page data saved successfully ",
        response
    })
};




///get all the pages data


exports.getAllPageData = async (req, res) => {
    const response = await (await Page.find()).reverse();

    if (!response) {
        return res.status(200).json({
            success: true,
            massage: "Page data saved"
        })
    }


    res.status(200).json({
        success: true,
        massage: "Page data saved successfully ",
        response
    })
}






exports.InstituteData = async (req, res) => {
    const { userId, name, description, establishmentYear, type, address, phone, webURl, socialMediaLinks, email, } = req.body;

    console.log(req.body)

    if (!email || !userId || !name || !description || !establishmentYear || !address || !phone || !webURl || !socialMediaLinks) {
        return res.status(400).json({
            success: false,
            massage: "please provide all  details"
        })
    }


    let isUserExist = await User.findOne({ userId });

    if (!isUserExist) {
        return res.status(300).json({
            success: false,
            massage: "User not exist please process to create account"
        })
    }


    const socialResponse = await Social.create({});
    const mongooseId = new mongoose.Types.ObjectId(socialResponse._id);

    // for (let count = 0; count < socialMediaLinks.length; count++) {
    //     const socialLink = socialMediaLinks[count];
    //     await Social.findOneAndUpdate({ _id: mongooseId }, {socialLink : socialLink})

    // }


    let institute = new Institute({ email, userId: isUserExist._id, name, description, establishmentYear, address, phone, webURl, socialMediaLinks: mongooseId });

    await institute.save();




    return res.status(200).json({
        success: true,
        massage: "data inserted successfully ",
        institute,
        socialResponse
    })
}



