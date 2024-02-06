const User = require("../models/user");
const Institute = require("../models/instituteSchema");
const Social = require("../models/socialMedia");
const uniqid = require("uniqid");




exports.createUser = async (req, res) => {
    const { email, password, userName, userType } = req.body;
    121

    if (!email || !password || !userName) {
        return res.status(400).json({
            success: false,
            massage: "please fill all  fields"
        })
    }


    let isUserNameExist = await User.findOne({ userName })

    if (isUserNameExist) {
        return res.status(300).json({
            success: false,
            massage: "userName already Exist"
        })
    }

    if (!isUserNameExist) {
        console.log("....................user not exist continue ...");
    }
    // ADD TO CREATE USER ID
    const userId = uniqid()

    const response = await User.create({ email, password, userName, userId })
    //   let user  = new User ({email:email ,password:password}) ;
    //   await user.save();


    if (!response) {
        return res.status(200).json({
            success: true,
            massage: "user data saved"
        })
    }

    res.status(200).json({
        success: true,
        massage: "user data saved successfully ",
        response,
        userId
    })
}

////////////////////// login 

exports.Login = async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body)

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            massage: "please fill all  fields"
        })
    }


    let isUserNameExist = await User.findOne({ email });

    console.log(isUserNameExist);

    if (!isUserNameExist) {
        return res.status(300).json({
            success: false,
            massage: "User not exist please process to create account"
        })
    }

    if (isUserNameExist.password != password) {
        return res.status(400).json({
            success: false,
            massage: "Password does not match"
        })
    }


    return res.status(200).json({
        success: true,
        massage: "User Login successfully ",
        response
    })
}




