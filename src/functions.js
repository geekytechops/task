const dbClassLib=require('./dbClass.js')
const lib=new dbClassLib.databaseClass();
const session=require('express-session')
app.use(session({secret: "Shh, its a secret!",saveUninitialized:true,resave:false}));
const loginValidate = async(req,res)=>{
    let result=await lib.userLogin(req.body.email,req.body.pass);
    req.session.user_id=result;
    res.json({response:result});
}
module.exports={loginValidate};