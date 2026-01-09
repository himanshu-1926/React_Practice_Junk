import axios from 'axios'
import { useState } from 'react'

const App = () => {
    const getdata=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response)
        console.log("i am back")
    }
  const [data,setdata]=useState([])
    const getdata1=async ()=>{
       const response=await axios.get("https://picsum.photos/v2/list")
       setdata(response.data)



    //    console.log(response.data)
       //all data as the object
            //   console.log(response)

    }
  return (
    <div>
      {/* <button onClick={getdata}>get data</button> */}
            <button onClick={getdata1}>get data1</button>
            <div>
                {data.map(function(elem,idx){
                    return <h3>Hii Hmnsh{elem.author}{idx}</h3>
                })}
            </div>

    </div>
  )
}

export default App
