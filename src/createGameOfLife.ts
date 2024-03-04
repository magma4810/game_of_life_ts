import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

export function createGameOfLife(htmlElement: Element) {
  let gameIsRunning: boolean = false;
  let timer: number | null | ReturnType<typeof setTimeout> = null;
  let second: number = 1000;
  let speedHTML: number = 1000;
  let columns: number = 10;
  let rows: number = 10;

  htmlElement.innerHTML = `Columns<button class = "minusColumns">-</button>
    <input class = "inputColumns" style = "height:10px; width:15px">  <button class = "plusColumns">+</button><br>
    Rows<button class = "minusRows">-</button>  <input class = "inputRows" style = "height:10px; width:15px">
    <button class = "plusRows">+</button><br>
    Speed<button class = "minusSpeed">-</button><u> 1 step per <u class = "second">${second / 1000}</u> second </u><button class = "plusSpeed">+</button><br>
    <button class = "start">Start</button>
    <button class = "enterSize">Enter size</button>  <button class="clear">Clear</button><br>
    <div class="field-wrapper"></div>`;
  const fieldWrapper: Element | null =
    htmlElement.querySelector(".field-wrapper");
  const button: Element | null = htmlElement.querySelector(".start");
  function fillField(rowsF: number, columnsF: number) {
    const field: number[][] = [];
    for (let i = 0; i < rowsF; i++) {
      field[i] = [];
      for (let j = 0; j < columnsF; j++) {
        field[i][j] = 0;
      }
    }
    return field;
  }
  let field: number[][] = fillField(rows, columns);
  function cellClickHandler(x: number, y: number) {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper!, field, cellClickHandler);
  }

  drawField(fieldWrapper!, field, cellClickHandler);

  const inputColumns = document.querySelector(
    ".inputColumns",
  ) as HTMLInputElement | null;
  const inputRows = document.querySelector(
    ".inputRows",
  ) as HTMLInputElement | null;
  const speedElement = document.querySelector(".second");
  function checkInputColumns() {
    if (inputColumns) {
      if (inputColumns && typeof columns === "number") {
        inputColumns.value = columns.toString();
      }
    }
  }
  function checkInputRows() {
    if (inputRows) {
      if (inputRows && typeof rows === "number") {
        inputRows.value = rows.toString();
      }
    }
  }
  checkInputColumns();
  checkInputRows();
  const minusColumnsButton = document.querySelector(".minusColumns");
  if (minusColumnsButton) {
    minusColumnsButton.addEventListener("click", () => {
      columns--;
      checkInputColumns();
      field = fillField(rows, columns);
      drawField(fieldWrapper!, field, cellClickHandler);
    });
  }
  const plusColumnsButton = document.querySelector(".plusColumns");
  if (plusColumnsButton) {
    plusColumnsButton.addEventListener("click", () => {
      columns++;
      checkInputColumns();
      field = fillField(rows, columns);
      drawField(fieldWrapper!, field, cellClickHandler);
    });
  }
  const minusRowsButton = document.querySelector(".minusRows");
  if (minusRowsButton) {
    minusRowsButton.addEventListener("click", () => {
      rows--;
      checkInputRows();
      field = fillField(rows, columns);
      drawField(fieldWrapper!, field, cellClickHandler);
    });
  }
  const plusRowsButton = document.querySelector(".plusRows");
  if (plusRowsButton) {
    plusRowsButton.addEventListener("click", () => {
      rows++;
      checkInputRows();
      field = fillField(rows, columns);
      drawField(fieldWrapper!, field, cellClickHandler);
    });
  }

  function clearAndEnterSize() {
    // @ts-ignore
    rows = inputRows.value;
    // @ts-ignore
    columns = inputColumns.value;
    field = fillField(rows, columns);
    drawField(fieldWrapper!, field, cellClickHandler);
  }
  const enterSize = document.querySelector(".enterSize");
  if (enterSize) {
    enterSize.addEventListener("click", () => {
      clearAndEnterSize();
    });
  }
  const clear = document.querySelector(".clear");
  if (clear) {
    clear.addEventListener("click", () => {
      clearAndEnterSize();
    });
  }

  function minusSpeed() {
    const minusSpeedHTML = document.querySelector(".minusSpeed");
    if (minusSpeedHTML) {
      minusSpeedHTML.addEventListener("click", () => {
        if (speedHTML > 0) {
          speedHTML *= 2;
          second += 500;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        }
      });
    }
  }
  minusSpeed();
  function plusSpeed() {
    const plusSpeedHTML = document.querySelector(".plusSpeed");
    if (plusSpeedHTML) {
      plusSpeedHTML.addEventListener("click", () => {
        if (speedHTML >= 0) {
          speedHTML /= 2;
          second -= 500;
          // @ts-ignore
          speedElement.textContent = speedHTML / 1000;
        }
      });
    }
  }
  plusSpeed();
  function stopGame() {
    gameIsRunning = false;
    button!.innerHTML = "Start";
    clearInterval(timer!);
  }
  function startGame() {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    button!.innerHTML = "Stop";
    // - запустить таймер для обновления поля
    timer = setInterval(() => {
      // В таймере обновления поля
      // - посчитать новое состояние поля
      // - отрисовать новое состояние поля
      // - проверить, что есть живые клетки
      // - если живых клеток нет
      //    - остановить таймер
      //    - вывести сообщение
      field = getNextState(field);
      drawField(fieldWrapper!, field, cellClickHandler);
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
