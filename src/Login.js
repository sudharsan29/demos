import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    if(localStorage.getItem('user-info'))
    {
        navigate('/addproduct');
    }
},[navigate])
async function LoginForm(){
  let item={password,email}
  console.warn(item);
let result =await fetch("https://jsonplaceholder.typicode.com/posts ",{
  method:'POST',
  body:JSON.stringify(item),
  headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
  }

})
result =await result.json();
console.log(result);

localStorage.setItem("user-info",JSON.stringify(result))
navigate('/addproduct');
  }

  return (<>
    <Header />
    <div className="col-sm-6 offset-sm-3">
  <h2>Email</h2>
    <input type='email' onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email' />
    <br />
    <h2>Password</h2>
    <input type='password' onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Password' />
    <br />
    <button  onClick={LoginForm} className='btn btn-primary'>Login</button>
 </div>
</>
  );
}

export default LoginForm;
