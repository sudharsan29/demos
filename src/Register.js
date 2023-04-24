import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
function Register()
 {
    const Navigatereg = useNavigate();
useEffect(() =>{
    if(localStorage.getItem('user-info'))
    {
        Navigatereg('/addproduct');
    }
},[])

const [name,setName]=useState("")
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")
const navigate = useNavigate();
 async function signUp(){
    let item={name,password,email}
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

    if (result.id) {
        localStorage.setItem("user-info",JSON.stringify(result))
        Navigatereg('/addproduct');
    }
  
}
return (
<>
<Header />
    <div className="col-sm-6 offset-sm-3">
        
<h2>Register</h2>
    <input type='text'onChange={(e) =>setName(e.target.value)} className='form-control' placeholder='name' />
    <br />
    <input type='text'onChange={(e) =>setPassword(e.target.value)}className='form-control' placeholder='Password' />
    <br />
    <input type='text'onChange={(e) =>setEmail(e.target.value)}className='form-control' placeholder='email' />
    <br />
    <button onClick={signUp} className='btn btn-primary'>sign up</button>
    </div>
    </>
  )
}

export default Register;