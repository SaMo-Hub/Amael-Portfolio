import coeur from "/images/3D/coeur.png";
import pianist from "/images/3D/pianist.png";

import premiereVideo from "/images/video3D/0000-0281.mp4";
import secondVideo from "/images/video3D/0aze.mp4";
import image from "/images/image.png";

import pumpchara from "/images/pumking/chara.png";
import pumpcroquisSecond from "/images/pumking/croquisSecond.png";
import pump1 from "/images/pumking/1.png";
import pump2 from "/images/pumking/2.png";
import pump3 from "/images/pumking/3.png";
import pump4 from "/images/pumking/4.png";
import pump5 from "/images/pumking/5.png";
import pumpgifporte from "/images/pumking/gifporte.gif";
import pumpcroquis2 from "/images/pumking/croquis2.png";
import pumpcroquis1 from "/images/pumking/croquis1.png";
import pumpcgifpump from "/images/pumking/gifpumking.gif";
import pumpaffihce from "/images/pumking/affiche.png";

import colorcroquisPiano1 from "/images/colorIllu/aa.png";
import colorcroquisPiano2 from "/images/colorIllu/aaaa.png";
import colorblue from "/images/colorIllu/blue.png";
import colorgreen from "/images/colorIllu/green.png";
import colorcroquisSoleil1 from "/images/colorIllu/CroquisSoleil1.png";
import colorcroquisSoleil2 from "/images/colorIllu/CroquisSoleil2.png";
import colorSoleil from "/images/colorIllu/Soleil.png";


import colorimage from "/images/colorIllu/image.png";
import colorimage2 from "/images/colorIllu/image2.png";
import colormeh from "/images/colorIllu/meh.png";
import colorplusmeh from "/images/colorIllu/plusmeh.png";



import volleyaffiche from "/images/volley/affiche.png";
import volleyciel from "/images/volley/soleil.png";
import volleysoir from "/images/volley/soir.png";
import volleycoucherdesoleil from "/images/volley/coucherdesoleil.png";



// import pixelGarsStyle from "/images/pixel/garsstylé.gif";
// import pixelraun from "/images/pixel/raun.gif";
// import pixelild from "/images/pixel/ilds.png";
// import pixegrenouille from "/images/pixel/azeaze.gif";

