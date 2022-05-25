const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const User = require('./models/user.model');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/iqvialoginsystem')
app.post('/api/register',async (req,res)=>{
    console.log(req.body);
    try{
        const user=await User.create({
            email: req.body.email,
            password: req.body.password,
        });
        res.json({status: 'ok'})
    }
    catch(err){
        res.json({status:'error',error:'Duplicate email'})
    }
})
app.post('/api/login',async (req,res)=>{
    console.log(req.body);
    const user=await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(user){
        return res.json({status: 'ok', user: true});

    }
    else
        return res.json({status:'error',user: false});
})
app.listen(4000,()=>{
    console.log('listening from backend');
})