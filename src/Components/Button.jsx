import React from 'react'

export default function Button({click, text, style}) {
  return (

    <button 
                onClick={click}    
                className={`${style} h-fit w-fit overflow-hidden  transition-all hover:text-black  group z-20  flex-wrap py-3 px-8 tracking-widest text-sm font-bold uppercase text-text border-white bg-[#000000af] border-[4px]`}>
                  <span className="relative z-20">{text} </span>  
                  <div className="transition-all duration-300 left-0 z-10 top-0 translate-y-20 group-hover:translate-y-0 bg-[#ffffff] w-full h-full absolute"></div>
       </button>
  )
}
