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
} from "./buttons";

export function createGameOfLife(htmlElement: Element) {
  let gameIsRunning: boolean = false;
  let timer: number | null | ReturnType<typeof setTimeout> = null;
  let second: number = 1000;
  let speedHTML: number = 1000;
  let field: number[][] = Array.from({ length: 10 }, () =>
  Array(10).fill(0),
);
  gameInit(htmlElement, speedHTML);
  const fieldWrapper: Element | null =
    htmlElement.querySelector(".field-wrapper");
  const button: Element | null = htmlElement.querySelector(".start");

  drawField(fieldWrapper!, field);
  plusColumn(htmlElement, field);
  minusColumn(htmlElement, field);
  minusRows(htmlElement, field);
  plusRows(htmlElement, field);

  const enterSize: Element | null = document.querySelector(".enterSize");
  if (enterSize) {
    enterSize.addEventListener("click", () => {
      field = inputSize(htmlElement, fieldWrapper!, field);
    });
  }
  //   clear(htmlElement, fieldWrapper!, field);
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
    const columns = 60;
    const rows = 40;
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
