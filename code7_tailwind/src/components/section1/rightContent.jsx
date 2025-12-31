import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id="right" className='h-full  p-4 w-3/4 flex overflow-x-auto flex-nowrap gap-7'>
     {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    

            


    </div>
  )
}

export default RightContent
