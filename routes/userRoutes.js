const express = require('express') ;
const router  = express.Router();


const {createUser  }  = require("../controllers/user");
const { createPage, getAllPageData, InstituteData } = require('../controllers/page');
const { ContactHandler } = require('../controllers/contact');



router.post("/create-user" , createUser );

router.post("/create-page" , createPage );
router.get("/getAllData" , getAllPageData );
router.post("/send-info" , ContactHandler );
router.post("/institute-add" , InstituteData  );


    

module.exports = router ;