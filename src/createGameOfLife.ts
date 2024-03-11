import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";
import { gosperGliderGun } from "./gosperGliderGun";
import { virus } from "./virus";
import { locomotive } from "./locomotive";
import { gameInit } from "./gameInit";
import {
    plusColumn,
    minusColumn,
    plusRows,
    minusRows,
    inputSize,
    rows,
    columns,
    speed,
    minusSpeed,
    plusSpeed,
    update,
} from "./buttons";

export function createGameOfLife(htmlElement: Element) {
    let gameIsRunning: boolean = false;
    let timer: number | null | ReturnType<typeof setTimeout> = null;
    let field: number[][] = Array.from({ length: 10 }, () => Array(10).fill(0));
    gameInit(htmlElement, speed);
    const fieldWrapper: Element | null =
    htmlElement.querySelector(".field-wrapper");
    const button: Element | null = htmlElement.querySelector(".start");
    const inputColumns = htmlElement!.querySelector(
        ".inputColumns",
    ) as HTMLInputElement | null;
    const inputRows = htmlElement!.querySelector(
        ".inputRows",
    ) as HTMLInputElement | null;

    drawField(fieldWrapper!, field);
    const plusColumnsButton = htmlElement!.querySelector(".plusColumns");
    if (plusColumnsButton) {
        plusColumnsButton.addEventListener("click", () => {
            plusColumn(htmlElement, field);
        });
    }
    const minusColumnsButton = htmlElement.querySelector(".minusColumns");
    if (minusColumnsButton) {
        minusColumnsButton.addEventListener("click", () => {
            minusColumn(htmlElement, field);
        });
    }
    const minusRowsButton = htmlElement.querySelector(".minusRows");
    if (minusRowsButton) {
        minusRowsButton.addEventListener("click", () => {
            minusRows(htmlElement, field);
        });
    }
    const plusRowsButton = htmlElement.querySelector(".plusRows");
    if (plusRowsButton) {
        plusRowsButton.addEventListener("click", () => {
            plusRows(htmlElement, field);
        });
    }
    minusSpeed(htmlElement);
    plusSpeed(htmlElement);

    function stopGame() {
        gameIsRunning = false;
    button!.innerHTML = "Start";
    clearInterval(timer!);
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
    }, speed);
    }
  button!.addEventListener("click", () => {
      if (!gameIsRunning) {
          startGame();
      } else {
          stopGame();
      }
  });

  const enterSize: Element | null = document.querySelector(".enterSize");
  if (enterSize) {
      enterSize.addEventListener("click", () => {
          field = inputSize(htmlElement, fieldWrapper!, field);
      });
  }
  const clear = htmlElement.querySelector(".clear");
  if (clear) {
      clear.addEventListener("click", () => {
          field = Array.from({ length: rows }, () => Array(columns).fill(0));
          drawField(fieldWrapper!, field);
          stopGame();
      });
  }
  const setFirst = htmlElement.querySelector(".setFirst");
  setFirst?.addEventListener("click", () => {
      field = gosperGliderGun();
      update(inputColumns!, inputRows!);
      drawField(fieldWrapper!, field);
  });
  const setSecond = htmlElement.querySelector(".setSecond");
  setSecond?.addEventListener("click", () => {
      field = virus();
      update(inputColumns!, inputRows!);
      drawField(fieldWrapper!, field);
  });
  const setThird = htmlElement.querySelector(".setThird");
  setThird?.addEventListener("click", () => {
      field = locomotive();
      update(inputColumns!, inputRows!);
      drawField(fieldWrapper!, field);
  });
}
