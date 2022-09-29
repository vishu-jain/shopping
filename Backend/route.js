const express = require('express');
const router = express.Router();
const datanew = require('./reg');
const bcry = require('bcrypt');
const nodemailer=require('nodemailer');

//<--------------POST API ----------->
router.post('/postData', async (req, res) => {
    let body=req.body
    try {
            let store = new datanew(body)
            let saltdata = await bcry.genSalt(10);
            store.password = await bcry.hash(store.password, saltdata);
            store.confirmpassword = await bcry.hash(store.confirmpassword, saltdata);
            if(store.password === store.confirmpassword){
                let valueStore = await store.save();
                res.status(201).json({
                    success: 'true',
                    data: {
                        valueStore
                    }
                })  
            }
        }catch (errr) {
        console.log(errr);
    }
})

//--------------------Log thik  cchlra In Api---------------------------------------->

router.post('/login', async (req, res) => {
    let body = req.body;
    let user = await datanew.findOne({ email: body.email });
    if (user) {
        let crcpass = await bcry.compare(body.password, user.password);
        if (crcpass) {
            res.status(200).json({ message: 'Login successfully' })
        } else {
            res.status(400).json({ error: 'Credentials are not correct' });
        }
    }
    else {
        res.status(500).json({ error: 'User not found' })
    }
})

//-----------------------Mailing ApI-------------------------->
router.post('/mail',(req,res)=>{
    const output=`
    <p> Your Details:</p>
    <ul>
    <li> First Name: ${req.body.firstName}</li>
    <li> Last Name: ${req.body.lastName}</li>
    <li> Email id: ${req.body.email}</li>
    <li> Phone no: ${req.body.phone}</li>
    <li> Password: ${req.body.password}</li>
    </ul>
    `
    let transporter = nodemailer.createTransport({
     service:"hotmail",
     auth: {
       user: 'Vishujain_20391033.mca@geu.ac.in', // generated ethereal user
       pass: 'Mca@2020', // generated ethereal password
     },
     tls:{
         rejectUnauthorized:false
     }
   });
 
   // send mail with defined transport object
   let mailoptions ={
     from: '"STOP N SHOP" <Vishujain_20391033.mca@geu.ac.in>', // sender address
     to: `${req.body.email}`, // list of receivers
     subject: "Users Details", // Subject line
     text: "Welcome User", // plain text body
     html: output, // html body
   };
   transporter.sendMail(mailoptions, function (err,info){
         if(err){
             console.log(err)
             return;
         }
         console.log("Message sent:" + info.response);
   })
 })
 module.exports = router;