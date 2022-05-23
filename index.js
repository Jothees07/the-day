/************************************************************
                requiring the dependencies
****************************************************************/

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const alert = require('alert');
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(session({
    secret: process.env.Secret_key,
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

/************************************************************
                index
****************************************************************/



/************************************************************
                otp
****************************************************************/

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: process.env.emailID,
        pass: process.env.password,
    }

});

let otps =[]

app.get("/",function(req,res){
    // const otp = parseInt(Math.random()*100000);
    // otps.pop();
    // otps.push(otp)
    // console.log(otp)

    
    //     var email = process.env.email;
        
    //     var mailOptions = {
    //         to: email,
    //         subject: "Birthday Surprise",
    //         html: "<h3>Many more happy returns of the day!!</h3> <br> <h4> Your key to surprise is </h4> <br>" + "<h1 style='font-weight:bold;'>" + otps[0] + "</h1>"
    //     };
    
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //         console.log('Message sent: %s', info.messageId);
    //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    //     });
    

    res.render("otp");
});

app.post("/destination",function(req,res){
    const enteredOtp = req.body.otp;

    if(enteredOtp == "2405"){
        res.render("destination")
    }else{
        res.send("Please enter correct OTP!");
    }

});

app.post("/suprise",function(req,res){
    
        res.render("secret");
    

});


app.get("/suprise",function(req,res){


    res.render("secret");


});


app.get("/destination",function(req,res){
    
        res.render("destination")
    

});


/************************************************************
                port configuration
****************************************************************/

app.listen(process.env.PORT || 3000, function(){
    console.log("server started")
});