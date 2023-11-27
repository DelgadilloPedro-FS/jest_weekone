const { sqrt,max } = require("./math");
describe("testing the calculate module", () => {
  test("should square root number input", () => {
    expect(sqrt(25)).toBe(5);
  });
  test("should return bigger number input", () => {
    expect(max(25, 100)).toBe(100);
  });
});
