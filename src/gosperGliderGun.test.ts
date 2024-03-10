import { gosperGliderGun } from "./gosperGliderGun"

it('gosperGliderGun',()=>{
    const field = gosperGliderGun();
    expect(field.length).toBe(40);
    expect(field[0].length).toBe(60);
})