const mongoose = require("mongoose");
require('dotenv').config();


 exports.connectDB =  ()=>{

    mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  
).then(()=> console.log("db connection is successfully done bro .........."))
.catch((error)=> console.log(  "Error while connecting with db ......." , error))

 }