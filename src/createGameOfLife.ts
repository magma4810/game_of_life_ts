import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";
import { gosperGliderGun } from "./gosperGliderGun";
import { virus } from "./virus";
import { locomotive } from "./locomotive";
import { gameInit } from "./gameInit";

export function createGameOfLife(htmlElement: Element) {
  let gameIsRunning: boolean = false;
  let timer: number | null | ReturnType<typeof setTimeout> = null;
  let second: number = 1000;
  let speedHTML: number = 1000;
  let columns: number = 10;
  let rows: number = 10;
  gameInit(htmlElement,speedHTML);
  const fieldWrapper: Element | null =
    htmlElement.querySelector(".field-wrapper");
  const button: Element | null = htmlElement.querySelector(".start");
  let field: number[][] = Array.from({ length: rows }, () =>
    Array(columns).fill(0),
  );

  drawField(fieldWrapper!, field);

  const inputColumns = htmlElement.querySelector(
    ".inputColumns",
  ) as HTMLInputElement | null;
  const inputRows = htmlElement.querySelector(
    ".inputRows",
  ) as HTMLInputElement | null;
  const speedElement = htmlElement.querySelector(".second");
  function checkInputColumns() {
    if (inputColumns) {
        inputColumns.value = columns.toString();
    }
  }
  function checkInputRows() {
    if (inputRows) {
        inputRows.value = rows.toString();
    }
  }
  checkInputColumns();
  checkInputRows();
  const minusColumnsButton = htmlElement.querySelector(".minusColumns");
  if (minusColumnsButton) {
    minusColumnsButton.addEventListener("click", () => {
      columns--;
      checkInputColumns();
      field.map((el) => el.pop());
      const rowsHTML = htmlElement.querySelector('table')!.rows;
      for(let i = 0;i< rows;i++){
        rowsHTML[i].deleteCell(0);   
      }
    });
  }
  const plusColumnsButton = htmlElement.querySelector(".plusColumns");
  if (plusColumnsButton) {
    plusColumnsButton.addEventListener("click", () => {
      columns++;
      checkInputColumns();
      field.map((el) => el.push(0));
      const rowsHTML = htmlElement.querySelector('table')!.rows;
      for (let i = 0; i < rows; i++) {
        const cell = document.createElement('td');
        
        cell.setAttribute('data-x', columns.toString());
        cell.setAttribute('data-y', rows.toString());
        cell.classList.add('cell', 'dead');
        cell.style.backgroundColor = '#FFFFFF';
        cell.style.height = '10px';
        cell.style.width = '10px';
        rowsHTML[i].appendChild(cell);
    }
    
    });
  }
  const minusRowsButton = htmlElement.querySelector(".minusRows");
  if (minusRowsButton) {
    minusRowsButton.addEventListener("click", () => {
      rows--;
      checkInputRows();
      field.pop();
      const rowsHTML = htmlElement.querySelector('table')!.rows;
      rowsHTML[rowsHTML.length-1].remove();   
    });
  }
  const plusRowsButton = htmlElement.querySelector(".plusRows");
  if (plusRowsButton) {
    plusRowsButton.addEventListener("click", () => {
      rows++;
      checkInputRows();
      field.push(Array(columns).fill(0));
      const column = document.createElement('tr');
      const rowsHTML = htmlElement.querySelector('tbody')!;
      for(let i = 0;i<columns;i++){
        const cell = document.createElement('td');
        cell.setAttribute('data-x', columns.toString());
        cell.setAttribute('data-y', rows.toString());
        cell.classList.add('cell', 'dead');
        cell.style.backgroundColor = '#FFFFFF';
        cell.style.height = '10px';
        cell.style.width = '10px';
        column.append(cell);
      }
      rowsHTML.append(column);
    });
  }

  function inputSize() {
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
    field = newField;
    drawField(fieldWrapper!, field);
  }
  const enterSize = htmlElement.querySelector(".enterSize");
  if (enterSize) {
    enterSize.addEventListener("click", () => {
      inputSize();
    });
}

  function minusSpeed() {
    const minusSpeedHTML = htmlElement.querySelector(".minusSpeed");
    if (minusSpeedHTML) {
      minusSpeedHTML.addEventListener("click", () => {
        if (speedHTML < 100) {
          speedHTML += 10;
          second += 10;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        } else {
          speedHTML += 100;
          second += 100;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        }
      });
    }
  }
  minusSpeed();
  function plusSpeed() {
    const plusSpeedHTML = htmlElement.querySelector(".plusSpeed");
    if (plusSpeedHTML) {
      plusSpeedHTML.addEventListener("click", () => {
        if (speedHTML <= 100 && speedHTML > 0) {
          speedHTML -= 10;
          second -= 10;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        } else if (speedHTML > 0) {
          speedHTML -= 100;
          second -= 100;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        }
      });
    }
  }
  plusSpeed();
  function update() {
    columns = 60;
    rows = 40;
    // @ts-ignore
    inputColumns.value = columns;
    // @ts-ignore
    inputRows.value = rows;
  }
  const setFirst = htmlElement.querySelector(".setFirst");
  setFirst?.addEventListener("click", () => {
    field = gosperGliderGun();
    update();
    drawField(fieldWrapper!, field);
  });
  const setSecond = htmlElement.querySelector(".setSecond");
  setSecond?.addEventListener("click", () => {
    field = virus();
    update();
    drawField(fieldWrapper!, field);
  });
  const setThird = htmlElement.querySelector(".setThird");
  setThird?.addEventListener("click", () => {
    field = locomotive();
    update();
    drawField(fieldWrapper!, field);
  });
  function stopGame() {
    gameIsRunning = false;
    button!.innerHTML = "Start";
    clearInterval(timer!);
  }
  const clear = htmlElement.querySelector(".clear");
  if (clear) {
    clear.addEventListener("click", () => {
      field = Array.from({ length: rows }, () => Array(columns).fill(0));
      drawField(fieldWrapper!, field);
    });
    stopGame();
  }
  function startGame() {
    gameIsRunning = true;
    button!.innerHTML = "Stop";
    timer = setInterval(() => {
      field = getNextState(field);
      drawField(fieldWrapper!, field);
      if (!isAnyoneAlive(field)) {
        alert("Death on the block");
        stopGame();
      }
    }, second);
  }
  button!.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}
