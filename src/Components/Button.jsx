import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef(({ click, text, style, white, link }, ref) => {
  return (
    <Link
      to={link ? link : ""}
      ref={ref}
      onClick={click}
      className={`h-fit w-fit overflow-hidden ${white ? "hover:text-white text-black border-black bg-[#ffffffaf]" :"hover:text-black border-white bg-[#000000af]  "}  group z-20 flex-wrap py-3 px-8 tracking-widest text-sm font-bold uppercase text-text border-[4px] ${style} `}
    >
      <span className="relative z-20">{text}</span>
      <div className={`transition-all duration-300 left-0 z-10 top-0 translate-y-20 group-hover:translate-y-0 ${white ? "bg-[#000000]" :"bg-[#ffffff]"} w-full h-full absolute`}></div>
    </Link>
  );
});

export default Button;
