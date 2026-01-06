// import React, { useState } from 'react'

// const App = () => {
//   const [num,setnum]=useState(1)
//   const btnclicked=()=>{
//   setnum(20)
//   console.log(num) //  WORKING ASYNCHRONOUSLY (not in order)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({ organization: "Akatsuki", character: "Itachi" })
  const [num1,setnum1]=useState([64,6,32])

const btn2=()=>{
const newnum1=[...num1]
newnum1.push(21)
setnum1(newnum1)
}

  const btnclicked = () => {
    const newnum = {...num};//this is called destructure 
    newnum.character = "Hidan"
    setnum(newnum)
  }
  return (
    <div>
      <h1>{num.organization},{num.character}</h1>
      <button onClick={btnclicked}>click</button>

      <h1>{num1}</h1>
    <button onClick={btn2}>click</button>
    </div>
  )
}

export default App
