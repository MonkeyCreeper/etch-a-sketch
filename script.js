const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
   //cell.innerText = c + 1;  //Nützlich um zu zeigen wie viele Zellen erstellt wurden. Macht aber Größe des kaputt (overflow), wegen Größe der Ziffern
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

const grid_items = document.querySelectorAll(".grid-item");

grid_items.forEach((griditem) => {
  griditem.addEventListener("mouseover", changeColor);
});

function changeColor() {
  this.style.backgroundColor = "black";
}

const clearButton = document.getElementById("clear-button");
//console.log(resetbutton);
//console.log(grid_items);
clearButton.addEventListener("click", resetColor);

function resetColor() {
  for (let i = 0; i < grid_items.length; i++) {
    grid_items[i].style.backgroundColor = "white";
  } // Frage geht das auch wie changeColor mit nem forEach ?
}

const sizeButton = document.getElementById("size-button");
sizeButton.addEventListener("click", changeSize);

function changeSize() {
  let n = prompt("Please Enter A Size For Your Grid (1-64),");
  let container = document.getElementById("container");
  console.log(container.length);
  while (container.firstChild){
    container.removeChild(container.lastChild)
  }
  console.log(container.length);
  makeRows(n, n);
  let grid_items = document.querySelectorAll(".grid-item");
  grid_items.forEach((griditem) => {
    griditem.addEventListener("mouseover", changeColor);
  }); 
}

/*let div = document.createElement("div");
div.innerHTML = "1";
console.log(div);
*/
/*
const container = document.getElementById("container");
 // let div = document.createElement("div");
  for(let i =1;i<=16*16;i++){
    let div = document.createElement("div");
    //div.innerHTML = i;
    container.appendChild(div);
    console.log(div.textContent)
  } */
