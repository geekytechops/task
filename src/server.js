const express = require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const session=require('express-session')
app.use(session({secret: "Shh, its a secret!",saveUninitialized:true,resave:false}));
const functionsLib=require('./functions.js')

app.post('/loginValidate',functionsLib.loginValidate);
app.post('/sessionCheck',functionsLib.sessionCheck);

app.listen(9898,()=>{
  console.log('Running');
});