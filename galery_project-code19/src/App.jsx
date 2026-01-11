import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const getdata1 = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=32`)
      setuserdata(response.data)
    } catch (error) {
      console.error("Fetch error:", error)
    }
    setIsLoading(false); // Stop loading
  }

  useEffect(function () {
    getdata1()
  }, [index])

  // Logic for what to display in the gallery section
  let content;
  if (isLoading) {
    content = (
      <div className="col-span-full h-96 flex items-center justify-center">
        <h2 className="text-2xl font-light tracking-widest animate-pulse">LOADING IMAGES...</h2>
      </div>
    );
  } else {
    content = userdata.map(function (elem, idx) {
      return (
        <div key={idx} className="group cursor-pointer">
         <Card elem={elem}/>
        </div>
      )
    })
  }

  return (
    <div className='bg-black min-h-screen text-white font-sans selection:bg-red-500'>
      {/* Index Tag - Now properly fixed and classy */}
      <div className="fixed top-0 left-0 z-50 bg-red-600 px-6 py-4 rounded-br-3xl shadow-2xl border-b border-r border-red-400">
        <h1 className="text-5xl font-black italic">{index}</h1>
      </div>

      <div className='max-w-7xl mx-auto p-4 pt-28'>
        {/* Changed to GRID for better alignment */}
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
          {content}
        </div>

        {/* Pagination Buttons */}
        <div className='flex justify-center gap-10 items-center py-16'>
          <button 
            disabled={index === 1 || isLoading}
            onClick={() => setindex(index - 1)} 
            className='bg-zinc-800 hover:bg-zinc-700 disabled:opacity-20 text-white px-10 py-3 rounded-full font-bold transition-all active:scale-95 border border-zinc-700'
          >
            Prev
          </button>
          <h4>Page {index}</h4>
          <button 
            disabled={isLoading}
            onClick={() => setindex(index + 1)} 
            className='bg-amber-500 hover:bg-amber-400 text-black px-10 py-3 rounded-full font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App