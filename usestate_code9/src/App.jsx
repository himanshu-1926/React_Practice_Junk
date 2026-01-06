// import React, { useState } from 'react'

// const App = () => {
//     const [num,setnum]=useState(10)
//     const [user,setuser]=useState("ansh")
//     const [users,setusers]=useState([10,20,30])


//     function change(){
//         setnum(19)
//        setuser("hmnsh")
//        setusers([19,26,21,0])
//     }
//   return (
//     <div>
//       <h1>the value is {num}
//         <br/>{user}
//         <br/>{users}
//       </h1>
//       <button onClick={change}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
    const [num,setnum]=useState(1)
    function increase(){
       setnum(num+1) 
    }
      function decrease(){
       setnum(num-1) 
    }
    function jumpby5(){
       setnum(num+5) 
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpby5}>+5</button>

    </div>
  )
}

export default App
