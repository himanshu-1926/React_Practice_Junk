import React, { useEffect, useState } from 'react'

const App = () => {
  const [num,setnum]=useState(0)
    const[num2,setnum2]=useState(10)

  useEffect(function(){
    console.log('use effect is running')
  },[num])//[] passing this blank array i.e dependency sothat every time the state changes it does not print this line  

  return (
    <div>
      <h1>num is {num}</h1>
      <h1>num2 is {num2}</h1>

      <button onClick={()=>{//.....also can use onMouseEnter......
        setnum(num+1)

      }}
      onDoubleClick={()=>{//...lso can use onMouseLeave......
        setnum2(num2+10)
      }}

      >click</button>
    </div>
  )
}

export default App
