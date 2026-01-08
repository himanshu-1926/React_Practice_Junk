import React from 'react'

const App = () => {
  const user = {
    username: "hmnsh",
    age: "20",
    city: "lucknow",
    maritalStatus: "unmarried"
  }
  localStorage.setItem("user",JSON.stringify(user))
  const usera=Json.parse(localStorage.getItem("user"))
  console.log(usera);
  return (
    <div>

    </div>
  )
}

export default App
