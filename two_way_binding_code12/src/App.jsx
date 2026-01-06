import React, { useState } from 'react'

const App = () => {
  const [title,settitle]=useState('')
  const submithandler=(e)=>{
    e.preventDefault()
    console.log("form submitted by ",title)
    settitle("")
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      submithandler(e)
     }}>
      <input onChange={(e)=>{
        settitle(e.target.value)
      }}value ={title} type="text" placeholder="enter your text"/>
      <button>submit</button>
     </form>
    </div>
  )
}

export default App
