import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Link, useParams } from "react-router-dom";
import { project } from "../project_list";
import Button from "../Components/Button";

export default function ProjectsPageWhite() {
  const { id } = useParams(); // Récupérer l'id de l'URL
  const projectData = project.find((p) => p.id === parseInt(id)); // Trouver le projet correspondant
  console.log(project.length);
  
  const [openModal, setOpenModal] = useState(true); // État du modal
  const modalRef = useRef(null);

  // Animation à l'ouverture et à la fermeture du modal
  useEffect(() => {
    if (modalRef.current) {
      if (openModal) {
        // Animation pour ouvrir le modal
        gsap.to(modalRef.current, {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        // Animation pour fermer le modal
        gsap.to(modalRef.current, {
          x: "-100%",
          duration: 0.6,
          ease: "power2.inOut",
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
    <div className=" bg-white pb-[60px]  text-black font-mark relative">
      <Button
        white={true}
        style={"fixed left-10 top-8"}
        click={() => setOpenModal(!openModal)}
        text={"info"}
      />
      {/* Bouton pour ouvrir le modal */}

      {/* Overlay */}
      <div 
        onClick={handleClickOutside}
        
      >
        <div onClick={handleClickOutside} className={`transition-all pointer-events-none ease-in-out duration-300 w-[100vw] min-h-screen z-0 h-screen fixed ${
          openModal ? "bg-[#0000009b]" : "bg-[#00000000] "
        }`}></div>
        
        <div onClick={handleClickOutside} className={` w-[100vw] min-h-screen z-10 h-screen fixed ${
          openModal ? "block" : "hidden"
        }`}></div>
        
        {/* Modal */}
        <div
          ref={modalRef}
          style={{ transform: "translateX(-100%)" }} // Position initiale CSS sans animation
          className=" p-12 gap-12 flex flex-col pt-28 h-full bg-white sm:w-[50%] md: lg:w-[40%] fixed"
        >
          <div className="gap-8 flex flex-col">
            <h1 className="tracking-wide text-[48px] break-words uppercase">
              {projectData.name}
            </h1>
            <div className="flex flex-col gap-3">
              <h3 className="text-[24px] font-bold">Synopsis</h3>
              <p className="font-ligh text-[12px] h">{projectData.synopsis}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[24px]">Infos</h3>
            <div className="flex flex-col gap-1 text-[12px]">
              <p>Logiciel : {projectData.logiciel}</p>
              <p>Année : {projectData.annee}</p>
            </div>
          </div>
        </div>

        {/* Bouton de fermeture */}
        <div className="fixed right-10 top-8 z-50 overflow-hidden translate-x-0  group w-8 flex justify-center items-center h-8  ">
          <button
            onClick={() => setOpenModal(false)}
            className={`absolute text-[30px] pointer-events-auto  text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`${
                openModal ? "" : "-translate-x-20"
              }   transition-all duration-500 ease-in-out size-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            to={openModal ? "" : "/white"}
            className={`relative  text-[30px] text-black`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`${
                openModal ? "translate-x-20" : ""
              }   transition-all duration-500 ease-in-out size-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Images du projet */}
      <div className="flex flex-col gap-24">
        {projectData.img.map((image, imgIndex) => (
          <img
            key={imgIndex}
            className="w-full"
            src={image}
            alt={`Illustration ${imgIndex + 1}`}
          />
        ))}
      </div>
      <div className="flex pointer-events-auto  justify-center items-center">
        <div
          className={`mt-[60px] flex-wrap flex items-center py-3 px-4 gap-4 font-medium w-auto text-xs uppercase text-black border-black bg-[#ffffffaf] border-[4px]`}
        >
      <Link className={`${id<=1 ? 'hidden' : "block"}  `} to={`/projectswhite/${parseInt(id)-1}`} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-[16px] "
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="round"
             d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          </Link>


          <p>Autre projets</p>
          <Link className={`${id>=project.length  ? 'hidden' : "block"}  `} to={`/projectswhite/${parseInt(id)+1}`} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-[16px] "
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
