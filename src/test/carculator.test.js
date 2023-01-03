const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  // 에러를 예상하는 코드 작성..!
  // calculator.js에서 내가 작성한 에러가 뜰 것임을 예측해야 한다.
  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value cannot be greater than 100");
  });

  it("substacts", () => {
    cal.set(10);
    cal.subtract(6);
    expect(cal.value).toBe(4);
  });

  it("multiplies", () => {
    cal.set(10);
    cal.multiply(10);
    expect(cal.value).toBe(100);
  });

  describe("divides", () => {
    it("0/0===NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("0/0===Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
