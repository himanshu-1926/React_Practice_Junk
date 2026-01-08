import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault() //By default, when you submit a form in a browser, the entire page refreshes. This line stops that from happening.
    const copyTask = [...task]//This line uses the spread operator (...) to create a brand-new copy of your existing notes.
    copyTask.push({ title, details })//added these objects that is : title and details
    setTask(copyTask)//updated the task now rerender and show notes on the screen
    setTitle('')
    setDetails('')//these blanks string is that after writing title and details make the box clear
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      {/* LEFT SECTION: FORM */}
      <form 
        onSubmit={submitHandler} 
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'
      >
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        
        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded bg-transparent text-white'
          value={title}
          onChange={(e) => setTitle(e.target.value)}//captures the exact text currently inside that specific input box.
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          placeholder='Write Details here'
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded bg-transparent text-white'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Add Note
        </button>
      </form>

      {/* RIGHT SECTION: DISPLAY */}
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return (
              <div 
                key={idx} 
                className="flex justify-between flex-col items-start relative h-64 w-52 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-3 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
                </div>

                {/* RED DELETE BUTTON FROM SCREENSHOT */}
                <button 
                  onClick={() => deleteNote(idx)}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-2 text-white text-xs rounded font-bold'
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default App