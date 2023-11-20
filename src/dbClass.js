const mysql=require('mysql');
const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'tasks'});
class databaseClass {

    userLogin(email,pass){
        return new Promise((resolve,reject)=>{
            let sql='select user_id,user_password from users where user_email=?';
            db.query(sql,[email],function(err,res){
                if(err){
                    console.log(err);
                }else{                    
                    if(res.length==0){
                        resolve('email')
                    }else{
                        console.log(res[0].user_password)
                        console.log(pass)
                        if(res[0].user_password!=pass){                            
                            resolve('pass');
                        }else{
                            resolve(res[0].user_id);
                        }
                    }
                }
            })
        })
    }

}

module.exports={databaseClass}