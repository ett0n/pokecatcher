import { Howl, Howler } from "howler";
export const tabPokemons = [
  {
    name: "Pikachu",
    img0: "background-image: url(./src/assets/pikachu.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/pikachu.mp3"], volume: 0.4 })
  },
  {
    name: "Charmander",
    img0: "background-image: url(./src/assets/charmander.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/charmander.mp3"], volume: 0.4 })
  },
  {
    name: "Squirtle",
    img0: "background-image: url(./src/assets/squirtle.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/squirtle.mp3"], volume: 0.4 })
  },
  {
    name: "Eevee",
    img0: "background-image: url(./src/assets/eevee.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/eevee.mp3"], volume: 0.4 })
  },
  {
    name: "Piplup",
    img0: "background-image: url(./src/assets/piplup.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/piplup.mp3"], volume: 0.4 })
  },
  {
    name: "Dratini",
    img0: "background-image: url(./src/assets/dratini.png);",
    img1: "",
    img2: "",
    sound: new Howl({ src: ["./src/sounds/dratini.mp3"], volume: 0.4 })
  },
  {
    name: "Psyduck",
    img0: "background-image: url(./src/assets/psyduck.png);",
    sound: new Howl({ src: ["./src/sounds/psyduck.mp3"], volume: 0.4 })
  },
  {
    name: "Pidgey",
    img0: "background-image: url(./src/assets/pidgey.png);",
    sound: new Howl({ src: ["./src/sounds/pidgey.mp3"], volume: 0.4 })
  }
];

export const spawn = [
  { position: "top: 12rem; left: 4rem;", proximity: 0.6 },
  { position: "top: 18rem; left: 2rem;", proximity: 0.8 },
  { position: "top: 26rem; left: 1rem;", proximity: 1 },
  { position: "top: 12rem; left: 12rem;", proximity: 0.6 },
  { position: "top: 18rem; left: 12rem;", proximity: 0.8 },
  { position: "top: 26rem; left: 13rem;", proximity: 1 }
];
