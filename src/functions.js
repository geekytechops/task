const dbClassLib=require('./dbClass.js')
const lib=new dbClassLib.databaseClass();
const loginValidate = async(req,res)=>{
    let result=await lib.userLogin(req.body.email,req.body.pass);
    req.session.user_id=result;
    res.json({response:result});
}

const sessionCheck = async(req,res)=>{
    const response = req.session.user_id=='' ? 0 : req.session.user_id;
    console.log(req.session.user_id);
    // res.json({data:response})
}

module.exports={loginValidate,sessionCheck};