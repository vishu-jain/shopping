const express=require('express');
const mongoose=require('mongoose');
const api_url=require('./route');
const bodyparser=require('body-parser');
const cors=require('cors');
const port=process.env.express || 8400;
const app=express();
const url='mongodb://localhost:27017/shopping';

mongoose.connect(url).then((res)=>{
    try{
    if(res){
        console.log("Database connected");
            }
    }catch(er){
        console.log(er);
    }
})
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('',api_url);

app.listen(port,()=>{
    try{
        console.log("Server is created");
    }catch(error)
    {
        console.log(error);
    }
})