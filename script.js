const body = document.querySelector("body");
const container = document.querySelector(".container");
const buttonNew = document.querySelector(".btn-new");
const btnClear = document.querySelector(".clear");
const btnRainbow = document.querySelector(".rainbow");
const btnEraser = document.querySelector(".eraser");
const btnColor = document.getElementById("pick-color");
const btnToggle = document.querySelector(".toggle");
const cursor = document.getElementById("grid-proportion");
let span = document.querySelector("span");
span.textContent = `${cursor.value} x ${cursor.value}`;
let currentMode = "color"; // pour le changement de mode de background-color des divs
let btnRainbowPressed = "off"; // pour ajouter/supprimer la couleur d'arrière-plan du bouton Rainbow
let grid = "on";
let target = cursor.value;
let color = "#000";
let isBtnClicked = false;

/// Fonction pour avoir une grid
function makeGrid(number = 16) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let div = document.createElement("div");
      div.style.width = `calc(100% / ${number})`;
      div.style.height = `calc(100% / ${number})`;
      div.classList.add("container-grid");

      container.appendChild(div);
    }
  }
}

//Evènement pour modifier la taille de la grille
cursor.addEventListener("input", (e) => {
  target = e.target.value;
  span.textContent = `${target} x ${target}`;
  container.textContent = "";
  makeGrid(target);
});

/// Fonction pour obtenir une couleur aléatoire
function getRandomColor() {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

// Evènement pour choisir la couleur
btnColor.addEventListener("input", (e) => {
  currentMode = "color";
  color = e.target.value;
  if (btnRainbowPressed === "on") {
    btnRainbowPressed = "off";
    btnRainbow.classList.remove("rainbow-color");
  }
});

//Evènement pour clear la grille
btnClear.addEventListener("click", () => {
  container.textContent = "";
  if (currentMode === "eraser") {
    currentMode = "color";
  }

  makeGrid(target);
});

// Evènement pour avoir les couleurs aléatoires
btnRainbow.addEventListener("click", () => {
  if (currentMode === "eraser") {
    currentMode = "rainbow";
    btnRainbowPressed = "on";
    btnRainbow.classList.toggle("rainbow-color");
  } else if (currentMode === "rainbow") {
    currentMode = "color";
    btnRainbow.classList.toggle("rainbow-color");
    btnRainbowPressed = "off";
  } else if (currentMode === "color") {
    currentMode = "rainbow";
    btnRainbow.classList.toggle("rainbow-color");
    btnRainbowPressed = "on";
  }
});

/// Evènement pour le bouton gomme
btnEraser.addEventListener("click", () => {
  currentMode = "eraser";
  if (btnRainbowPressed === "on") {
    btnRainbowPressed = "off";
    btnRainbow.classList.remove("rainbow-color");
  }
});

//Evènement pour retire le cadre de la grille
btnToggle.addEventListener("click", () => {
  if (grid === "on") {
    grid = "off";
    for (let div of container.children) {
      div.classList.toggle("container-grid");
    }
  } else {
    grid = "on";
    for (let div of container.children) {
      div.classList.toggle("container-grid");
    }
  }
});

//Evènement pour savoir si le bouton de la souris est enfoncé
body.addEventListener("mousedown", (e) => {
  if (e.button == 0) {
    isBtnClicked = true;
    console.log("is drawing");
  }
});

//Evènement pour savoir lorsqu'on arrête d'enfoncé le clique sur le bouton de la souris
body.addEventListener("mouseup", () => {
  isBtnClicked = false;
});

//Evènement pour dessiner dans la grille
container.addEventListener("mouseover", (e) => {
  if (isBtnClicked) {
    let target = e.target;
    if (currentMode === "color") {
      target.style.backgroundColor = `${color}`;
    } else if (currentMode === "rainbow") {
      //Les variables pour obtenir aléatoirement les couleurs
      let red = getRandomColor();
      let green = getRandomColor();
      let blue = getRandomColor();

      target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (currentMode === "eraser") {
      target.style.backgroundColor = "";
    }
  }
});

makeGrid();
