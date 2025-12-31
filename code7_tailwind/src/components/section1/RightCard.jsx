// import React from 'react'
// import RightCardContent from './RightCardContent'

// const RightCard = (props) => {
//   return (
//     <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
//       <img className='h-full w-full object-cover' src={props.img}/>
//        <RightCardContent id={props.id} tag={props.tag}/>
//     </div>
//   )
// }

// export default RightCard

import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-85 rounded-[3rem] group cursor-pointer'>
      <img className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' src={props.img}/>
      {/* Dark gradient for text readability */}
      <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500'></div>
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
