const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const User = require('./models/user.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/iqvialoginsystem');
/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://manishkumar98:manishkumar98@cluster0.0gn3l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/
app.post('/api/register',async (req,res)=>{
    console.log(req.body);
    console.log('hi',User);
    try{
        const userCheck=await User.findOne({
            email: req.body.email,
        });
        if(!userCheck){
            const newPassword= await bcrypt.hash(req.body.password,10);
        const user=await User.create({
            email: req.body.email,
            password: newPassword,
            name: req.body.name,
        });
        //console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",user.email,user.password);
       if(user) res.json({status: 'ok'});
       else
       res.json({status:'error',error:'Duplicate email'});
        }
        else
        res.json({status:'error',error:'Duplicate email'});
    }

    catch(err){
        console.log(err);
        res.json({status:'error',error:'Duplicate email'});
    }
})
app.post('/api/login',async (req,res)=>{
    console.log(req.body);
    //console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',User.email,User.password);
    try{
    const user=await User.findOne({
        email: req.body.email,
    })
    //console.log("lol",user);
    if(!user){
        return res.json({status: 'error',error: 'Invalid login'});

    }
    const isValidPassword=await bcrypt.compare(req.body.password,user.password);
    if(isValidPassword){
        const token=jwt.sign({
            name: user.email,
            password: user.password
        },'manish123')
        return res.json({status: 'ok',user: token});
    }else{
        return res.json({status:'error',user: false});
    }
}catch(err){
    return res.json({status:'error',user: false});
}
})
app.listen(4000,()=>{
    console.log('listening from backend');
})