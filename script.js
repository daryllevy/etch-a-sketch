const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "height: 16px; width: 16px; background-color: green; margin: 10px 8px;",
    );

    container.appendChild(div);
  }
}
