const express=require('express');
const router=express.Router();

const config=require('../config');
const nodemailer=require("nodemailer");
var cors = require('cors')

//ROUTE1: create a user using: POST 'api/auth/' doesnot require authentication, no login required
router.post('/', async (req,res)=> {
    // console.log("hello")
    // const {text}= req.body;
    const transport=await nodemailer.createTransport({
        host : config.MAIL_HOST,
        port : config.MAIL_PORT,
        secure:false,
        auth : {
            user : config.MAIL_USER,
            pass : config.MAIL_PASS
        }
    })
    let mailDetails = {
        from: config.MAIL_FROM,
        to: req.body.to,
        subject: req.body.subject,
        html: `<div className="email" style="
                border: 1px solid black;
                padding: 20px;
                font-family: sans-serif;
                line-height: 2;
                font-size: 20px; 
                ">
                <h2>Here is your email!</h2>
                <p>${req.body.text}</p>
            
                <p>All the best, kkishita</p>
                </div>`
          };
    await transport.sendMail(mailDetails,function(err, data) {
      if(err) {
          console.log(err);
      } else {
          res.send("email sent successfully")
          console.log('Email sent successfully');
      }
    });
  });




module.exports=router;