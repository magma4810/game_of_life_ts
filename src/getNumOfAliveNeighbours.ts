import { getCellState } from "./getCellState";

export function getNumOfAliveNeighbours(column: number, row: number, field: number[][]) {
  let neighbours = 0;

  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number(getCellState(field, j, row - 1));
  }

  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number(getCellState(field, j, row + 1));
  }

  neighbours += Number(getCellState(field, column - 1, row));
  neighbours += Number(getCellState(field, column + 1, row));

  return neighbours;
}