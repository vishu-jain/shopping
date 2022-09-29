const mongoose=require('mongoose');
const regdata=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
        },
    lastname:{
            type:String,
            required:true
        },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})
const userdata=mongoose.model('Usersdetails',regdata);
module.exports = userdata;