//imports
import { Howl, Howler } from "howler";
import { tabPokemons, spawn, ambiantSound, popSound, lostSound, healingSound } from "./assets";
import { fillInPokeball } from "./functions";

//variables doc
const fs = document.querySelector(".first-screen");
const ds = document.querySelector(".description-screen");
const gs = document.querySelector(".game-screen");
const pokemons = document.querySelector(".gs-pokemons");
const pokeballContainer = document.querySelector(".gs-pokeball-container");

//Global howler volume
Howler.volume(0.05);

let timeOut = true;
let timeOutHit = true;
let keyPokemon;
let level = 1;

const baseSpeed = 1500;
let speed = baseSpeed;

const totLifes = 5;
let lifes = totLifes;
let tabPokeball = fillInPokeball(totLifes);

let tabPokemonsHere = [...tabPokemons];
let gameInterval;

/* browse between screens */
fs.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    fs.classList.remove("active");
    ds.classList.add("active");
  }
});

ds.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    ds.classList.remove("active");
    gs.classList.add("active");
    init();
  }
});

function init() {
  reset();
  gameInterval = setInterval(spawnPokemon, speed);
  printPokeball();
  ambiantSound.play();
}

function printPokeball() {
  pokeballContainer.innerHTML = "";
  tabPokeball.forEach((e) => {
    pokeballContainer.innerHTML += e;
  });

  const lvlContainer = document.querySelector(".gs-lvl-container");
  lvlContainer.innerHTML = `<div class="gs-lvl">Lvl. ${level}</div>`;
}

function removeLife() {
  if (lifes !== 1) {
    lostSound.play();
    tabPokeball[lifes - 1] = `<div class="gs-pokeball lost"></div>`;
    lifes--;
    printPokeball();
  } else {
    lose();
  }
}

function addLifes(amount) {
  if (amount + lifes > tabPokeball.length) {
    tabPokeball = fillInPokeball(totLifes);
    lifes = totLifes;
    return;
  } else {
    for (let i = 0; i < amount; i++) {
      tabPokeball[lifes] = `<div class="gs-pokeball"></div>`;
      lifes++;
    }
  }
  printPokeball();
}

function spawnPokemon() {
  //math random table length
  //splice pokemon if hit
  if (tabPokemonsHere.length < 1) {
    winCondition();
    return;
  }
  keyPokemon = Math.floor(Math.random() * tabPokemonsHere.length);
  let spawnRnd = Math.floor(Math.random() * spawn.length);

  tabPokemonsHere[keyPokemon].sound.play();
  pokemons.innerHTML = `<div class="gs-pokemon" style="
          width: ${100 * spawn[spawnRnd].proximity}px;
          height: ${100 * spawn[spawnRnd].proximity}px;
          position: absolute; 
          ${tabPokemonsHere[keyPokemon].img0}
          background-size: contain;
          background-repeat: no-repeat;
          ${spawn[spawnRnd].position}">
        </div>`;

  //if hit (à sortir du spawnPokemon)
}
gs.addEventListener("click", (e) => {
  if (e.target.classList.contains("gs-pokemon")) {
    if (timeOutHit) {
      timeOutHit = false;
      tabPokemonsHere.splice(keyPokemon, 1);
      e.target.classList.add("gs-pokemon-catched");
      popSound.play();
      setTimeout(() => {
        timeOutHit = true;
      }, 50);
    }
    setTimeout(() => {
      pokemons.innerHTML = "";
    }, 80);
  } else {
    if (timeOut) {
      removeLife();
      timeOut = false;
      //cooldown to avoid removing lifes too quick
      setTimeout(() => {
        timeOut = true;
      }, 50);
    }
  }
});

function reset() {
  clearInterval(gameInterval);
  tabPokemonsHere = [...tabPokemons];
  pokeballContainer.innerHTML = "";
}

function lose() {
  speed = baseSpeed;
  addLifes(totLifes);
  reset();
  gs.classList.remove("active");
  document.querySelector(".ds-title").innerHTML = `You lost at level <strong>${level}</strong>`;
  level = 1;
  document.querySelector(".ds-description").innerHTML = `You didn´t manage to catch them all... Sad.`;
  document.querySelector(".ds-button").innerHTML = `Lvl ${level} Try again ->`;
  ds.classList.add("active");
}

function winCondition() {
  reset();
  level++;
  let lifesWon = Math.floor(Math.random() * 3);
  addLifes(lifesWon);
  let messageLifes = "";
  if (lifesWon > 0) {
    healingSound.play();
    messageLifes += `<div style="margin-block-start: 0.5rem; display: flex; align-items: center; text-align: center;">You got `;
    for (let i = 0; i < lifesWon; i++) {
      messageLifes += '<div class="gs-pokeball pokeball" style="display: inline-block; margin: 0 0.2rem;"></div>';
    }
    messageLifes += " pokeballs</div>";
  } else {
    messageLifes = "You got nothing, bad luck!";
  }
  if (speed > 300) {
    speed = baseSpeed - (baseSpeed / 10) * level;
  }
  console.log(speed);
  gs.classList.remove("active");
  document.querySelector(".ds-title").innerHTML = `You succeeded level ${level - 1}, well done!`;
  document.querySelector(".ds-description").innerHTML = `Here might be a little something... <br/><strong>${messageLifes}</strong>`;
  document.querySelector(".ds-button").innerHTML = `Lvl ${level} Catch them ${speed}->`;
  ds.classList.add("active");
}

const ball = document.querySelector(".gs-ball");
gs.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    return;
  }
  console.log(e.target.parentNode.parentNode);
  if (e.target.classList.contains("gs-pokemon")) {
    let letruc = e.target.getAttribute("style").split("no-repeat;").pop();
    console.log(letruc);
    ball.setAttribute("style", `${letruc}`);
    console.log(ball);
  } else {
    ball.setAttribute("style", `top:${e.offsetY}px; left:${e.offsetX}px;`);
  }
  ball.classList.add("gs-ball-anim");
  ball.addEventListener("animationend", function () {
    console.log("anim end");
    ball.classList.remove("gs-ball-anim");
  });
});
