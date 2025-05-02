import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Link, useParams } from "react-router-dom";
import { project } from "../project_list";
import Button from "../Components/Button";
import { motion } from "framer-motion";
import TextRevealX from "../Components/TextRevealX";
import SplitType from "split-type";
import { div } from "motion/react-client";

export default function ProjectsPage() {
  const { id } = useParams(); // Récupérer l'id de l'URL
  const projectData = project.find((p) => p.id === parseInt(id)); // Trouver le projet correspondant
  const listimg = projectData.listImg;
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    console.log(index);
    
    setIndex(listimg.findIndex((img) => img === selectedImage))
    console.log(listimg.findIndex((img) => img === selectedImage));
  },[selectedImage])

  
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenModal(true);
    }, 500); // Temps identique à l'animation

    return () => clearTimeout(timeout); // Nettoyer le timeout au démontage
  }, []);

  const buttonInfoRef = useRef(null);
  const buttonAutreProjetRef = useRef(null);
  const infoRef = useRef(null);
  const imagesRef = useRef([]);
  imagesRef.current = [];
  const containersRef = useRef([]);
  const logicielAnneRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    containersRef.current.forEach((container, index) => {
      if (container) {
        const words = container.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            duration: 1,
            ease: "power2.out",
            delay: 0.3 + index * 0.2, // Delay croissant
          }
        );
      }
    });
    const mots = infoRef.current.querySelectorAll(".word");
    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: 100 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.3 + index * 0.2,
          }
        );
      }
    });
    gsap.fromTo(
      mots,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: "power2.out",
        delay: 1.3, // Delay croissant
      }
    );

    gsap.fromTo(
      buttonInfoRef.current,
      { y: -150 },
      { y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      buttonAutreProjetRef.current,
      { y: 640 },
      { y: 0, duration: 1.2, ease: "power4.out", delay: 1.5 }
    );

    const textItems = [
      ...document.querySelectorAll('[data-animation="text-reveal"]'),
    ];
    const textItemss = [
      ...document.querySelectorAll('[data-animation="text-reveals"]'),
    ];
    textItems.map((element) => {
      // donne le 'text' au programme TextReveal

      const splitted = new SplitType(element, { types: "words" });
      const sliptWords = new SplitType(splitted.words, { types: "words" });

      gsap.to(sliptWords.words, {
        y: "0%",
        duration: 0.5,
        stagger: 0.01,
        ease: "power3",
        delay: 1,
      });
    });
    textItemss.map((element) => {
      // donne le 'text' au programme TextReveal

      const splitted = new SplitType(element, { types: "words" });
      const sliptWords = new SplitType(splitted.words, { types: "words" });

      gsap.to(sliptWords.words, {
        y: "0%",
        duration: 0.5,
        stagger: 0.01,
        ease: "power3",
        delay: 2,
      });
    });
    
  }, []);

  // Gestion des clics en dehors du modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <div className=" bg-black text-white pb-[60px]  font-mark relative">
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: "100%" }}
        exit={{ translateX: 0 }}
        transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
        className="slide-out"
      />

      <Button
        ref={buttonInfoRef}
        style={`fixed ${openModal ? 'bg-[#fff] text-black' : 'bg-[#00000000]'} right-10 top-8`}
        click={() => setOpenModal(!openModal)}
        text={"info"}
      />
      <Button
        ref={buttonInfoRef}
        style={"fixed left-10 top-8"}
        link={"/"}
        text={"home"}
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
            <h1
              ref={(el) => (containersRef.current[0] = el)}
              className="tracking-wide overflow-hidden text-[48px] break-words uppercase"
            >
              {projectData.name.split("").map((word, index) => (
                <div key={index} className="word inline-block">
                  {word}
                </div>
              ))}
            </h1>

            <div className="flex flex-col gap-3">
              <h3
                ref={(el) => (containersRef.current[1] = el)}
                className="text-[24px] overflow-hidden font-bold"
              >
                {"Synopsis".split("").map((word, index) => (
                  <div key={index} className="word inline-block">
                    {word}
                  </div>
                ))}
              </h3>

              <p
                data-animation="text-reveal"
                className="font-ligh overflow-hidden text-[12px] h"
              >
                {projectData.synopsis.split("<br/>").map((line, index) => (
                  <div className="word" key={index}>
                    {line}
                    <br />
                  </div>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 ref={infoRef} className="text-[24px] overflow-hidden font-bold">
              {"Info".split("").map((word, index) => (
                <div key={index} className="word inline-block">
                  {word}
                </div>
              ))}
            </h3>

            <div className="flex flex-col gap-1 text-[12px]">
              <p ref={logicielAnneRef} data-animation="text-reveals">
                Logiciel : {projectData.logiciel}
              </p>
              <p ref={logicielAnneRef} data-animation="text-reveals">
                Année : {projectData.annee}
              </p>
            </div>
          </div>
        </div>

        {/* Bouton de fermeture */}
        {/* <div className="fixed right-10 top-8 z-50 overflow-hidden translate-x-0  group w-8 flex justify-center items-center h-8  ">
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
        </div> */}
      </div>

      {/* Images du projet */}
      <div className="flex  mb-24   flex-col gap-24">
        {projectData.img &&
          projectData.img.map((image, imgIndex) => (
            <div key={imgIndex}>
              {image.grid && (
                <div className={` gap-12 ${image.gridName}`}>
                  {image.grid.map((item, index) => (
                    <img   onClick={() => setSelectedImage(item)}
                    key={`grid-${imgIndex}-${index}`} src={item} alt="" />
                  ))}
                </div>
              )}

              {image.img && (
                <div>

                <img
                  onClick={() => setSelectedImage(image.img)}

                  // ref={(el) => (imagesRef.current[imgIndex] = el)}
                  className="w-full"
                  src={image.img}
                  alt={`Illustration ${imgIndex + 1}`}
                  />
                  </div>
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

      <div
        ref={buttonAutreProjetRef}
        className={`fixed font-medium mb-12 bottom-0 left-[50%] translate-x-[-50%]   py-3 px-4 gap-4  h-fit w-fit  text-xs uppercase items-center flex overflow-hidden hover:text-black border-white bg-[#000000af] text-white      group z-20  flex-wrap tracking-widest text-text border-[4px]`}
      >
        <Link
          
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
   
{selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-[90%] max-h-[90%]"
    >
      {/* Bouton fermer */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      {/* Bouton précédent */}
      {index > 0 && (
        <button
        onClick={() => setSelectedImage(listimg[index - 1])}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-black bg-white p-2 text-4xl"
        >
          ‹
        </button>
      )}

      {/* Bouton suivant */}
      {index < projectData.listImg.length-1  && (
        <button
        onClick={() => setSelectedImage(listimg[index + 1])}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-white p-2 text-4xl"
        >
          ›
        </button>
      )}

      {/* Image affichée */}
      <img
        src={listimg[index]}
        alt={`Illustration ${index + 1}`}
        className="max-w-full max-h-screen object-contain"
      />
    </div>
  </div>
)}


    </div>
  );
}
