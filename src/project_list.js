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

import pixelGarsStyle from "/images/pixel/garsstylé.gif";
import pixelraun from "/images/pixel/raun.gif";
import pixelild from "/images/pixel/ilds.png";
import pixegrenouille from "/images/pixel/azeaze.gif";

export const project = [
  {
    name: "Pumpking",
    cover: pump1,
    img: [
      { img: pump1 },
      {
        grid: [pumpchara, pumpcroquisSecond, pumpcroquisSecond],
        gridName: "grid-1-2",
      },
      { img: pump2 },
      { img: pump3 },
      { grid: [pump4, pump5], gridName: "grid-2" },
    ],
    id: 1,
    logiciel: "Photoshop",
    annee: "2025",
    categori: "illustration",
    synopsis:
      "In a small boarding school lost in the middle of the Cantal mountains, five teenagers spend the Autumn holidays with their jaded supervisor, Lena. But when they accidentally get cursed by a terrible witch, all hell breaks loose and the terrifying creatures of French folklore come after them…",
  },
  {
    name: "Illustration",
    cover: colorblue,
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
    annee: "2025",
    categori: "illustration",
    synopsis:
      "In a small boarding school lost in the middle of the Cantal mountains, five teenagers spend the Autumn holidays with their jaded supervisor, Lena. But when they accidentally get cursed by a terrible witch, all hell breaks loose and the terrifying creatures of French folklore come after them…",
  },
  {
    name: "3D",
    cover: coeur,
    img: [{ img: coeur }, { img: pianist }],
    id: 3,
    logiciel: "Photoshop",
    annee: "2025",
    categori: "illustration",
    synopsis:
      "In a small boarding school lost in the middle of the Cantal mountains, five teenagers spend the Autumn holidays with their jaded supervisor, Lena. But when they accidentally get cursed by a terrible witch, all hell breaks loose and the terrifying creatures of French folklore come after them…",
  },

  {
    name: "Video 2d 3d",
    cover: image,
    img: [{ video: [premiereVideo, secondVideo] }],
    id: 4,
    logiciel: "Photoshop",
    annee: "2025",
    categori: "illustration",
    synopsis:
      "In a small boarding school lost in the middle of the Cantal mountains, five teenagers spend the Autumn holidays with their jaded supervisor, Lena. But when they accidentally get cursed by a terrible witch, all hell breaks loose and the terrifying creatures of French folklore come after them…",
  },
  {
    name: "Pixel",
    cover: pixelGarsStyle,
    img: [
      {
        grid: [pixelGarsStyle, pixelild, pixelild, pixelild],
        gridName: "grid-1-3",
      },
      {
        grid: [pixegrenouille, pixelild, pixelild, pixelild],
        gridName: "grid-1-3",
      },
      { grid: [pixelraun, pixelild, pixelild, pixelild], gridName: "grid-1-3" },
    ],
    id: 5,
    logiciel: "Photoshop",
    annee: "2025",
    categori: "illustration",
    synopsis:
      " Il y a deux ans, j’ai entrepris la création d’un jeu vidéo dans le but d’explorer un nouveau type de narration et d’univers visuel. Mon objectif était de façonner un monde original tout en développant mes compétences en conception graphique. Tandis qu’un ami devait s’occuper du développement, il a finalement abandonné le projet, me laissant face au défi d’apprendre le code. Après quelques essais, j’ai réalisé que cet aspect technique ne me correspondait pas, ce qui m’a conduit à mettre le projet en pause. <br/><br/> L’univers du jeu prenait place dans une réalité alternative où le protagoniste, un humain doté de pouvoirs, pouvait se transformer en grenouille. Cette mécanique offrait une approche unique du level design  certaines zones n’étaient accessibles qu’en forme de grenouille, tandis que d’autres nécessitaient son apparence humaine, offrant plusieurs façons de progresser.<br/><br/>L’histoire suivait ce personnage solitaire, élevé par une famille de grenouilles, qui partait à la recherche d’autres humains. Son périple le menait à travers d’anciens royaumes et contrées oubliées, dans une quête mêlant exploration et découverte de soi.",
  },
];
