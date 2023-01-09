const check = require("../check.js");

// jest에서 제공하는 Mock 함수를 사용한다.
describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess.mock.calls.length).toBe(1);
  });
});
