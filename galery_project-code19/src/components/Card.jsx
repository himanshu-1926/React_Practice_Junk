import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target='_blank' rel="noreferrer">
            <div className='aspect-square overflow-hidden bg-zinc-800 rounded-sm shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]'>
              <img className='h-full w-full object-cover grayscale-25 group-hover:grayscale-0 transition-all duration-500' src={props.elem.download_url} alt={props.elem.author} />
            </div>
            <h2 className="text-[10px] uppercase tracking-tighter mt-2 text-zinc-500 group-hover:text-white transition-colors truncate">
              {props.elem.author}
            </h2>
          </a>
    </div>
  )
}

export default Card
