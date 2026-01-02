import React from 'react'

const Prog1 = () => {

  function formSub(evt){
    evt.preventDefault();
    console.log("Form is Submitted");
  }

  return (
    <div className='bg-black h-screen overflow-hidden '>
      <form onSubmit={function(evt){
            formSub(evt)
        }} >
        <input className=' block bg-gray-500 m-5 px-4 py-1 text-center' type="text" placeholder='Enter username' />
        <button className='bg-blue-500 m-5 px-5 py-1 rounded-full'>Submit</button>
      </form>
    </div>
  )
}

export default Prog1
