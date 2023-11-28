const { add, subtract, multiply, divide, sqrt, max } = require("./calculate");

describe("testing the calculate functions", () => {
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

describe("testing the advanced math functions", () => {
  test("should square root number input", () => {
    expect(sqrt(25)).toBe(5);
  });
  test("should return bigger number input", () => {
    expect(max(25, 100)).toBe(100);
  });
});
