import React from 'react'

const App = () => {
 function getdata1(){
  const response=fetch("https://jsonplaceholder.typicode.com/todos/1")//fetch kiya time laga aage badh gyaa next wla print kr diya 
  console.log(response)// data ko call lagaaya ab wo data mujhe turant chahiye pr wo milega nhi turant takes time
  //asynchronously work krti hai....
  console.log("data srrived")
 }

 async function getdata2(){
  const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
  console.log(response)
 }

const getdata3= async ()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')//..../1hata do toh sare data milenge 
  //JSON form me data chahieye kyoki json data bhi asynchronous hai usee thik kro aise 
  const data=await response.json()

  console.log(data)

  console.log(response)
}
  return (
    <div>
      <button onClick={getdata1}>get data</button>
            <button onClick={getdata2}>get data</button>
                  <button onClick={getdata3}>get data</button>


    </div>
  )
}

export default App
