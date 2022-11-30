const express = require('express');
const router = express.Router();
const {register, login, details} = require('../controllers/users');

router.get("/",(req,res)=>{
    res.render("user")
})

router.get('/login', (req, res) => {
    res.render('login', {title:"Login"});
})
router.get('/register', (req, res) => {
    res.render('register', {title:"Register"});
})
router.get("/home",(req,res)=>{
    res.render("home");
})

router.post('/register-data', register);
router.post('/login-data', login);
router.get('/details', details);

module.exports = router;