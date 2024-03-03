import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";
import { getCellState } from "./getCellState";
import { getNewCellState } from "./getNewCellState";

export function getNextState(field: number[][]) {
  return field.map((row: number[], rowIndex: number) =>
    row.map((cell: number, cellIndex: number) => {
      const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
      const currentState = getCellState(field, cellIndex, rowIndex);
      const newState = getNewCellState(currentState, an);
      return newState;
    })
  );
}