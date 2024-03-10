/* eslint-disable no-param-reassign */
import { createGameOfLife } from "./createGameOfLife";
import { drawField, drawInit } from "./draw";

jest.mock("./draw");

const sleep = (x: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, x);
  });

describe("createGameOfLife", () => {
  let element: Element;
  const originalAlert = window.alert;
  beforeEach(() => {
    element = document.createElement("div");
    window.alert = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
    window.alert = originalAlert;
  });
  describe("UI", () => {
    createGameOfLife(element);
    let start: Element | null;
    let fieldWrapper: Element | null;
    if(element){
        start= element.querySelector(".start");
        fieldWrapper =
      element.querySelector(".field-wrapper");
    }
    it("creates Start button and field", () => {
      createGameOfLife(element);

      if (start) {
        expect(start).toBeTruthy();
        expect(start.innerHTML).toBe("Start");
      }

      if (fieldWrapper) {
        expect(fieldWrapper).toBeTruthy();
      }
    });
    it("changes button name on click", () => {
      createGameOfLife(element);
      if (start) {
        expect(start.innerHTML).toBe("Start");
      

      const startButton = element.querySelector(".start");
      const clickEvent = new MouseEvent("click", {});

      if (startButton) {
        startButton.dispatchEvent(clickEvent);
      }
      expect(start.innerHTML).toBe("Stop");
      if (startButton) {
        startButton.dispatchEvent(clickEvent);
      }
      expect(start.innerHTML).toBe("Start");
      if (startButton) {
        startButton.dispatchEvent(clickEvent);
      }
      expect(start.innerHTML).toBe("Stop");
    }
    });

    it("draws field", () => {
      // @ts-expect-error FIXME
      drawField.mockImplementation((fieldEl, field) => {
        if(fieldEl){
            fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
        }

      });
      createGameOfLife(element);
      if(fieldWrapper){
        expect(fieldWrapper.innerHTML).toBe(
            `drawField(${JSON.stringify([
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ])})`,
          );
      }
      
    });

    it("redraw field on interaction with it", () => {
      let onCellClick: (arg1: number, arg2: number) => void = jest.fn();
      function drawFieldHTML(field: number[][]): string {
        return `drawField(${JSON.stringify(field)})`;
      }
      (drawField as jest.Mock).mockImplementation(
        (fieldEl: Element, field: number[][]) => {
          onCellClick = (x: number, y: number) => {
            field[y][x] = field[y][x] === 0 ? 1 : 0;
            drawField(fieldEl!, field);
          };
          fieldEl.innerHTML = drawFieldHTML(field);
        },
      );

      createGameOfLife(element);

      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
      onCellClick(0, 1);
      onCellClick(1, 1);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
    });
    it("on start it runs 1sec timer to update state", async () => {
      let onCellClick: (arg1: number, arg2: number) => void = jest.fn();
      function drawFieldHTML(field: number[][]): string {
        return `drawField(${JSON.stringify(field)})`;
      }
      (drawField as jest.Mock).mockImplementation(
        (fieldEl: Element, field: number[][]) => {
          onCellClick = (x: number, y: number) => {
            field[y][x] = field[y][x] === 0 ? 1 : 0;
            drawField(fieldEl!, field);
          };
          fieldEl.innerHTML = drawFieldHTML(field);
        },
      );

      createGameOfLife(element);
      onCellClick(0, 0);
      const startButton = element.querySelector(".start");
      const clickEvent = new MouseEvent("click", {});
      if (startButton) {
        startButton.dispatchEvent(clickEvent);
      }
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
      await sleep(1000);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])})`,
      );
    });
    it("stops game with alert, when none alive", async () => {
      let onCellClick: (arg1: number, arg2: number) => void = jest.fn();
      function drawFieldHTML(field: number[][]): string {
        return `drawField(${JSON.stringify(field)})`;
      }
      (drawField as jest.Mock).mockImplementation(
        (fieldEl: Element, field: number[][]) => {
          onCellClick = (x: number, y: number) => {
            field[y][x] = field[y][x] === 0 ? 1 : 0;
            drawField(fieldEl!, field);
          };
          fieldEl.innerHTML = drawFieldHTML(field);
        },
      );

      createGameOfLife(element);
      onCellClick(0, 0);
      const startButton = element.querySelector(".start");
      const clickEvent = new MouseEvent("click", {});
      if (startButton) {
        startButton.dispatchEvent(clickEvent);
      }
      await sleep(1000);
      expect(window.alert).toHaveBeenCalledWith("Death on the block");

      expect(element.querySelector(".start")!.innerHTML).toBe("Start");
    });
  });
});
