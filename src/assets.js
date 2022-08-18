import { Howl, Howler } from "howler";

import ambiantSnd from "../assets/sounds/ambiant.mp3";
import popSnd from "../assets/sounds/pop.mp3";
import lifeLostSnd from "../assets/sounds/lifelost.mp3";
import healSnd from "../assets/sounds/healing.mp3";

import pikachuImg from "../assets/img/pikachu.png";
import pikachuSnd from "../assets/sounds/pikachu.mp3";

import charmanderImg from "../assets/img/charmander.png";
import charmanderSnd from "../assets/sounds/charmander.mp3";

import squirtleImg from "../assets/img/squirtle.png";
import squirtleSnd from "../assets/sounds/squirtle.mp3";

import eeveeImg from "../assets/img/eevee.png";
import eeveeSnd from "../assets/sounds/eevee.mp3";

import piplupImg from "../assets/img/piplup.png";
import piplupSnd from "../assets/sounds/piplup.mp3";

import dratiniImg from "../assets/img/dratini.png";
import dratiniSnd from "../assets/sounds/dratini.mp3";

import psyduckImg from "../assets/img/psyduck.png";
import psyduckSnd from "../assets/sounds/psyduck.mp3";

import pidgeyImg from "../assets/img/pidgey.png";
import pidgeySnd from "../assets/sounds/pidgey.mp3";

import meowthImg from "../assets/img/meowth.png";
import meowthSnd from "../assets/sounds/meowth.mp3";

import gastlyImg from "../assets/img/gastly.png";
import gastlySnd from "../assets/sounds/gastly.mp3";

import jigglypuffImg from "../assets/img/jigglypuff.png";
import jigglypuffSnd from "../assets/sounds/jigglypuff.mp3";

export const tabPokemons = [
  {
    name: "Pikachu",
    img0: `background-image: url(${pikachuImg});`,
    sound: new Howl({ src: [pikachuSnd], volume: 0.4 }),
  },
  {
    name: "Charmander",
    img0: `background-image: url(${charmanderImg});`,
    sound: new Howl({ src: [charmanderSnd], volume: 0.4 }),
  },
  {
    name: "Squirtle",
    img0: `background-image: url(${squirtleImg});`,
    sound: new Howl({ src: [squirtleSnd], volume: 0.4 }),
  },
  {
    name: "Eevee",
    img0: `background-image: url(${eeveeImg});`,
    sound: new Howl({ src: [eeveeSnd], volume: 0.4 }),
  },
  {
    name: "Piplup",
    img0: `background-image: url(${piplupImg});`,
    sound: new Howl({ src: [piplupSnd], volume: 0.4 }),
  },
  {
    name: "Dratini",
    img0: `background-image: url(${dratiniImg});`,
    sound: new Howl({ src: [dratiniSnd], volume: 0.4 }),
  },
  {
    name: "Psyduck",
    img0: `background-image: url(${psyduckImg});`,
    sound: new Howl({ src: [psyduckSnd], volume: 0.4 }),
  },
  {
    name: "Pidgey",
    img0: `background-image: url(${pidgeyImg});`,
    sound: new Howl({ src: [pidgeySnd], volume: 0.4 }),
  },
  {
    name: "Meowth",
    img0: `background-image: url(${meowthImg});`,
    sound: new Howl({ src: [meowthSnd], volume: 0.4 }),
  },
  {
    name: "Gastly",
    img0: `background-image: url(${gastlyImg});`,
    sound: new Howl({ src: [gastlySnd], volume: 0.4 }),
  },
  {
    name: "Jigglypuff",
    img0: `background-image: url(${jigglypuffImg});`,
    sound: new Howl({ src: [jigglypuffSnd], volume: 0.4 }),
  },
];

export const spawn = [
  { position: "top: 12rem; left: 4rem;", proximity: 0.6 },
  { position: "top: 18rem; left: 2rem;", proximity: 0.8 },
  { position: "top: 26rem; left: 1rem;", proximity: 1 },
  { position: "top: 12rem; left: 12rem;", proximity: 0.6 },
  { position: "top: 18rem; left: 12rem;", proximity: 0.8 },
  { position: "top: 26rem; left: 13rem;", proximity: 1 },
];

export const ambiantSound = new Howl({
  src: [ambiantSnd],
  volume: 0.2,
});

export const popSound = new Howl({
  src: [popSnd],
  volume: 0.7,
});

export const lostSound = new Howl({
  src: [lifeLostSnd],
  volume: 1,
});

export const healingSound = new Howl({
  src: [healSnd],
  volume: 0.5,
});