export const project = [
  {
    name: "Pumpking",
    cover: pump1,
    listImg:[pump1,pumpchara, pumpcroquisSecond, pump2,pump3,pump4,pump5],
    img: [
      { img: pump1 },
      { img: pumpcgifpump },
      {
        grid: [pumpchara, pumpcroquisSecond, pumpcroquisSecond],
        gridName: "grid-1-2",
      },
      { img: pump3 },
      { grid: [pump4, pump5], gridName: "grid-2" },
      { img: pump2 },
      { grid: [pumpaffihce,pumpgifporte, ], gridName: "grid-2" },
      { grid: [pumpcroquis1, pumpcroquis2], gridName: "grid-2" },
    ],
    id: 1,
    logiciel: "Photoshop and traditional",
    annee: "2023 - 2025",
    categori: "illustration",
    synopsis:
      " Le projet met en scène un aventurier téméraire qui, poussé par sa soif de découverte, s’engage dans une forêt mystérieuse. Son ascension vers le sommet d’une montagne le mène à une porte énigmatique : l’entrée du Royaume de Pumking, un monde aussi fascinant que redoutable.<br/><br/>Curieux et incapable de résister à l’appel de l’inconnu, il cherche un moyen d’y pénétrer, ignorant que ce royaume est en réalité un gigantesque jeu. Chaque épreuve qui l’attend est un défi, de plus en plus dangereux, où l’ingéniosité et la persévérance seront ses seules armes pour espérer s’en sortir.",
  },
  {
    name: "Illustration",
    cover: colorblue,
    listImg:[colorblue,colorcroquisPiano2, colorcroquisPiano1, colorgreen,colorplusmeh,colorcroquisSoleil1,colorcroquisSoleil2,colorSoleil,colormeh],

    img: [

      { img: colorblue },
      { grid: [colorcroquisPiano2, colorcroquisPiano1], gridName: "grid-2" },
      { img: colorgreen },
      { img: colorplusmeh },
      { grid: [colorcroquisSoleil1, colorcroquisSoleil2], gridName: "grid-2" },
      { img: colorSoleil },
      { img: colormeh },
    ],
    id: 2,
    logiciel: "Photoshop",
    annee: "2024",
    categori: "illustration",
    synopsis:
      "Ce projet d’illustration repose sur l’utilisation de quatre couleurs emblématiques, chacune associée à un thème spécifique : le vert pour la nature, le bleu pour la mer, le rose pour les nuages et le jaune pour le soleil. L’objectif était de créer une série cohérente et évocatrice, où chaque couleur incarne pleinement l’ambiance et les émotions liées à son thème. J’ai porté une attention particulière à l’équilibre visuel.",
  },
  {
    name: "3D",
    cover: coeur,
    listImg:[coeur,pianist],
    img: [{ img: coeur }, { img: pianist }],
    id: 3,
    logiciel: "Photoshop",
    annee: "2025",
    categori: "illustration",
    synopsis:
      "In a small boarding school lost in the middle of the Cantal mountains, five teenagers spend the Autumn holidays with their jaded supervisor, Lena. But when they accidentally get cursed by a terrible witch, all hell breaks loose and the terrifying creatures of French folklore come after them…",
  },

  {
    name: "Animation 2d",
    cover: image,
    listImg:[premiereVideo, secondVideo],
    img: [{ video: [premiereVideo, secondVideo] }],
    id: 4,
    logiciel: "Blender and Animate",
    annee: "2023- 2025",
    categori: "illustration",
    synopsis:
      "Ce projet m’a permis d’explorer l’interaction entre animation 2D et 3D à travers Blender. Mon objectif était de tirer parti des atouts de chaque médium : la 3D pour structurer l’espace et assurer la cohérence des volumes, et la 2D pour apporter un style graphique plus expressif et dynamique inspiré de l’artiste Dédouze",
  },
  {
    name: "Volleyball",
    cover: volleyaffiche,
    listImg:[volleyaffiche,volleyciel,volleysoir,volleycoucherdesoleil],

    img: [
      {img:volleyaffiche},
      {img:volleysoir},
      {img:volleycoucherdesoleil},
      {img:volleyciel},
    ],
    id: 5,
    logiciel: "Photoshop",
    annee: "2023- 2025",
    categori: "illustration",
    synopsis:
      "Pour ce projet, j’ai conçu une affiche pour le tournoi de volleyball de mon club. Afin de capturer l’intensité et l’énergie de l’événement, j’ai exploré trois illustrations représentant différentes heures de la journée. Après réflexion, j’ai retenu celle de l’après-midi, car elle offrait un éclairage dynamique mettant en valeur les joueurs et l’atmosphère estivale du tournoi.",
  },
  // {
  //   name: "Pixel",
  //   cover: pixelGarsStyle,
  //   img: [
  //     {
  //       grid: [pixelGarsStyle, pixelild, pixelild, pixelild],
  //       gridName: "grid-1-3",
  //     },
  //     {
  //       grid: [pixegrenouille, pixelild, pixelild, pixelild],
  //       gridName: "grid-1-3",
  //     },
  //     { grid: [pixelraun, pixelild, pixelild, pixelild], gridName: "grid-1-3" },
  //   ],
  //   id: 5,
  //   logiciel: "Photoshop",
  //   annee: "2025",
  //   categori: "illustration",
  //   synopsis:
  //     " Il y a deux ans, j’ai entrepris la création d’un jeu vidéo dans le but d’explorer un nouveau type de narration et d’univers visuel. Mon objectif était de façonner un monde original tout en développant mes compétences en conception graphique. Tandis qu’un ami devait s’occuper du développement, il a finalement abandonné le projet, me laissant face au défi d’apprendre le code. Après quelques essais, j’ai réalisé que cet aspect technique ne me correspondait pas, ce qui m’a conduit à mettre le projet en pause. <br/><br/> L’univers du jeu prenait place dans une réalité alternative où le protagoniste, un humain doté de pouvoirs, pouvait se transformer en grenouille. Cette mécanique offrait une approche unique du level design  certaines zones n’étaient accessibles qu’en forme de grenouille, tandis que d’autres nécessitaient son apparence humaine, offrant plusieurs façons de progresser.<br/><br/>L’histoire suivait ce personnage solitaire, élevé par une famille de grenouilles, qui partait à la recherche d’autres humains. Son périple le menait à travers d’anciens royaumes et contrées oubliées, dans une quête mêlant exploration et découverte de soi.",
  // },
];
