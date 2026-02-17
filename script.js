const container = document.querySelector(".container");
const button = document.querySelector("button");

///Fonction pour créer la grille
function createGrid(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      let div = document.createElement("div");
      div.setAttribute(
        "style",
        `width: calc(100% / ${number}); height: calc(100% / ${number}); border: 1px solid green; `,
      );

      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#ccc";
      });
      container.appendChild(div);
    }
  }
}

button.addEventListener("click", () => {
  const numberGrid = parseInt(
    prompt("How much square per side do you want ? (between 0 and 100) : "),
  );

  console.log(numberGrid);
  container.textContent = "";
  createGrid(numberGrid);
});
