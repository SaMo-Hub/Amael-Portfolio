import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({click, text, style, white, link}) {
  return (

    <Link to={link ? link : "" }
                onClick={click}    
                className={`${style} h-fit w-fit overflow-hidden ${white ? "hover:text-white text-black border-black bg-[#ffffffaf]" :"hover:text-black border-white bg-[#000000af] text-white "}  transition-all   group z-20  flex-wrap py-3 px-8 tracking-widest text-sm font-bold uppercase text-text border-[4px]`}>
                  <span className="relative z-20">{text} </span>  
                  <div className={`transition-all duration-300 left-0 z-10 top-0 translate-y-20 group-hover:translate-y-0 ${white ? "bg-[#000000]" :"bg-[#ffffff]"}  w-full h-full absolute`}></div>
       </Link>
  )
}
