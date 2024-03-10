import { drawField } from "./drawField";

let columns: number = 10;
let rows: number = 10;

export function plusColumn(htmlElement: Element,field :number[][]) {
  const plusColumnsButton = htmlElement!.querySelector(".plusColumns");
  const inputColumns = htmlElement!.querySelector(
    ".inputColumns",
  ) as HTMLInputElement | null;
  if (inputColumns) {
    inputColumns.value = columns.toString();
  }
  if (plusColumnsButton) {
    plusColumnsButton.addEventListener("click", () => {
      columns++;
      if (inputColumns) {
        inputColumns.value = columns.toString();
      }
      field.map((el) => el.push(0));
      const rowsHTML = htmlElement!.querySelector("table")!.rows;
      for (let i = 0; i < rows; i++) {
        const cell = document.createElement("td");

        cell.setAttribute("data-x", columns.toString());
        cell.setAttribute("data-y", rows.toString());
        cell.classList.add("cell", "dead");
        cell.style.backgroundColor = "#FFFFFF";
        cell.style.height = "10px";
        cell.style.width = "10px";
        rowsHTML[i].appendChild(cell);
      }
    });
  }
}

export function minusColumn(htmlElement: Element,field :number[][]) {
  const inputColumns = htmlElement!.querySelector(
    ".inputColumns",
  ) as HTMLInputElement | null;
  const minusColumnsButton = htmlElement.querySelector(".minusColumns");
  if (minusColumnsButton) {
    minusColumnsButton.addEventListener("click", () => {
      columns--;
      if (inputColumns) {
        inputColumns.value = columns.toString();
      }
      field.map((el) => el.pop());
      const rowsHTML = htmlElement.querySelector("table")!.rows;
      for (let i = 0; i < rows; i++) {
        rowsHTML[i].deleteCell(-1);
      }
    });
  }
}

export function minusRows(htmlElement: Element,field :number[][]) {
  const minusRowsButton = htmlElement.querySelector(".minusRows");
  const inputRows = htmlElement!.querySelector(
    ".inputRows",
  ) as HTMLInputElement | null;
  if (inputRows) {
    inputRows.value = rows.toString();
  }
  if (minusRowsButton) {
    minusRowsButton.addEventListener("click", () => {
      rows--;
      if (inputRows) {
        inputRows.value = rows.toString();
      }
      field.pop();
      const rowsHTML = htmlElement.querySelector("table")!.rows;
      rowsHTML[rowsHTML.length - 1].remove();
    });
  }
}

export function plusRows(htmlElement: Element,field :number[][]) {
  const plusRowsButton = htmlElement.querySelector(".plusRows");
  const inputRows = htmlElement!.querySelector(
    ".inputRows",
  ) as HTMLInputElement | null;
  if (inputRows) {
    inputRows.value = rows.toString();
  }
  if (plusRowsButton) {
    plusRowsButton.addEventListener("click", () => {
      rows++;
      if (inputRows) {
        inputRows.value = rows.toString();
      }
      field.push(Array(columns).fill(0));
      const column = document.createElement("tr");
      const rowsHTML = htmlElement.querySelector("tbody")!;
      for (let i = 0; i < columns; i++) {
        const cell = document.createElement("td");
        cell.setAttribute("data-x", columns.toString());
        cell.setAttribute("data-y", rows.toString());
        cell.classList.add("cell", "dead");
        cell.style.backgroundColor = "#FFFFFF";
        cell.style.height = "10px";
        cell.style.width = "10px";
        column.append(cell);
      }
      rowsHTML.append(column);
    });
  }
}

export function inputSize(htmlElement: Element, fieldWrapper: Element,field :number[][]) {
  const inputColumns = htmlElement!.querySelector(
    ".inputColumns",
  ) as HTMLInputElement | null;
  const inputRows = htmlElement!.querySelector(
    ".inputRows",
  ) as HTMLInputElement | null;

  // @ts-ignore
  rows = inputRows.value;
  // @ts-ignore
  columns = inputColumns.value;
  const newField: number[][] = [];
  let lengthFieldRow = field.length;
  let lengthFieldColumn = field[0].length;
  for (let i = 0; i < rows; i++) {
    lengthFieldRow = field.length;
    lengthFieldColumn = field[0].length;
    newField[i] = [];
    for (let j = 0; j < columns; j++) {
      if (lengthFieldRow > i && lengthFieldColumn > j) {
        if (field[i][j] === 1) {
          newField[i][j] = 1;
        } else {
          newField[i][j] = 0;
        }
      } else {
        newField[i][j] = 0;
      }
    }
  }
  drawField(fieldWrapper!, newField);
  return newField;
}

// export function clear(htmlElement: Element,
//   fieldWrapper: Element,
//   field: number[][],){
//     const clear = htmlElement.querySelector(".clear");
//   if (clear) {
//     clear.addEventListener("click", () => {
//       field = Array.from({ length: rows }, () => Array(columns).fill(0));
//       drawField(fieldWrapper!, field);
//     });
//     stopGame();
//   }
// }
