import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";

export function drawField(htmlElement: Element, field: number[][]) {
  const rowIterator = (row: number[], rowIndex: number) =>
    `<tr>${row
      .map((cell: number, columnIndex: number) => {
        const neighbours = getNumOfAliveNeighbours(
          columnIndex,
          rowIndex,
          field,
        );
        // console.log('+');
        if ((neighbours < 2 || neighbours > 3) && cell === 1) {
          return `<td 
            data-x=${columnIndex}
            data-y=${rowIndex}
            class="cell alive" 
            style="background-color:#808080; height:10px; width:10px;"></td>`;
        }
        if (cell === 1) {
          return `<td 
            data-x=${columnIndex}
            data-y=${rowIndex}
            class="cell alive" 
            style="background-color:#000000; height:10px; width:10px;"></td>`;
        }
        return `<td 
            data-x=${columnIndex}
            data-y=${rowIndex}
            class="cell dead" 
            style="background-color:#FFFFFF; height:10px; width:10px;"></td>`;
      })
      .join("")}</tr>`;

  const table = `<table border=1>${field.map(rowIterator).join("")}</table>`;

  htmlElement!.innerHTML = table;

  htmlElement!.querySelector("table")!.addEventListener("click", (ev) => {
    const clickedElement = ev.target;
    // @ts-ignore
    const x = clickedElement.getAttribute("data-x");
    // @ts-ignore
    const y = clickedElement.getAttribute("data-y");
    if (field[y] && typeof field[y][x] !== "undefined") {
      field[y][x] = field[y][x] === 0 ? 1 : 0;

      if (y >= 0 && x >= 0) {
        const element = document.querySelector(
          `[data-x="${x}"][data-y="${y}"]`,
        );
        // @ts-ignore
        element.style.backgroundColor = "#000000";
        // @ts-ignore
        element.className = "cell alive";
      }
    }
  });
}

export function drawInit(htmlElement: Element, speedHTML: number) {
  htmlElement.innerHTML = `<button class = "setFirst" style = "float:right">Gosper glider gun</button><br>
  <button class = "setSecond" style = "float:right">Virus</button>
  <button class = "setThird" style = "float:right">Locomotive</button>
  Columns<button class = "minusColumns">-</button>
    <input class = "inputColumns" style = "height:10px; width:15px">  <button class = "plusColumns">+</button><br>
    Rows<button class = "minusRows">-</button>  <input class = "inputRows" style = "height:10px; width:15px">
    <button class = "plusRows">+</button><br>
    Speed<button class = "minusSpeed">-</button><u> 1 step per <u class = "second">${speedHTML / 1000}</u> second </u><button class = "plusSpeed">+</button><br>
    <button class = "start">Start</button>
    <button class = "enterSize">Enter size</button>  <button class="clear">Clear</button><br>
    <div class="field-wrapper"></div>`;
}
