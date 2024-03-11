import { virus } from "./virus";

it("virus", () => {
    const field = virus();
    expect(field.length).toBe(40);
    expect(field[0].length).toBe(58);
});
