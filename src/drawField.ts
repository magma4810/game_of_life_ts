import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";

export function drawField(
  htmlElement: Element,
  field: number[][],
  onCellClick: (arg1: number, arg2: number) => void,
) {
  const rowIterator = (row: number[], rowIndex: number) =>
    `<tr>${row
      .map((cell: number, columnIndex: number) => {
        const neighbours = getNumOfAliveNeighbours(
          columnIndex,
          rowIndex,
          field,
        );
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
    if (x >= 0 && y >= 0) {
      onCellClick(Number(x), Number(y));
    }
  });
}
