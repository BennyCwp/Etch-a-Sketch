const container = document.querySelector(".container");
const section = document.querySelector(".section");
const grayBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const rainbowBtn = document.createElement("button");
const btnContainer = document.querySelector(".btn-container");

rainbowBtn.innerText = "Rainbow";
grayBtn.innerText = "Gray";
resetBtn.innerText = "Reset";

btnContainer.appendChild(resetBtn);
btnContainer.appendChild(grayBtn);
btnContainer.appendChild(rainbowBtn);



function createGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        let box = document.createElement("div");
        // box.classList.add("box");
        container.appendChild(box).classList.add("box");
        box.style.border = "1px solid black";
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }

}

function reset() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
    const userInput = prompt("Enter the number of grids, maximum: 100", 100);
    if (userInput === null || userInput < 1) {
        createGrid(16, 16);
        grayColor();
    } else {
        createGrid(userInput, userInput);
        grayColor();
    }
}

function grayColor() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => box.addEventListener("mouseover", () => {
        const random = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${random},${random},${random})`;
    }))
}

function rainbowColor() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${r},${g},${b})`;
    }))
}

createGrid(16, 16);
grayColor();
rainbowBtn.addEventListener("click", rainbowColor);
grayBtn.addEventListener("click", grayColor);
resetBtn.addEventListener("click", reset);



// boxes.forEach(box => box.addEventListener("mouseover", changeColor))