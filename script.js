const container = document.querySelector(".container");
const buttonNew = document.querySelector(".btn-new");
const btnClear = document.querySelector(".clear");

/// Grille initiale
function showInitialGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let div = document.createElement("div");
      div.setAttribute(
        "style",
        `width: calc(100% / 16); height: calc(100% / 16); border: 1px solid #0e0c0c85; `,
      );
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `#000`;
      });

      container.appendChild(div);
    }
  }
}

///Fonction pour créer la grille
function createGrid(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let div = document.createElement("div");
      //Les variables pour obtenir aléatoirement les couleurs
      let red = getRandomColor();
      let green = getRandomColor();
      let blue = getRandomColor();

      div.setAttribute(
        "style",
        `width: calc(100% / ${number}); height: calc(100% / ${number}); border: 1px solid green; `,
      );

      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      });
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
  createGrid(numberGrid);
});

//Evènement pour clear la grille
btnClear.addEventListener("click", () => {
  container.textContent = "";
  showInitialGrid();
});

showInitialGrid();
