// import React from 'react'
// const LeftContent = () => {
//   return (
//     <div className='h-full flex flex-col justify-between w-1/3 '>
//       <div className='p-6'>
//         <h3 className=' mb-7 text-6xl font-bold leading-[1.1]'>Prospective <br/><span className='inline-flex items-center bg-gray-200 rounded-full px-4 h-[1.1em] text-gray-800'>customer</span><br/>segmentation</h3>
//         <p className='text-xl font-medium text-gray-600'>Depending on customer satisfaction and access 
//   to banking products, potentia target audience 
//   can be divided into three groups.</p>
//       </div>
//       <div className='w-16 text-8xl'>
//         <img src="https://cdn-icons-png.freepik.com/512/2223/2223606.png"className='w-full h-auto brightness-0'/>
//       </div>
//     </div>
//   )
// }

// export default LeftContent

import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-[35%] py-4'>
      <div>
        <h3 className='text-7xl font-bold leading-[1.05] tracking-tighter text-gray-900'>
          Prospective <br/>
          <span className='inline-block bg-gray-100 rounded-full px-8 py-1 my-2 border border-gray-200'>
            customer
          </span><br/>
          segmentation
        </h3>
        <p className='mt-10 text-xl text-gray-500 leading-relaxed max-w-sm'>
          Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
        </p>
      </div>
      
      {/* Bottom Left Arrow Fixed */}
      <div className='group/arrow w-24 h-24 flex items-center justify-center rounded-full border border-gray-200 cursor-pointer hover:bg-black transition-all duration-300'>
        <img 
          src="https://cdn-icons-png.freepik.com/512/2223/2223606.png" 
          className='w-12 h-12 brightness-0 transition-all group-hover/arrow:invert'
          alt="arrow icon"
        />
      </div>
    </div>
  )
}

export default LeftContent