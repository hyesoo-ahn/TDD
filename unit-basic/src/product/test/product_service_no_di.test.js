const ProductClient = require("../product_client.js");
const ProductService = require("../product_service_no_di.js");

jest.mock("../product_client");

describe("ProductClient", () => {
  // mock을 남용하는 사례
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);

  // 위에 선언한 mock과 fetchItems함수를 mockImplementation 메서드를 이용해서 연결시킨다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
    //모든 테스트 수행 전에
    fetchItems.mockClear();
    ProductClient.mockClear();
    // 이렇게 하면.. 너무 의존적이야...!!!
    // 각각 독립적으로 만들기 위헤 상위에 mock을 선언
  });

  /// ===> 이렇게 하면 의존성 높일 수 있다.!!

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});
