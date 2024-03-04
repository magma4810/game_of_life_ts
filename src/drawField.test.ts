import { drawField } from "./drawField";

describe("drawField", () => {
  let onCellClick: (arg1: number, arg2: number) => void;
  let el: Element;

  beforeEach(() => {
    onCellClick = jest.fn();
    el = document.createElement("div");
  });

  it("renders dead field 1x1", () => {
    drawField(el, [[0]], onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(1);
    expect(el.querySelectorAll(".cell.dead").length).toBe(1);
  });

  it("renders alive field 1x1", () => {
    drawField(el, [[1]], onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(1);
    expect(el.querySelectorAll(".cell.alive").length).toBe(1);
  });

  it("renders field mxn", () => {
    const field = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ];
    drawField(el, field, onCellClick);
    expect(el.querySelectorAll(".cell").length).toBe(9);
    expect(el.querySelectorAll(".cell.alive").length).toBe(3);
    expect(el.querySelectorAll(".cell.dead").length).toBe(6);
  });
});
