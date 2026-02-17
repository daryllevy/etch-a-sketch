const container = document.querySelector(".container");
const buttonNew = document.querySelector(".btn-new");
const btnClear = document.querySelector(".clear");
const btnRainbow = document.querySelector(".rainbow");
let currentMode = "black";

/// Fonction pour avoir une grid
function MakeGrid(number = 16) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let div = document.createElement("div");
      div.setAttribute(
        "style",
        `width: calc(100% / ${number}); height: calc(100% / ${number}); border: 1px solid #0e0c0c85; `,
      );

      container.appendChild(div);
    }
  }
}

///Fonction pour créer la grille
function createGrid(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let div = document.createElement("div");

      div.setAttribute(
        "style",
        `width: calc(100% / ${number}); height: calc(100% / ${number}); border: 1px solid green; `,
      );

      div.addEventListener("mouseover", () => {});
      container.appendChild(div);
    }
  }
}

/// Fonction pour obtenir une couleur aléatoire
function getRandomColor() {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

buttonNew.addEventListener("click", () => {
  const numberGrid = parseInt(
    prompt("How much square per side do you want ? (between 0 and 100) : "),
  );

  console.log(numberGrid);
  container.textContent = "";
  MakeGrid(numberGrid);
});

//Evènement pour clear la grille
btnClear.addEventListener("click", () => {
  container.textContent = "";
  MakeGrid();
});

// Evènement pour avoir les couleurs aléatoires
btnRainbow.addEventListener("click", () => {
  if (currentMode === "rainbow") {
    currentMode = "black";
    btnRainbow.classList.remove("rainbow-color");
  } else if (currentMode === "black") {
    currentMode = "rainbow";
    btnRainbow.classList.add("rainbow-color");
  }
});

//Evènement pour dessiner
container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (currentMode === "black") {
    target.style.backgroundColor = "#000";
  } else if (currentMode === "rainbow") {
    //Les variables pour obtenir aléatoirement les couleurs
    let red = getRandomColor();
    let green = getRandomColor();
    let blue = getRandomColor();

    target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
});

MakeGrid();
