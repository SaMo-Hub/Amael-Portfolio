import React from 'react'
import Navbar from '../Components/Navbar'
import { project } from '../project_list'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import videoPres from '/public/images/videoPres.mp4'
import { motion } from 'framer-motion';
function HomePage() {
  return (
    <div className='pb-32 bg-black text-white '>
        <Navbar/>
        <motion.div
     animate={{ translateX: '-100%', }}
     exit={{ translateX: 0 }}
     transition={{ duration: 0.6, ease:'easeIn' }}
     className='slide-in'
      />
   
        <div className=''>
        <video
                    className="h-[100vh] object-cover  w-[100vw]"
                    src={videoPres}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
            {/* <img className=' object-cover object- ' src="/images/image.png" alt="" /> */}
        </div>
          {/* <Button style={"right-10 bottom-10 fixed"}  text={"contact"}/> */}
          <Button link={'/white'}  style={"left-10 bottom-10 absolute"}  text={"portfolio graphisme"}/>

       

        

        <div className='mx-8 lg:mx-[120px] mt-[180px] '>
        <h1 className='font-mark tracking-wide text-2xl sm:text-4xl md:text-5xl uppercase'>Selection <br/> des projets</h1>
        <div className='mt-4 sm:mt-14 flex flex-col gap-2 sm:gap-5'>
            {project.map((item)=> (
                <Link to={`/projects/${item.id}`}>
                  <div className='bg-black h-[30vw] w-full overflow-hidden'>
                    <img className='h-full object-cover hover:opacity-75 hover:scale-110 transition-all duration-300 ease-in-out w-full' src={item.cover} alt="" />
                  </div>
                </Link>
            ))}
        </div>

        {/* <div className='mt-[240px]'>
          

          <div className='mt-[80px] flex gap-5'>
          <Button style={'relative'}  text={"contact"}/>
          <Button style={"relative "}  text={"ffsf"}/>

          </div>
        </div> */}
    </div>
    </div>
  )
}

export default HomePage