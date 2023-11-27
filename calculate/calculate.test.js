const { add, subtract, multiply, divide } = require("./calculate");
describe("testing the calculate module", () => {
  test("should add two number inputs", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("should subtract two number inputs", () => {
    expect(subtract(10, 9)).toBe(1);
  });
  test("should multiply two number inputs", () => {
    expect(multiply(2, 5)).toBe(10);
  });
  test("should divide two number inputs", () => {
    expect(divide(10, 2)).toBe(5);
  });
});
