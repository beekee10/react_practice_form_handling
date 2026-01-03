import React from 'react'
import { useState } from 'react';

const Prog2 = () => {

  function formSub(evt){
    evt.preventDefault();
    console.log("Form is Submitted");
    settitle('')     /* After submission clear the input box */
  }

  const [title, settitle] = useState('')
  function typ(elm){
    settitle(elm);
    console.log(elm);
    
  }

  return (
    <div className='bg-black h-screen overflow-hidden '>
      <form onSubmit={function(evt){
            formSub(evt)
        }} >
        <input onChange={(elm)=>{
            typ(elm.target.value);
        }} value={title}  /* anything inside value gets hardcoded into input box */
        className=' block bg-gray-500 m-5 px-4 py-1 text-center' type="text" placeholder='Enter username' />

        <button className='bg-red-400 m-5 px-5 py-1 rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default Prog2
