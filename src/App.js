import './App.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const navigate=useNavigate();
  const [postData, setPostData]=useState({email:'',pass:''})
  const submit = async() =>{
   if(input1Ref.current.value=='' || input2Ref.current.value==''){
    if(input1Ref.current.value==''){
      input1Ref.current.style.borderColor='red';
    }else{
      input1Ref.current.style.borderColor='';
    }
    if(input2Ref.current.value==''){
      input2Ref.current.style.borderColor='red';
    }else{
      input2Ref.current.style.borderColor='';
    }
   }else{

    setPostData({email:input1Ref.current.value,pass:input2Ref.current.value})

   const response=await axios.post('http://localhost:9898/loginValidate',postData)
   if(response.data=='email'){
    input1Ref.current.style.borderColor='red';
    input2Ref.current.style.borderColor='';
   } else if(response.data=='pass'){
    input2Ref.current.style.borderColor='red';
    input1Ref.current.style.borderColor='';
   }else{
    navigate('/dash');
   }

   }
  }

  return (
    <div className="container-fluid bg-login vh-100">
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='card col-md-4'>
          <div className='card-body'>
            <div className='col-md-12 mb-2'>
              <label htmlFor='email'>Email</label>
              <input type='email' id="email" className='form-control' ref={input1Ref}/>
            </div>
            <div className='col-md-12 mb-2'>
              <label htmlFor='password'>Password</label>
              <input type='password' id="password" className='form-control' ref={input2Ref}/>
            </div>
            <div className='col-md-12 mb-2'>
              <input type='button' value="SUBMIT" id="submit" onClick={submit} className='btn btn-success w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
