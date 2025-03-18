import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Link, useParams } from "react-router-dom";
import { project } from "../project_list";
import Button from "../Components/Button";
import { div, image } from "motion/react-client";
import pixelGarsStyle from "/images/pixel/garsstylé.gif";
import pixelraun from "/images/pixel/raun.gif";
import pixelild from "/images/pixel/ild.png";
export default function ProjectsPage() {
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
    <div className="  pb-[60px]  font-mark relative">
      <Button
        style={"fixed left-10 top-8"}
        click={() => setOpenModal(!openModal)}
        text={"info"}
      />
      {/* Bouton pour ouvrir le modal */}

      {/* Overlay */}
      <div onClick={handleClickOutside}>
        <div
          onClick={handleClickOutside}
          className={`transition-all pointer-events-none ease-in-out duration-300 w-[100vw] min-h-screen z-0 h-screen fixed ${
            openModal ? "bg-[#0000009b]" : "bg-[#00000000] "
          }`}
        ></div>

        <div
          onClick={handleClickOutside}
          className={` w-[100vw] min-h-screen z-10 h-screen fixed ${
            openModal ? "block" : "hidden"
          }`}
        ></div>

        {/* Modal */}
        <div
          ref={modalRef}
          style={{ transform: "translateX(-100%)" }} // Position initiale CSS sans animation
          className=" p-12 gap-12 flex flex-col pt-28 h-full bg-black sm:w-[50%] md: lg:w-[40%] fixed"
        >
          <div className="gap-8 flex flex-col">
            <h1 className="tracking-wide text-[48px] break-words uppercase">
              {projectData.name}
            </h1>
            <div className="flex flex-col gap-3">
              <h3 className="text-[24px] font-bold">Synopsis</h3>
              <p className="font-ligh text-[12px] h">
                {projectData.synopsis.split("<br/>").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
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
            to={openModal ? "" : "/"}
            className={`relative  text-[30px] text-white`}
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
      <div className="flex  mb-24   flex-col gap-24">
        {projectData.img &&
          projectData.img.map((image, imgIndex) => (
            <div key={imgIndex}>
              {image.grid && (
                <div className={image.gridName}>
                  {image.grid.map((item, index) => (
                    <img key={`grid-${imgIndex}-${index}`} src={item} alt="" />
                  ))}
                </div>
              )}

              {image.img && (
                <img
                  key={`img-${imgIndex}`}
                  className="w-full"
                  src={image.img}
                  alt={`Illustration ${imgIndex + 1}`}
                />
              )}

              {image.video &&
                image.video.map((item, index) => (
                  <video
                    key={`video-${imgIndex}-${index}`}
                    className="w-full"
                    src={item}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ))}
            </div>
          ))}
      </div>

      {/* <div className="flex z-50 fixed mb-12 bottom-0 left-[50%] translate-x-[-50%] pointer-events-auto  justify-center items-center">
        <div
          className={`mt-[60px] overflow-hidden flex-wrap flex items-center py-3 px-4 gap-4 font-medium   h-fit w-fit  text-xs uppercase text-white border-white bg-[#000000af] border-[4px]`}
        >
          <Link
            onClick={() => setOpenModal(true)}
            className={`${id <= 1 ? "hidden" : "block"}  `}
            to={`/projects/${parseInt(id) - 1}`}
          >
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
          <Link
            onClick={() => setOpenModal(true)}
            className={`${id >= project.length ? "hidden" : "block"}  `}
            to={`/projects/${parseInt(id) + 1}`}
          >
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
      </div> */}

      <div
        className={`fixed font-medium mb-12 bottom-0 left-[50%] translate-x-[-50%]   py-3 px-4 gap-4  h-fit w-fit  text-xs uppercase items-center flex overflow-hidden hover:text-black border-white bg-[#000000af] text-white   transition-all   group z-20  flex-wrap tracking-widest text-text border-[4px]`}
      >
        <Link
          onClick={() => setOpenModal(true)}
          className={`relative z-20 ${id <= 1 ? "hidden" : "block"}  `}
          to={`/projects/${parseInt(id) - 1}`}
        >
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
        <span className="relative z-20">Autre projets</span>
        <Link
          onClick={() => setOpenModal(true)}
          className={`relative z-20 ${
            id >= project.length ? "hidden" : "block"
          }  `}
          to={`/projects/${parseInt(id) + 1}`}
        >
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
        <div
          className={`transition-all duration-300 left-0 z-10 top-0 translate-y-20 group-hover:translate-y-0 bg-[#ffffff]  w-full h-full absolute`}
        ></div>
      </div>
    </div>
  );
}
