import React from 'react'
import Navbar from '../Components/Navbar'
import { project } from '../project_list'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

function HomePageWhite() {
  return (
    <div className='pb-32 bg-white text-black '>
        <Navbar/>

        <div className=''>
            <img className='h-[100vh] w-[100vw] object-cover object- ' src="/images/image.png" alt="" />
        </div>
          <Button white={true} style={"right-10 bottom-10 fixed"}  text={"contact"}/>
          <Button white={true} link={'/'}  style={"left-10 bottom-10 absolute"}  text={"portfolio illustration"}/>

       

        

        <div className='mx-8 lg:mx-[120px] mt-[180px] '>
        <h1 className='font-mark tracking-wide text-2xl sm:text-4xl md:text-5xl uppercase'>Selection <br/> des projets</h1>
        <div className='mt-4 sm:mt-14 flex flex-col gap-2 sm:gap-5'>
            {project.map((item)=> (
                <Link to={`/projectswhite/${item.id}`}>
                  <div className='bg-black h-[30vw] w-full overflow-hidden'>
                    <img className='h-full object-cover hover:opacity-75 hover:scale-110 transition-all duration-300 ease-in-out w-full' src={item.cover} alt="" />
                  </div>
                </Link>
            ))}
        </div>

        <div className='mt-[240px]'>
          <p className='text-5xl font-bold'>
          Animation studio founded in 2014. <br/>Hidden in Paris.
          </p>

          <div className='mt-[80px] flex gap-5'>
          <Button style={'relative'}  text={"contact"}/>
          <Button style={"relative "}  text={"ffsf"}/>

          </div>
        </div>
    </div>
    </div>
  )
}

export default HomePageWhite