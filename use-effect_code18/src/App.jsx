import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a,seta]=useState(0)
  const [b,setb]=useState(0)

  function achanging(){
    console.log("a ki value change ho gyi")
  }
 function bchanging(){
    console.log("b  ki value change ho gyi")
  }
useEffect(function(){
  console.log("use effect is running...")
  bchanging()
},[b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        seta(a+1)
      }}>change A</button>

      <button onClick={()=>{
        setb(b-1)
      }}>change B</button>

    </div>
  )
}

export default App
