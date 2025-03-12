import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, useParams } from 'react-router-dom';
import { project } from '../project_list';
import Button from '../Components/Button';

export default function ProjectsPage() {
    const { id } = useParams(); // Récupérer l'id de l'URL
    const projectData = project.find((p) => p.id === parseInt(id)); // Trouver le projet correspondant
    
    const [openModal, setOpenModal] = useState(false); // État du modal
    const modalRef = useRef(null);

    // Animation à l'ouverture et à la fermeture du modal
    useEffect(() => {
      if (modalRef.current) {
        if (openModal) {
          // Animation pour ouvrir le modal
          gsap.to(modalRef.current, {
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
        } else {
          // Animation pour fermer le modal
          gsap.to(modalRef.current, {
            x: '-100%',
            duration: 0.6,
            ease: 'power2.inOut',
          });
        }
      }
    }, [openModal]);

    // Gestion des clics en dehors du modal
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          setOpenModal(false);
        }
    };

    return (
        <div className='  pb-[60px]  font-mark relative'>
          <Button style={"fixed left-10 top-8"} click={() => setOpenModal(!openModal)} text={"info"}/>
            {/* Bouton pour ouvrir le modal */}
          

              

            {/* Overlay */}
            <div 
              onClick={handleClickOutside} 
              className={`transition-all w-[100vw] min-h-screen z-0 h-screen fixed ${openModal ? 'bg-[#0000009b]' : 'bg-[#00000000]'}`}
            >
                {/* Modal */}
                <div 
                  ref={modalRef} 
                  style={{ transform: 'translateX(-100%)' }} // Position initiale CSS sans animation
                  className=' p-12 gap-12 flex flex-col pt-28 h-full bg-black sm:w-[50%] md: lg:w-[40%] fixed'
                >
                    <div className='gap-8 flex flex-col'>
                      <h1 className='tracking-wide text-[48px] break-words uppercase'>{projectData.name}</h1>
                      <div className='flex flex-col gap-3'>
                        <h3 className='text-[24px] font-bold'>Synopsis</h3>
                        <p className='font-ligh text-[12px] h'>{projectData.synopsis}</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h3 className='font-bold text-[24px]'>Infos</h3>
                      <div className='flex flex-col gap-1 text-[12px]'>
                        <p>Logiciel : {projectData.logiciel}</p>
                        <p>Année : {projectData.annee}</p>
                      </div>
                    </div>
                </div>

              {/* Bouton de fermeture */}
              <div className='fixed right-10 top-8 z-50 overflow-hidden translate-x-0  group w-8 flex justify-center items-center h-8  '>
                  <button 
                    onClick={() => setOpenModal(false)}
                    className={`absolute text-[30px]  text-white`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${openModal ? '' : '-translate-x-20'}   transition-all duration-500 ease-in-out size-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>

                  </button>
                     <Link to={openModal ? "" : '/'} className={`relative  text-[30px] text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${openModal ? 'translate-x-20' : ''}   transition-all duration-500 ease-in-out size-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>    
                  </Link>
                 
                </div>

            </div>

            {/* Images du projet */}
            <div className='flex flex-col gap-24'>
              {projectData.img.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  className='w-full' 
                  src={image} 
                  alt={`Illustration ${imgIndex + 1}`} 
                />
              ))}
            </div>
            <div className='flex justify-center items-center'>

            <button 
              onClick={() => setOpenModal(!openModal)}    
              className={`mt-[60px] flex-wrap py-3 px-4 font-medium w-auto text-xs uppercase text-white border-white bg-[#000000af] border-[4px]`}>
                Autre projets
            </button>
                </div>
        </div>
    );
}
