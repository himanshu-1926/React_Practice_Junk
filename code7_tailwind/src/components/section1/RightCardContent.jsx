// import React from 'react'

// const RightCardContent = (props) => {
//     return (
//         <div>
//             <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
//                 <h2 className='bg-white rounded-full text-2xl font-bold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
//                 <div><p className='text-xl leading-normal text-white mb-14'>
//                     Prime customers, that have access to bank credit and are satisfied with the current product.

//                 </p>
//                     <div className='flex justify-between'>
//                         <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
//                         <button className=' bg-blue-600 text-white font-medium px-5 py-1 rounded-full'><img className='w-5 h-5 object-contain invert font-bold' src="https://static.thenounproject.com/png/1053750-200.png" /></button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default RightCardContent

import React from 'react'

const RightCardContent = (props) => {
    // Defined colors for all your categories
    const getTagColor = (tag) => {
        const t = tag.trim().toLowerCase();
        if (t === "satisfied") return "bg-[#1d4ed8]"; 
        if (t === "underserved") return "bg-[#00bfa5]"; 
        if (t === "underbanked") return "bg-[#7c3aed]"; // Purple
        if (t === "average") return "bg-[#4b5563]";     // Gray
        if (t === "moderate") return "bg-[#ea580c]";    // Orange
        return "bg-white/20 backdrop-blur-md"; 
    }

    return (
        <div className='absolute inset-0 p-8 flex flex-col justify-between z-10'>
            {/* Top: Number */}
            <div className='h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md'>
                <span className='text-xl font-bold text-black'>{props.id + 1}</span>
            </div>
            
            {/* Bottom Section */}
            <div>
                <p className='text-white text-lg font-medium leading-snug mb-8 opacity-90'>
                    Prime customers, that have access to bank credit and are satisfied with the current product.
                </p>
                
                <div className='flex justify-between items-center w-full'>
                    {/* Tag Button with Pointer Cursor */}
                    <button className={`${getTagColor(props.tag)} text-white text-xs font-bold tracking-widest px-8 py-4 rounded-full uppercase cursor-pointer hover:brightness-110 transition-all`}>
                        {props.tag}
                    </button>
                    
                    {/* Small Round Arrow - Fixed Hover invisibility */}
                    <button className='h-12 w-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white transition-all group/btn'>
                        <img 
                            className='w-4 h-4 invert group-hover/btn:invert-0 transition-all' 
                            src="https://static.thenounproject.com/png/1053750-200.png" 
                            alt="arrow"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent