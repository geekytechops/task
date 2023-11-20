const express = require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const functionsLib=require('./functions.js')

app.post('/loginValidate',functionsLib.loginValidate);

app.listen(9898,()=>{
  console.log('Running');
});