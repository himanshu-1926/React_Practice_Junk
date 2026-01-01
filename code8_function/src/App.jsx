// const App = () => {
//   function btn1() {
//     console.log("button is clicked")
//   }
//   function mouseenter() {
//     console.log("mouse entered")
//   }
//   }
//   return (

//     <div>
//       <button onMouseEnter={mouseenter} onDoubleClick={btn1}>click here</button>

//       <button onClick={function () {
//         console.log("clicked")
//       }}>click again</button>

//       <button onClick={()=>{
//         console.log("clicked")
//       }}>click again2</button>


//     </div>
    
//   )
// }

// export default App


// const App = () => {
//   function Change(){
//     console.log("typing")
//   }

// function Change2(val){
//   console.log(val);
// }

//   return (
//     <div>
//       <input onChange={function(elem){
//         console.log(elem.target.value)
//       }} type="text" placeholder="enter name"/>

//       <input onChange={function(elem){
//         Change2(elem.target.value)
//       }} type="text" placeholder="enter name"/>
//     </div>
//   )
// }

// export default App 



const App = () => {
  const Pagescroll=()=>{
     console.log("page scrolling...")
  }
  return (
    <div onWheel={(elem)=>{
      console.log(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      
    </div>

  )
}

export default App

