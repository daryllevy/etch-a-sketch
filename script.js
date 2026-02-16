const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "width: calc(100% / 16); height: calc(100% / 16); border: 1px solid green; ",
    );

    container.appendChild(div);
  }
}
