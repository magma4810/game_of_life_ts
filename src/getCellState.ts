export function getCellState(field: number[][], x: number, y: number) {
    const row = field[y];
    if (row === undefined) {
        return 0;
    }
    const cell = row[x];
    if (cell === undefined) {
        return 0;
    }
    return cell;
}
