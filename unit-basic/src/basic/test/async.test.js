const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // 흠... 함수 호출 후 코드블럭은 종료된다. it 끝남..
  // it 별도의 에러 없이 끝나버림..
  // done 을 쓴다..!

  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  //   리턴방식이 더 빨라!!

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  });

  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
