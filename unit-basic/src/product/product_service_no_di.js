const ProductClient = require("./product_client");

class ProductService {
  constructor() {
    this.ProductClient = new ProductClient();
  }

  fetchAvailableItems() {
    // 구매 가능한 제품만 필터링해서 리턴한다...
    return this.ProductClient.fetchItems().then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
