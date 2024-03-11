import { locomotive } from "./locomotive";

it("locomotive", () => {
    const field = locomotive();
    expect(field.length).toBe(40);
    expect(field[0].length).toBe(60);
});
