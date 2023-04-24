import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
function Protected(props) {
    let Cmp=props.cmp
    const navigate = useNavigate();
    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/addproduct');
        }
    },[])
  return (
    <div>
<Cmp />
    </div>
  )
}

export default Protected