const express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

//=>index/about
router.get('/about',(req,res)=>{
    //pasing model to view
    res.render('about',{ 
            name: "Minh Duc",
            job : "CEO"});
})

module.exports = router;