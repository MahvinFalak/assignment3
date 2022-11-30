const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title:"Home", style:'index.css'});
})
router.get("/logout",(req,res)=>{
    res.render("index");
})

module.exports = router;