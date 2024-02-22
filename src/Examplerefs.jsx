import React from 'react'
import { useEffect } from 'react';

const Examplerefs = () => {
    var[data,setData]=React.useState([])
    var newref=React.useRef();
    useEffect(()=>{
     var handleClick=newref.current.value;
     setData([...data,handleClick])
    },[])
  return (
    <div>
        <h2>Todos</h2>
        <input type='text' ref={handleClick}/>
        <button>Add</button>
      
    </div>
  )
}

export default Examplerefs

